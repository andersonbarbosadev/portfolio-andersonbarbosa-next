"use client";

import { useState } from "react";
// @flow strict
import Link from "next/link";
import Image from "next/image";
import FlagEn from "../../public/image/FlagEn.svg";
import FlagEs from "../../public/image/FlagEs.svg";
import { useTranslation } from "react-i18next";

function Navbar() {
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

  const [t, i18next] = useTranslation("global");

  const handlePopup = () => {
    setOpen(!open);
    const popup = document.getElementById("popup");
    popup.classList.toggle("show");
  };

  const changeLang = (lang) => {
    i18next.changeLanguage(lang);
  };

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" bg-gradient-to-r from-yellow-200 via-red-400 to-indigo-400 font-semibold text-transparent bg-clip-text"
          >
            Anderson Barbosa
          </Link>
        </div>

        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#about"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                Acerca de mi
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#experience"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                Soft Skills
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#skills"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                Skills
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#education"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                Educación
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#certificate"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                Certificados
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#blogs"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                Blogs
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#projects"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                Experiencia
              </div>
            </a>
          </li>
          <li>
            <div
              className="block px-4 py-2 no-underline outline-none hover:no-underline popup hover:text-pink-600"
              onClick={handlePopup}
            >
              <Image src={FlagEs} alt="language" width={20} height={20} />
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
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
