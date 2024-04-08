import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio de Anderson Barbosa",
  description:
    "Fullstack developer con más de 7 años de experiencia en la creación de aplicaciones moviles y web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <ToastContainer />
          <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
            <Navbar />
            {children}
          </main>
          <Footer />
        </ReactQueryProvider>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
