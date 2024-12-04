import React, { useState, useRef } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { Layouts } from "./components/Layouts/Layout";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/Login/ProtectedRoute";
import { HomePage } from "./components/HomePage/HomePage";
import MainUploadPages from "./components/MainUploadPages";
import {
  uploadOnSiteTest,
  uploadPackagingLabeling1,
  uploadPackagingLabeling2,
  uploadProductSpecification,
  uploadWorkmanship1,
  uploadWorkmanship2,
} from "./utils/constant";
import InspectionSummary from "./components/InspectionSummary";
import { Header } from "./components/Header/Header";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {
  const [canvasCaptured, setCanvasCaptured] = useState([false, false]);
  const canvasRefs = useRef([]);

  const captureCanvas = async (route, index) => {
    const pageElement = document.getElementById(route);

    if (!pageElement) {
      console.error(`Element for route ${route} not found!`);
      return;
    }

    try {
      const canvas = await html2canvas(pageElement, { scale: 2 });
      canvasRefs.current[index] = canvas;
      setCanvasCaptured((prevState) => {
        const newCaptured = [...prevState];
        newCaptured[index] = true;
        return newCaptured;
      });
      console.log(`Captured canvas for ${route}`);
    } catch (err) {
      console.error(`Failed to capture canvas for ${route}:`, err);
    }
  };

  const generatePdf = () => {
    if (canvasRefs.current.length === 2) {
      const pdf = new jsPDF("p", "mm", "a4");

      canvasRefs.current.forEach((canvas, index) => {
        const imgData = canvas.toDataURL("image/png");
        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / (canvas.width);

        if (index > 0) {
          pdf.addPage();
        }
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      });

      pdf.save("pages.pdf");
    } else {
      console.log("Canvases are not fully captured yet.", canvasCaptured);
    }
  };

  return (
    <>
      <Router>
      {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage  pageId={"home"} captureCanvas={captureCanvas} />
              </ProtectedRoute>
            }
          />
        <Route
            path={`/product-inspection`}
            element={
              <ProtectedRoute>
                <MainUploadPages
                  pageId={"product-inspection"}
                  generatePdf={generatePdf}
                  captureCanvas={captureCanvas}
                  uploadData={uploadProductSpecification}
                  heading={"PRODUCT SPECIFICATION"}
                  back={0}
                  next={2}
                />
              </ProtectedRoute>
            }
          />
          {/* <Route
            path={`/product-inspection`}
            element={
              <ProtectedRoute>
                <MainUploadPages
                 pageId={"packaging-labelling-1"}
                  generatePdf={generatePdf}
                  captureCanvas={captureCanvas}
                  uploadData={uploadProductSpecification}
                  heading={"PRODUCT SPECIFICATION"}
                  back={0}
                  next={2}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path={`/inspection-summary`}
            element={
              <ProtectedRoute>
                <InspectionSummary
                  captureCanvas={captureCanvas}
                  heading={"II. INSPECTION SUMMARY"}
                  back={1}
                  next={3}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path={`/product-specification`}
            element={
              <ProtectedRoute>
                <MainUploadPages
                  captureCanvas={captureCanvas}
                  uploadData={uploadProductSpecification}
                  heading={"A. PRODUCT SPECIFICATION"}
                  back={2}
                  next={4}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path={`/workmanship-defects-1`}
            element={
              <ProtectedRoute>
                <MainUploadPages
                  captureCanvas={captureCanvas}
                  uploadData={uploadWorkmanship1}
                  heading={"B. WORKMANSHIP / DEFECTS"}
                  back={3}
                  next={5}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path={`/workmanship-defects-2`}
            element={
              <ProtectedRoute>
                <MainUploadPages
                  captureCanvas={captureCanvas}
                  uploadData={uploadWorkmanship2}
                  heading={"B. WORKMANSHIP / DEFECTS"}
                  back={4}
                  next={6}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path={`/on-site-test`}
            element={
              <ProtectedRoute>
                <MainUploadPages
                  captureCanvas={captureCanvas}
                  uploadData={uploadOnSiteTest}
                  heading={"C. ON SITE TEST"}
                  back={5}
                  next={7}
                />
              </ProtectedRoute>
            }
          /> */}
          {/* <Route
            path={`/packaging-labelling-1`}
            element={
              <ProtectedRoute>
                <MainUploadPages
                  pageId={"packaging-labelling-1"}
                  generatePdf={generatePdf}
                  captureCanvas={captureCanvas}
                  uploadData={uploadPackagingLabeling2}
                  heading={"D. PACKAGING & LABELLING"}
                  back={8}
                  next={9}
                />
              </ProtectedRoute>
            }
          /> */}
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
