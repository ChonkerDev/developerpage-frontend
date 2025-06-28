import { Document, Page, pdfjs } from 'react-pdf';
import React, { useEffect, useState } from 'react';
import certpdf from '/Unity Programmer certificate Official.pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
// CDN version:
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs'; /*{copied from node_modules to public due to worker mismatch version from default website}*/


export default function Home() {
  return <div>
    <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
        Home
      </h1>
      <h1 style={{ fontSize: '2rem'}}>Unity Programmer</h1>
      <p >
        I'm Tim Harrell, a Unity Programmer working under the alias ChonkerDev. With a combined 7 years of programming experience in web and Unity development.



      </p>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Document file={certpdf}>
          <Page
            pageNumber={1}
            width={800} // Adjust width to fit your layout
            renderTextLayer={true}
            renderAnnotationLayer={true}
          />
        </Document>
      </div>
    </div>


  </div>;
}