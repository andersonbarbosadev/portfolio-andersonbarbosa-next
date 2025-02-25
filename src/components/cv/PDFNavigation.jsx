import clsx from "clsx"
import { VscChevronRight, VscChevronLeft, VscZoomIn, VscZoomOut } from "react-icons/vsc"

export default function PDFNavigation({ usePDFSlickStore }) {
  const pageNumber = usePDFSlickStore((s) => s.pageNumber)
  const numPages = usePDFSlickStore((s) => s.numPages)
  const pdfSlick = usePDFSlickStore((s) => s.pdfSlick)
  const scale = usePDFSlickStore((s) => s.scale)
  return (
    <div className="pointer-events-none fixed right-0 bottom-0 z-50 h-12 w-full">
      <div className="flex justify-center">
        <div
          className={clsx(
            "inline-flex justify-center rounded border border-slate-300 shadow",
            "bg-white",
            "divide-x-slate-100 divide-x"
          )}
        >
          <button
            disabled={pageNumber === 1}
            onClick={() => pdfSlick?.gotoPage(pageNumber - 1)}
            type="button"
            className="pointer-events-auto relative inline-flex items-center rounded-l px-2 py-2 text-slate-500 ring-0 ring-slate-700 transition-all ring-inset hover:bg-slate-50 focus:z-10 enabled:hover:text-slate-900 disabled:opacity-70"
          >
            <span className="sr-only">Previous</span>
            <VscChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            disabled={!pdfSlick || scale <= 0.25}
            onClick={() => pdfSlick?.viewer?.decreaseScale()}
            type="button"
            className="pointer-events-auto relative inline-flex items-center px-2 py-2 text-slate-500 ring-0 ring-slate-700 transition-all ring-inset hover:bg-slate-50 focus:z-10 enabled:hover:text-slate-900 disabled:opacity-70"
          >
            <span className="sr-only">Zoom Out</span>
            <VscZoomOut className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            disabled={!pdfSlick || scale >= 5}
            onClick={() => pdfSlick?.viewer?.increaseScale()}
            type="button"
            className="pointer-events-auto relative inline-flex items-center px-2 py-2 text-slate-500 ring-0 ring-slate-700 transition-all ring-inset hover:bg-slate-50 focus:z-10 enabled:hover:text-slate-900 disabled:opacity-70"
          >
            <span className="sr-only">Zoom In</span>
            <VscZoomIn className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            disabled={numPages <= pageNumber}
            onClick={() => pdfSlick?.gotoPage(pageNumber + 1)}
            type="button"
            className="pointer-events-auto relative inline-flex items-center rounded-r px-2 py-2 text-slate-500 ring-0 ring-slate-700 transition-all ring-inset hover:bg-slate-50 focus:z-10 enabled:hover:text-slate-900 disabled:opacity-70"
          >
            <span className="sr-only">Next</span>
            <VscChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
