// src/components/PdfViewer.jsx
import React from 'react'

export default function PdfViewer({ title, pdfUrl }) {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-semibold mb-1">{title}</h3>
      <div className="border rounded-lg overflow-hidden">
        <iframe
          src={pdfUrl}
          title={title}
          className="w-full h-96"
        />
      </div>
      <a
        href={pdfUrl}
        download
        className="mt-2 inline-block px-4 py-2 bg-primary dark:bg-gray-500 text-white rounded hover:bg-primary/90 transition"
      >
        Download PDF
      </a>
    </div>
  )
}
