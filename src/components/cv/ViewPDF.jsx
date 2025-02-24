"use client"

import { usePDFSlick } from "@pdfslick/react"
import "@pdfslick/react/dist/pdf_viewer.css"
import PDFNavigation from "./PDFNavigation";
import { useLocale } from 'next-intl';
import { useMemo } from "react";

export default function ViewPDF() {
  // -- Hooks
  const locale = useLocale();

  // -- State Memo
  const pdfPath = useMemo(() => {
    return `/pdfs/cv_anderson_${locale}.pdf`;
  }, [locale]);

  // -- PDF
  const { viewerRef, usePDFSlickStore, PDFSlickViewer } = usePDFSlick(pdfPath, {
    singlePageViewer: true,
    scaleValue: "page-fit",
  })

  // -- Render
  return (
    <div className="absolute inset-0  pdfSlick">
      <div className="relative h-full flex-1">
        <PDFSlickViewer {...{ viewerRef, usePDFSlickStore }} />
        <PDFNavigation {...{ usePDFSlickStore }} />
      </div>
    </div>
  )
}
