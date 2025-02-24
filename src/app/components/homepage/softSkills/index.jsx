"use client";

import { useMemo } from "react";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaDiagramProject, FaChess } from "react-icons/fa6";


import GlowCard from "../../helper/glow-card";
import experience from "Public/lottie/code.json";
import SectionImg from "Public/section.svg";
import BlurImg from "Public/blur-23.svg";
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

const AnimationLottie = dynamic(() => import('App/app/components/helper/animation-lottie.jsx'), {
  ssr: false,
})

function SoftSkills() {
  // -- Hooks
  const t = useTranslations();

  // -- State Memo
  const softSkills = useMemo(() => {
    return [
      {id: 1, title: t("data.soft-skills.title1"), description: t("data.soft-skills.description1"), icon: <BsPersonWorkspace size={36} />},
      {id: 2, title: t("data.soft-skills.title2"), description: t("data.soft-skills.description2"), icon: <FaChess size={36} />},
      {id: 3, title: t("data.soft-skills.title3"), description: t("data.soft-skills.description3"), icon: <FaDiagramProject size={36} />},
    ]
  }, [t]);

  // -- Render
  return (
    <section
      id="soft-skills"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src={SectionImg}
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md uppercase">
            {t("Soft skills")}
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-center">
              <AnimationLottie animationPath={experience} />
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {softSkills.map((experience) => (
                <GlowCard
                  key={experience.id}
                  identifier={`soft-skills-${experience.id}`}
                >
                  <div className="p-3 relative">
                    <Image
                      src={BlurImg}
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                        {experience.icon}
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {experience.title}
                        </p>
                        <p className="text-sm sm:text-base">
                          {experience.description}
                        </p>
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
  );
}

export default SoftSkills;
