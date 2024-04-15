// @flow strict

import { useTranslation } from "@/app/i18n";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import HeroImages from "/public/image/img-hero.webp";
import HeroImg from "/public/hero.svg";

async function HeroSection({ lng }) {
  const { t } = await useTranslation(lng, "traslation");

  return (
    <section className="relative flex flex-col items-center py-4 lg:py-12">
      <Image
        src={HeroImg}
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10 justify-center p-2"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8 gap-x-4">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            {t("title hero")} <br />
            {t("im")}
            <span className=" text-red-400">{personalData.name}</span>
            , <br />
            <span className=" bg-gradient-to-r from-yellow-200 via-red-400 to-indigo-400 font-semibold text-transparent bg-clip-text">
              {personalData.designation}
            </span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.facebook}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              href={personalData.twitter}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaTwitterSquare size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>{t("contact me")}</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              target="_blank"
              href={personalData.resume}
            >
              <span>{t("cv")}</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        <div
          className="order-1 lg:order-2 relative lg:w-96"
          style={{ height: "28rem" }}
        >
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
  );
}

export default HeroSection;
