import React, { useState, useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf"; // ✅ Don't re-import pdfjs
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@2.10.313/build/pdf.worker.min.js`;

function ResumeNew() {
  const pdf = "/amritanshu.pdf"; // ✅ correct public path

  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const onLoadSuccess = ({ numPages }) => {
    console.log("PDF loaded successfully. Total pages:", numPages);
    setNumPages(numPages);
    setLoading(false);
  };

  const onLoadError = (error) => {
    console.error("Error loading PDF:", error);
    setLoading(false);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginBottom: "20px",
          }}
        >
          <Button
            variant="primary"
            href={pdf}
            download
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row
          className="resume"
          style={{ justifyContent: "center", textAlign: "center" }}
        >
          {loading && <Spinner animation="border" style={{ margin: "auto" }} />}
          <Document
            file={pdf}
            onLoadSuccess={onLoadSuccess}
            onLoadError={onLoadError}
            className="d-flex justify-content-center"
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={width > 786 ? 1.7 : 0.6}
              />
            ))}
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
