"use client";

import { useState, useRef, useCallback, useMemo } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

// Import Form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getDefaultValuesForm } from "@/helpers/contact-form.helper";
import { ContactSchema } from "@/schemas/contact-form.schema";
import FormProvider, {
  RHFTextArea,
  RHFTextField,
} from "@/components/shared/hook-form";
import { useMutationSendContact } from "@/services/site/contact";

// Component
function ContactForm() {
  // Hooks Form
  const methods = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: getDefaultValuesForm(),
  });
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  // Refs
  const recaptchaRef = useRef(null);

  // Hooks API
  const mutationSendContact = useMutationSendContact({
    onSuccess: () => {
      reset();
      recaptchaRef.current.reset();
    },
  });

  // States
  const isLoading = useMemo(
    () => isSubmitting || mutationSendContact.isPending,
    [isSubmitting, mutationSendContact.isPending]
  );

  // Handlers
  const onSubmitSendMessage = useCallback(
    async (data) => {
      // Validate Captcha
      const recaptchaValue = recaptchaRef.current.getValue();
      if (!recaptchaValue) {
        toast.error("Por favor, complete el reCAPTCHA.");
        return;
      }

      // API
      data.captcha = recaptchaValue;
      const mutatePromise = mutationSendContact.mutateAsync(data);
      toast.promise(mutatePromise, {
        pending: "Enviando mensaje...",
        success: "Mensaje enviado correctamente. ¡Gracias! 🎉",
        error: "Error al enviar el mensaje. Por favor, intente nuevamente. 🙏",
      });
    },
    [recaptchaRef]
  );
  const onSubmitSendMessageError = useCallback((error) => {
    toast.warn("Por favor, complete el formulario correctamente.");
    console.log({ error });
  }, []);

  // Render
  return (
    <div className="">
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        Envíame un mensaje
      </p>
      <FormProvider
        methods={methods}
        onSubmit={handleSubmit(onSubmitSendMessage, onSubmitSendMessageError)}
      >
        <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
          <p className="text-sm text-[#d3d8e8]">
            {
              "Si tiene alguna pregunta o inquietud, no dude en ponerse en contacto conmigo. Estoy atento a cualquier oportunidad de trabajo que se ajuste a mis aptitudes e intereses."
            }
          </p>
          <div className="mt-6 flex flex-col gap-4">
            <RHFTextField
              name="name"
              label="Nombre"
              placeholder="Juan Perez"
              disabled={isLoading}
            />

            <RHFTextField
              name="email"
              label="Email"
              placeholder="juan.p@gmail.com"
              disabled={isLoading}
            />

            <RHFTextArea name="message" label="Mensaje" disabled={isLoading} />

            <div className="flex flex-col gap-2">
              <label className="text-base">reCAPTCHA: </label>
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                size="normal"
                ref={recaptchaRef}
              />
            </div>

            <div className="flex flex-col items-center gap-2">
              <button
                type="submit"
                className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                role="button"
                disabled={isLoading}
              >
                <span>Enviar Mensaje</span>
                <TbMailForward className="mt-1" size={18} />
              </button>
            </div>
          </div>
        </div>
      </FormProvider>
    </div>
  );
}

export default ContactForm;
