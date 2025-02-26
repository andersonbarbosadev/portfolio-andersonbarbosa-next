"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import { routing, Link } from "@/i18n/routing"
import { FaSquareFacebook, FaSquareXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6"
import { RiContactsFill } from "react-icons/ri"
import HeroImages from "Public/image/logo-anderson.webp"
import HeroImg from "Public/hero.svg"
import { MynauiCloudDownload } from "App/components/ui/icons/MynauiCloudDownload"
import { useCurriculum } from "@/hooks/useCurriculum"

export const personalData = {
  github: "https://github.com/andersonbarbosadev",
  facebook: "https://www.facebook.com/andersonbarbosafullstack/",
  linkedIn: "https://www.linkedin.com/in/anderson-barbosa-romero/",
  twitter: "https://x.com/stiven96",
}

function HeroSection() {
  // -- Hooks
  const t = useTranslations()
  const { curriculumURL } = useCurriculum()

  // -- States Memo


  // -- Render
  return (
    <section id="hero" className="relative flex flex-col items-center py-4 lg:py-12">
      <Image
        src={HeroImg}
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10 justify-center p-2"
      />

      <div className="grid grid-cols-1 items-center gap-x-4 gap-y-8 lg:grid-cols-2 lg:gap-12">
        <div className="order-2 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:order-1 lg:pt-10">
          <h1 className="text-3xl leading-10 font-bold text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            {t("Hi")}, <br />
            {t("I'm")}&nbsp;
            <span className="text-red-400">Anderson Barbosa</span>
            , <br />
            <span className="bg-gradient-to-r from-yellow-200 via-red-400 to-indigo-400 bg-clip-text font-semibold text-transparent">
              {t("Full-Stack developer")}
            </span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target="_blank"
              className="text-pink-500 transition-all duration-300 hover:scale-125"
            >
              <FaGithub size={40} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="text-pink-500 transition-all duration-300 hover:scale-125"
            >
              <FaLinkedin size={40} />
            </Link>
            <Link
              href={personalData.facebook}
              target="_blank"
              className="text-pink-500 transition-all duration-300 hover:scale-125"
            >
              <FaSquareFacebook size={40} />
            </Link>
            <Link
              href={personalData.twitter}
              target="_blank"
              className="text-pink-500 transition-all duration-300 hover:scale-125"
            >
              <FaSquareXTwitter size={40} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="rounded-full bg-gradient-to-r from-violet-600 to-pink-500 p-[1px] transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="flex items-center gap-1 rounded-full border-none bg-[#0d1224] px-3 py-3 text-center text-xs font-medium tracking-wider text-[#ffff] uppercase no-underline transition-all duration-200 ease-out hover:gap-3 md:px-8 md:py-4 md:text-sm md:font-semibold">
                <span>{t("Contact me")}</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              className="flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 py-3 text-center text-xs font-medium tracking-wider text-white uppercase no-underline transition-all duration-200 ease-out hover:gap-3 hover:text-white hover:no-underline md:px-8 md:py-4 md:text-sm md:font-semibold"
              target="_blank"
              href={curriculumURL}
            >
              <span>{t("Get CV")}</span>
              <MynauiCloudDownload />
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center relative order-1 lg:order-2 w-96 h-96">
          <Image
            src={HeroImages}
            alt="Hero"
            quality={100}
            fill
            style={{
              borderRadius: "6%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
