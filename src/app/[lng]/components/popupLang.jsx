"use client";

import { useEffect, useState, useTransition } from "react";
// @flow strict
import Image from "next/image";
import FlagEn from "/public/image/FlagEn.svg";
import FlagEs from "/public/image/FlagEs.svg";
import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "../../i18n/client";

function PopupLang({ lng }) {
  // const { t } = useTranslation(lng, "traslation");

  const langs = [
    {
      label: "Ingles",
      value: "en",
      icon: FlagEn,
    },
    {
      label: "Español",
      value: "es",
      icon: FlagEs,
    },
  ];

  const [open, setOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handlePopup = () => {
    setOpen(!open);
  };

  const changeLang = (lang) => {
    router.push(`/${lang}`);
  };

  return (
    <li>
      <div
        className="block px-4 py-2 no-underline outline-none hover:no-underline popup hover:text-pink-600"
        onClick={handlePopup}
      >
        {pathname === "/en" ? (
          <Image src={FlagEn} alt="english" width={20} height={20} />
        ) : (
          <Image src={FlagEs} alt="español" width={20} height={20} />
        )}
        <span
          className={`text-sm text-white transition-colors duration-300 popuptext ${
            open ? "show" : ""
          }`}
        >
          {langs.map((lang) => (
            <div key={lang.value}>
              <span
                className="text-sm text-white transition-colors duration-300 hover:text-pink-600 inline-flex items-center gap-1 "
                onClick={() => changeLang(lang.value)}
              >
                <Image
                  src={lang.icon}
                  alt={lang.label}
                  width={20}
                  height={20}
                />
                {lang.label}
              </span>
            </div>
          ))}
        </span>
      </div>
    </li>
  );
}

export default PopupLang;
