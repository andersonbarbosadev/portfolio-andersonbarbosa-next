import { useLocale } from "next-intl"
import { useMemo } from "react"
import { curriculumData } from "@/utils/data/curriculum"

export const useCurriculum = () => {
  // -- Hooks
  const locale = useLocale()

  // -- States
  const curriculumURL = useMemo(
    () => (locale in curriculumData ? curriculumData[locale] : curriculumData[routing.defaultLocale]),
    [locale]
  )

  return {
    curriculumURL,
  }
}
