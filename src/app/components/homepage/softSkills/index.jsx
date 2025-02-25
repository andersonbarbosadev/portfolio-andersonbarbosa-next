"use client"

import { useMemo } from "react"
import Image from "next/image"
import { BsPersonWorkspace } from "react-icons/bs"
import { FaDiagramProject, FaChess } from "react-icons/fa6"

import GlowCard from "../../helper/glow-card"
import experience from "Public/lottie/code.json"
import SectionImg from "Public/section.svg"
import BlurImg from "Public/blur-23.svg"
import dynamic from "next/dynamic"
import { useTranslations } from "next-intl"

const AnimationLottie = dynamic(() => import("App/app/components/helper/animation-lottie.jsx"), {
  ssr: false,
})

function SoftSkills() {
  // -- Hooks
  const t = useTranslations()

  // -- State Memo
  const softSkills = useMemo(() => {
    return [
      {
        id: 1,
        title: t("data.soft-skills.title1"),
        description: t("data.soft-skills.description1"),
        icon: <BsPersonWorkspace size={36} />,
      },
      {
        id: 2,
        title: t("data.soft-skills.title2"),
        description: t("data.soft-skills.description2"),
        icon: <FaChess size={36} />,
      },
      {
        id: 3,
        title: t("data.soft-skills.title3"),
        description: t("data.soft-skills.description3"),
        icon: <FaDiagramProject size={36} />,
      },
    ]
  }, [t])

  // -- Render
  return (
    <section id="soft-skills" className="relative z-50 my-12 border-t border-[#25213b] lg:my-24">
      <Image src={SectionImg} alt="Hero" width={1572} height={795} className="absolute top-0 -z-10" />

      <div className="my-5 flex justify-center lg:py-8">
        <div className="flex items-center">
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
          <span className="w-fit rounded-md bg-[#1a1443] p-2 px-5 text-xl text-white uppercase">
            {t("Soft skills")}
          </span>
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex items-center justify-center">
            <AnimationLottie animationPath={experience} />
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {softSkills.map((experience) => (
                <GlowCard key={experience.id} identifier={`soft-skills-${experience.id}`}>
                  <div className="relative p-3">
                    <Image
                      src={BlurImg}
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        {experience.icon}
                      </div>
                      <div>
                        <p className="mb-2 text-base font-medium uppercase sm:text-xl">{experience.title}</p>
                        <p className="text-sm sm:text-base">{experience.description}</p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SoftSkills
