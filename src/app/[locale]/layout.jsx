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
import { getTranslations } from 'next-intl/server';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata(props) {
  const params = await props.params;
  const { locale } = params
  const t = await getTranslations({locale, namespace: 'metadata'});

  return {
    title: {
      default: t('title'),
      template: `%s - ${t('title')}`,
    },
    description: t('description'),
    twitter: {
      card: "summary_large_image",
      site: "@stiven96",
      creator: '@stiven96',
      image: `${siteUrl}/opengraph-image.jpg`,
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${siteUrl}/`,
      siteName: t('title'),
      images: [
        {
          url: `${siteUrl}/opengraph-image.jpg`,
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
    }
  };
}

export const viewport = {
  maximumScale: 1,
};

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
      <body className={inter.className}>
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
