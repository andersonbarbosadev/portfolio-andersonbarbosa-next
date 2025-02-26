"use client"

import Image from "next/image"
import ProfileImg from "Public/image/img-hero.webp"
import { useTranslations } from "next-intl"

function AboutSection() {
  // -- Hooks
  const t = useTranslations()

  // -- Render
  return (
    <section id="about" className="relative my-12 lg:my-16">
      <div className="absolute top-16 -right-8 hidden flex-col items-center lg:flex">
        <span className="w-fit rotate-90 rounded-md bg-[#1a1443] p-2 px-5 text-xl text-white">{t("About me")}</span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-2">
        <div className="order-2 lg:order-2">
          <p className="mb-5 text-center text-xl font-medium text-[#16f2b3] uppercase lg:text-start">{t("Profile")}</p>
          <p className="text-md text-justify text-gray-200 lg:w-3/4 lg:text-lg">{t("data.about.description")}</p>
        </div>
        <div className="order-1 flex justify-center lg:order-1">
          <Image
            src={ProfileImg}
            width={280}
            height={280}
            alt="profile"
            className="cursor-pointer rounded-lg grayscale transition-all duration-1000 hover:scale-110 hover:grayscale-0"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
