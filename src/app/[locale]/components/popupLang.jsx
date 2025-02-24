"use client"

import { useState, useMemo, useCallback } from "react"
import Image from "next/image"
// import { useRouter, usePathname } from "next/navigation"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { FlagEs4x3 } from "App/components/ui/icons/FlagEs4x3"
import { FlagUs4x3 } from "App/components/ui/icons/FlagUs4x3"
import { usePathname } from "@/i18n/routing"
import { useLocale } from "next-intl"

function PopupLang() {
  // -- Server Hooks
  const t = useTranslations()
  const locale = useLocale()
  const pathname = usePathname()

  // -- States
  const [open, setOpen] = useState(false)

  // -- State Memo
  const langs = useMemo(
    () => [
      {
        label: t("English"),
        value: "en",
        icon: <FlagUs4x3 className="h-5 w-5" />,
      },
      {
        label: t("Spanish"),
        value: "es",
        icon: <FlagEs4x3 className="h-5 w-5" />,
      },
    ],
    [t]
  )
  const currentLang = useMemo(() => {
    return langs.find((lang) => lang.value === locale)
  }, [langs, locale])

  // -- Handlers
  const handlePopup = useCallback(() => setOpen((prev) => !prev), [setOpen])

  // -- Render
  return (
    <div
      className="popup block px-4 py-2 no-underline outline-none hover:text-pink-600 hover:no-underline"
      onClick={handlePopup}
    >
      {currentLang ? currentLang.icon : null}
      <span className={`popuptext text-sm text-white transition-colors duration-300 ${open ? "show" : ""}`}>
        {langs.map((lang) => (
          <Link key={lang.value} href={pathname} locale={lang.value}>
            <span className="inline-flex items-center gap-1 text-sm text-white transition-colors duration-300 hover:text-pink-600">
              {lang.icon}
              {lang.label}
            </span>
          </Link>
        ))}
      </span>
    </div>
  )
}

export default PopupLang
