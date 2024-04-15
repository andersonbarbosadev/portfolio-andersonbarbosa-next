"use client";

import { useState, useTransition } from "react";
// @flow strict
import Image from "next/image";
import FlagEn from "/public/image/FlagEn.svg";
import FlagEs from "/public/image/FlagEs.svg";
import { useRouter } from "next/navigation";

function PopupLang() {
  const langs = [
    {
      label: "English",
      value: "en",
      icon: FlagEn,
    },
    {
      label: "Spanish",
      value: "es",
      icon: FlagEs,
    },
  ];

  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handlePopup = () => {
    setOpen(!open);
    const popup = document.getElementById("popup");
    popup.classList.toggle("show");
  };

  const changeLang = (lang) => {
    console.log(lang);
    // router.replace(`/${lang}`);
  };

  return (
    <li>
      <div
        className="block px-4 py-2 no-underline outline-none hover:no-underline popup hover:text-pink-600"
        onClick={handlePopup}
      >
        Idioma
        <span
          className="text-sm text-white transition-colors duration-300 popuptext"
          id="popup"
        >
          {langs.map((lang) => (
            <div key={lang.value}>
              <span
                className="text-sm text-white transition-colors duration-300 hover:text-pink-600 inline-flex items-center gap-1 text-start"
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
