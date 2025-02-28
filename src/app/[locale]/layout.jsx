import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Footer from "../components/footer"
import "../css/card.css"
import "../css/globals.css"
import ReactQueryProvider from "@/components/providers/ReactQueryProvider"
import GoogleAnalytics from "../GoogleAnalytics"
import { NextIntlClientProvider } from "next-intl"
import { routing } from "@/i18n/routing"
import { getMessages } from "next-intl/server"
import Navbar from "../components/navbar"
import clsx from "clsx"
import { notFound } from "next/navigation"
import { getTranslations } from 'next-intl/server';
import { Inter } from 'next/font/google'

// Generates all the possible static paths
export async function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale: locale,
  }))
}

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata({params}) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'metadata'});
  const siteUrl = (process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000');

  return {
    // metadataBase: new URL(siteUrl),
    title: {
      default: t('title'),
      template: `%s - ${t('title')}`,
    },
    description: t('description'),
    twitter: {
      card: "summary_large_image",
      site: "@stiven96",
      creator: '@stiven96',
      image: [
        {
          url: `/og-${locale}.jpg`,
          with: 1200,
          height: 630
        }
      ]
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      siteName: t('title'),
      images: [
        {
          url: `/og-${locale}.jpg`,
          with: 1200,
          height: 630
        }
      ],
      locale: locale,
      type: 'website',
    },
    alternates: {
      canonical: "/",
      languages: Object.fromEntries(routing.locales.map((locale) => [locale, `/${locale}`])),
    },

    // Basic fields
    applicationName: t('title'),
  };
}

export const viewport = {
  maximumScale: 1,
};

const staticHeader = "relative mx-auto text-white sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]"


export default async function RootLayout({ params, children }) {
  const { locale } = await params

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
