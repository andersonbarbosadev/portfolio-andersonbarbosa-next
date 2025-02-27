import { routing } from "@/i18n/routing"
import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
// import { getTranslations } from 'next-intl/server';

export const alt = 'Open Graph Image'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/jpeg'

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale: locale,
  }))
}

export default async function Image({ params }) {
  const { locale } = params
  // const t = await getTranslations({locale, namespace: 'OpenGraphImage'});

  try {
    const imageBuffer = await readFile(
      join(process.cwd(), 'assets', 'images', `og-${locale}.jpg`)
    )
    const imageBase64 = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={imageBase64}
            alt={alt}
            width={size.width}
            height={size.height}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      ),
      {
        ...size,
      }
    )
  } catch (error) {
    console.error('Error generating OpenGraph image:', error)
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            color: '#000',
          }}
        >
          <h1>Fallback OpenGraph Image</h1>
        </div>
      ),
      {
        ...size,
      }
    )
  }
}
