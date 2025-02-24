import Image from "next/image";
import ProfileImg from "Public/image/img-profile.jpg";
import { useTranslations } from 'next-intl';

function AboutSection() {
  // -- Hooks
  const t = useTranslations();

  // -- Render
  return (
    <section id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          {t("About me")}
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-2 ">
        <div className="order-2 lg:order-2">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase text-center lg:text-start">
            {t("Profile")}
          </p>
          <p className="text-gray-200 text-md lg:text-lg  text-justify lg:w-3/4 ">
            {t("data.about.description")}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-1 ">
          <Image
            src={ProfileImg}
            width={280}
            height={280}
            alt="profile"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
