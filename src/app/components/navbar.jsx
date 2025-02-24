"use client"

import { Link } from "@/i18n/routing"
import PopupLang from "App/app/[locale]/components/popupLang"
import { useTranslations } from "next-intl"
import { MynauiCloudDownload } from "App/components/ui/icons/MynauiCloudDownload"
import clsx from "clsx"

function Navbar() {
  // -- Server Hooks
  const t = useTranslations()

  // -- Render
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="bg-gradient-to-r from-yellow-200 via-red-400 to-indigo-400 bg-clip-text font-semibold text-transparent"
          >
            Anderson Barbosa
          </Link>
        </div>

        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          {/* About */}
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                {t("About me")}
              </div>
            </Link>
          </li>

          {/* Soft Skills */}
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#soft-skills">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                {t("Soft skills")}
              </div>
            </Link>
          </li>

          {/* Skills */}
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">{t("Skills")}</div>
            </Link>
          </li>

          {/* Experience */}
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                {t("Experience")}
              </div>
            </Link>
          </li>

          {/* Certificates */}
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#certificates">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                {t("Certificates")}
              </div>
            </Link>
          </li>

          {/* Blogs */}
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#blogs">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">{t("Blogs")}</div>
            </Link>
          </li>

          {/* Education */}
          {/* <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                {t("Education")}
              </div>
            </Link>
          </li> */}

          {/* CV */}
          <li>
            <Link className="relative inline-block" href="/cv">
              <div className="animate-gradient-spin absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500 to-violet-600 blur-md"></div>
              <div
                className={clsx(
                  "relative flex items-center gap-1 rounded-lg bg-[#0d1224] px-4 py-2 text-white shadow-lg",
                  "transition-all duration-200 ease-out",
                  "hover:gap-2 hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-600"
                )}
              >
                {t("CV")}
                <MynauiCloudDownload />
              </div>
            </Link>
          </li>

          {/* Language */}
          <li>
            <PopupLang />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
