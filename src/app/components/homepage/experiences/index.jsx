"use client"

import { useMemo } from "react"
import { experienceData } from "@/utils/data/projects-data"
import ProjectCard from "./project-card"
import { useTranslations } from "next-intl"

function Experiences() {
  // -- Hooks
  const t = useTranslations()

  // -- State Memo
  const experiences = useMemo(() => {
    return [
      {
        id: 1,
        role: t("data.experience.role1"),
        duration: t("data.experience.duration1"),
        tools: t("data.experience.tools1").split(","),
        company: t("data.experience.company1"),
        description: t("data.experience.description1"),
      },
      {
        id: 2,
        role: t("data.experience.role2"),
        duration: t("data.experience.duration2"),
        tools: t("data.experience.tools2").split(","),
        company: t("data.experience.company2"),
        description: t("data.experience.description2"),
      },
      {
        id: 3,
        role: t("data.experience.role3"),
        duration: t("data.experience.duration3"),
        tools: t("data.experience.tools3").split(","),
        company: t("data.experience.company3"),
        description: t("data.experience.description3"),
      },
    ]
  }, [t])
  const experiencesLeft = useMemo(() => {
    return [experiences[0], experiences[2]]
  }, [experiences])
  const experiencesRight = useMemo(() => {
    return [experiences[1]]
  }, [experiences])

  // -- Render
  return (
    <section id="experience" className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="absolute -top-3 left-0 h-[80px] w-[80px] translate-x-1/2 rounded-full bg-violet-100 opacity-30 blur-3xl filter"></div>
        <div className="relative flex items-center justify-start">
          <span className="absolute left-0 w-fit rounded-md bg-[#1a1443] px-5 py-3 text-xl text-white uppercase">
            {t("Experience")}
          </span>
          <span className="h-[2px] w-full bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            {experiencesLeft.map((exp) => (
              <ProjectCard key={`sticky-card-${exp.id + 1}`} experience={exp} />
            ))}
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            {experiencesRight.map((exp) => (
              <ProjectCard key={`sticky-card-${exp.id + 1}`} experience={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences
