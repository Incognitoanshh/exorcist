import React from "react";

const PdfViewer = () => {
  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <a
        href="/amritanshu.pdf"
        download
        style={{
          marginBottom: "1rem",
          padding: "10px 20px",
          backgroundColor: "#7c3aed",
          color: "white",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
        ⬇️ Download CV
      </a>

      <iframe
        src="/amritanshu.pdf"
        width="100%"
        height="800px"
        style={{
          border: "none",
          boxShadow: "0 0 20px rgba(0,0,0,0.2)",
          borderRadius: "8px",
        }}
        title="Resume PDF"
      />
    </div>
  );
};

export default PdfViewer;
