import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Adityaresume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = width > 786 ? 1.2 : 0.5; // Adjust the scale factor as needed

  return (
    <div style={{ position: "relative" }}>
      <Particle />
      <Container
        fluid
        className="resume-section"
        style={{ position: "relative" }}
      >
        <div
          style={{
            maxWidth: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Document file={pdf}>
            <Page
              pageNumber={1}
              scale={scale}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                margin: "auto",
              }}
            />
          </Document>
        </div>
        <div>
          <div>
            <Container fluid className="resume-section">
              <Particle />
              <div style={{ justifyContent: "center", position: "relative" }}>
                <Button
                  variant="primary"
                  href={pdf}
                  target="_blank"
                  style={{ maxWidth: "250px" }}
                >
                  <AiOutlineDownload />
                  &nbsp;Download CV
                </Button>
              </div>
            </Container>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ResumeNew;
