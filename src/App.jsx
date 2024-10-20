import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Keep this line
import Preloader from "./components/Pre"; // Adjust this path if needed
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import PdfViewer from "./components/PdfViewer"; // Import the PdfViewer component
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";

// Import your PDF file here
import pdfFile from "./assets/finalresume (2).pdf"; // Update the path to your PDF file

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1200); // Loading time can be adjusted as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className={`App ${load ? "no-scroll" : "scroll"}`}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/pdf" element={<PdfViewer pdfUrl={pdfFile} />} />{" "}
          {/* New route for PDF Viewer */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
