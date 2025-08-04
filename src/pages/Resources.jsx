// src/pages/Resources.jsx
import PdfViewer from '../components/PdfViewer'
import GoalWorksheet from '../components/GoalWorksheet'

export default function Resources() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-primary text-center mb-12">
        Resources & Tools
      </h1>

      {/* PDF Guides */}
      <PdfViewer
        title="Posture & Ergonomics Guide"
        pdfUrl="/docs/Stanford-University-Ergonomic-Posture-iPDF.pdf"
      />
      <PdfViewer
        title="4-Day Reflective Practices Diary"
        pdfUrl="/docs/TAB-3-Reflective-Practices.pdf"
      />
      <PdfViewer
        title="Daily Pain Diary (NHS Fife)"
        pdfUrl="/docs/pain-diary.pdf"
      />
      <PdfViewer
        title="Pain Diary for Interventional Procedures"
        pdfUrl="/docs/Pain-Diary-for-Interventional-Pain-Procedures.pdf"
      />
      <PdfViewer
        title="Clinicians Pain Diary (2023)"
        pdfUrl="/docs/Clinicians_Pain_Diary_2023.pdf"
      />

      {/* Goal-Setting Worksheet */}
      {/* <GoalWorksheet /> */}
    </section>
  )
}
