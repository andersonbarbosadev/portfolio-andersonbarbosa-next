import { useLocale } from 'next-intl'
import { useMemo } from 'react'
import { routing } from "@/i18n/routing"

import { curriculumData } from 'App/utils/data/curriculum'

export const useCurriculum = () => {
  // -- Hooks
  const locale = useLocale()

  // -- States
  const curriculumURL = useMemo(
    () => (locale in curriculumData ? curriculumData[locale] : curriculumData[routing.defaultLocale]),
    [locale],
  )

  return {
    curriculumURL,
  }
}
