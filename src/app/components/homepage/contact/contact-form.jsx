"use client"

import { useState, useRef, useCallback, useMemo } from "react"
import { TbMailForward } from "react-icons/tb"
import { toast } from "react-toastify"
import ReCAPTCHA from "react-google-recaptcha"

// Import Server
import { contactSendEmail } from "App/services/actions/contact.action"

// Import Form
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { getDefaultValuesForm } from "@/helpers/contact-form.helper"
import { ContactFormSchema } from "@/schemas/contact-form.schema"
import FormProvider, { RHFTextArea, RHFTextField } from "@/components/shared/hook-form"
import { useTranslations } from "next-intl"

// Component
function ContactForm({ lng }) {
  const t = useTranslations()

  // Hooks Form
  const methods = useForm({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: getDefaultValuesForm(),
  })
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods

  // Refs
  const recaptchaRef = useRef(null)

  // States
  const isLoading = useMemo(() => isSubmitting, [isSubmitting])

  // Handlers
  const onSubmitSendMessage = useCallback(
    async (data) => {
      // Validate Captcha
      const recaptchaValue = recaptchaRef.current.getValue()
      if (!recaptchaValue) {
        toast.error(t("captcha error"))
        return
      }

      // Send Email
      data.captcha = recaptchaValue
      const sendEmail = await toast.promise(contactSendEmail(data), {
        pending: t("message pending send"),
        success: t("message send"),
        error: t("message error send"),
      })

      // Send success
      if (sendEmail.success) {
        reset()
        recaptchaRef.current.reset()
      }
    },
    [recaptchaRef]
  )
  const onSubmitSendMessageError = useCallback((error) => {
    toast.warn(t("message error"))
    console.log({ error })
  }, [])

  // Render
  return (
    <div className="">
      <p className="mb-5 text-xl font-medium text-[#16f2b3] uppercase">{t("send a message")}</p>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitSendMessage, onSubmitSendMessageError)}>
        <div className="max-w-3xl rounded-lg border border-[#464c6a] p-3 text-white lg:p-5">
          <p className="text-sm text-[#d3d8e8]">{t("subtitle")}</p>
          <div className="mt-6 flex flex-col gap-4">
            <RHFTextField name="name" label={t("name")} placeholder="Juan Perez" disabled={isLoading} />

            <RHFTextField name="email" label={t("email")} placeholder="juan.p@gmail.com" disabled={isLoading} />

            <RHFTextArea name="message" label={t("message")} disabled={isLoading} />

            <div className="flex flex-col gap-2">
              <label className="text-base">reCAPTCHA: </label>
              <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} size="normal" ref={recaptchaRef} />
            </div>

            <div className="flex flex-col items-center gap-2">
              <button
                type="submit"
                className="flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 py-2.5 text-center text-xs font-medium tracking-wider text-white uppercase no-underline transition-all duration-200 ease-out hover:gap-3 hover:text-white hover:no-underline md:px-12 md:py-3 md:text-sm md:font-semibold"
                role="button"
                disabled={isLoading}
              >
                <span>{t("send message")}</span>
                <TbMailForward className="mt-1" size={18} />
              </button>
            </div>
          </div>
        </div>
      </FormProvider>
    </div>
  )
}

export default ContactForm
