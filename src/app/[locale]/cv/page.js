'use client'

import dynamic from 'next/dynamic';
const ViewPDF = dynamic(() => import("@/components/cv/ViewPDF"), { ssr: false });


export default function CV() {
  return (
    <>
      <ViewPDF />
    </>
  );
}
