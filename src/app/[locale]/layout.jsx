import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Footer from "../components/footer"
import "../css/card.css"
import "../css/globals.css"
import ReactQueryProvider from "@/components/providers/ReactQueryProvider"
import GoogleAnalytics from "../GoogleAnalytics"
import { NextIntlClientProvider } from "next-intl"
import { routing, redirect } from "@/i18n/routing"
import { getMessages } from "next-intl/server"
import Navbar from "../components/navbar"
import clsx from "clsx"
import { notFound } from "next/navigation"

export const runtime = "nodejs"

export const metadata = {
  title: "Portafolio de Anderson Barbosa",
  description: "Fullstack developer con más de 7 años de experiencia en la creación de aplicaciones moviles y web.",
}

const staticHeader = "relative mx-auto text-white sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]"

export default async function RootLayout(props) {
  const params = await props.params

  const { locale } = params

  const { children } = props

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ReactQueryProvider>
            <ToastContainer />
            <GoogleAnalytics />

            <div className={clsx(staticHeader)}>
              <Navbar />
            </div>

            <main className={clsx(staticHeader, "min-h-screen px-6")}>{children}</main>
            <Footer />
          </ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
