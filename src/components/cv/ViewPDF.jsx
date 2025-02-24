"use client"

import { usePDFSlick } from "@pdfslick/react"
import "@pdfslick/react/dist/pdf_viewer.css"
import PDFNavigation from "./PDFNavigation";

export default function ViewPDF() {
  const { viewerRef, usePDFSlickStore, PDFSlickViewer } = usePDFSlick("/pdfs/anderson_barbosa_cv.pdf", {
    singlePageViewer: true,
    scaleValue: "page-fit",
  })

  return (
    <div className="absolute inset-0  pdfSlick">
      <div className="relative h-full flex-1">
        <PDFSlickViewer {...{ viewerRef, usePDFSlickStore }} />
        <PDFNavigation {...{ usePDFSlickStore }} />
      </div>
    </div>
  )
}
