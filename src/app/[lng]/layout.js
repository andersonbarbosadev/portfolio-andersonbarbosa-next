import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../css/card.scss";
import "../css/globals.scss";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import GoogleAnalytics from "../GoogleAnalytics";
import { dir } from "i18next";
import { languages } from "../i18n/settings";

export const metadata = {
  title: "Portafolio de Anderson Barbosa",
  description:
    "Fullstack developer con más de 7 años de experiencia en la creación de aplicaciones moviles y web.",
};

export default async function RootLayout({ children, params: { lng } }) {
  console.log(lng);

  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <ReactQueryProvider>
          <ToastContainer />
          <GoogleAnalytics />
          <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
            {children}
          </main>
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
