import React, { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf"; // Use react-pdf for easier rendering
import "pdfjs-dist/web/pdf_viewer.css"; // Import the PDF viewer styles

// Set the worker path to the pdf.worker.js file
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewer = ({ pdfUrl }) => {
  const containerRef = useRef(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    setError(null);
  }, [pdfUrl]);

  return (
    <div ref={containerRef} style={{ overflow: "auto", maxHeight: "80vh" }}>
      {loading && <div>Loading PDF...</div>}
      {error && <div>{error}</div>}
      {!loading && !error && (
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(err) => {
            console.error("Error loading PDF: ", err);
            setError("Failed to load PDF.");
          }}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      )}
      {/* Optional: Add pagination controls */}
      {numPages && (
        <div>
          <button
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber(pageNumber - 1)}
          >
            Previous
          </button>
          <span>{` Page ${pageNumber} of ${numPages} `}</span>
          <button
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber(pageNumber + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
