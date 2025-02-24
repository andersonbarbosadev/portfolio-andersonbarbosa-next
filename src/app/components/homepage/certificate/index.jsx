"use client";

import Image from "next/image";

import { BsPersonWorkspace } from "react-icons/bs";

import {useMemo} from "react";
import GlowCard from "../../helper/glow-card";
import lottieFile from "Public/lottie/education.json";
import { certificates } from "@/utils/data/certificates";
import SectionImg from "Public/section.svg";
import BlurImg from "Public/blur-23.svg";
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';


const AnimationLottie = dynamic(() => import('App/app/components/helper/animation-lottie.jsx'), {
  ssr: false,
})

function Certificates() {
  // -- Hooks
  const t = useTranslations();

  // -- State Memo
  const certificates = useMemo(() => {
    return [
      {
        id: 1,
        career: t("data.certificates.career1"),
        institution: t("data.certificates.institution1"),
        location: t("data.certificates.location1"),
        endDate: t("data.certificates.endDate1"),
      },
      {
        id: 2,
        career: t("data.certificates.career2"),
        institution: t("data.certificates.institution2"),
        location: t("data.certificates.location2"),
        endDate: t("data.certificates.endDate2"),
      },
    ]
  }, [t]);

  // -- Render
  return (
    <section
      id="certificates"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src={SectionImg}
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md uppercase">
            {t("Certificates")}
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="flex flex-col justify-center gap-6">
              {certificates.map((certificate) => (
                <GlowCard
                  key={`certificates-${certificate.id}`}
                  identifier={`certificates-${certificate.id}`}
                >
                  <div className="p-3 relative text-white">
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {certificate.career}
                        </p>
                        <p className="text-sm sm:text-base">
                          {certificate.institution},&nbsp;
                          <span className="text-amber-300">
                            {certificate.location},&nbsp;
                          </span>
                          <span className="text-[#16f2b3]">
                            {certificate.endDate}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
          </div>

          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
