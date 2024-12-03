import { Header } from "../Header/Header";
import { HomePage } from "../HomePage/HomePage";

import React, { useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import ProductInspection from "../ProductInspection";
import MainUploadPages from "../MainUploadPages";
import { uploadOnSiteTest, uploadPackagingLabeling1, uploadPackagingLabeling2, uploadProductSpecification, uploadWorkmanship1, uploadWorkmanship2 } from "../../utils/constant";
import InspectionSummary from "../InspectionSummary";

export const Layouts = () => {
  // const [canvasCaptured, setCanvasCaptured] = useState();
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
      // setCanvasCaptured((prevState) => {
      //   const newCaptured = [...prevState];
      //   newCaptured[index] = true;
      //   return newCaptured;
      // });
      console.log(`Captured canvas for ${route}`);
    } catch (err) {
      console.error(`Failed to capture canvas for ${route}:`, err);
    }
  };

  const generatePdf = () => {
    captureCanvas("home", 0);
    if (canvasRefs.current.length > 0) {
      const pdf = new jsPDF("p", "mm", "a4");

      canvasRefs.current.forEach((canvas, index) => {
        const imgData = canvas.toDataURL("image/png");
        const imgWidth = 200; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        if (index > 0) {
          pdf.addPage();
        }
        pdf.addImage(imgData, "PNG", 5, 0, imgWidth, imgHeight);
      });

      pdf.save("pages.pdf");
    } else {
      console.log("Canvases are not fully captured yet.");
    }
  };

  return (
    <>
      <div id="home">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path={`/product-inspection`}
            element={
              <MainUploadPages
                uploadData={uploadProductSpecification}
                heading={"PRODUCT SPECIFICATION"}
                back={0}
                next={2}
              />
            }
          />
          <Route
            path={`/inspection-summary`}
            element={
              <InspectionSummary
                heading={"II. INSPECTION SUMMARY"}
                back={1}
                next={3}
              />
            }
          />
          <Route
            path={`/product-specification`}
            element={
              <MainUploadPages
                uploadData={uploadProductSpecification}
                heading={"A. PRODUCT SPECIFICATION"}
                back={2}
                next={4}
              />
            }
          />
          <Route
            path={`/workmanship-defects-1`}
            element={
              <MainUploadPages
                uploadData={uploadWorkmanship1}
                heading={"B. WORKMANSHIP / DEFECTS"}
                back={3}
                next={5}
              />
            }
          />
          <Route
            path={`/workmanship-defects-2`}
            element={
              <MainUploadPages
                uploadData={uploadWorkmanship2}
                heading={"B. WORKMANSHIP / DEFECTS"}
                back={4}
                next={6}
              />
            }
          />
          <Route
            path={`/on-site-test`}
            element={
              <MainUploadPages
                uploadData={uploadOnSiteTest}
                heading={"C. ON SITE TEST"}
                back={5}
                next={7}
              />
            }
          />
          <Route
            path={`/packaging-labelling-1`}
            element={
              <MainUploadPages
                uploadData={uploadPackagingLabeling1}
                heading={"D. PACKAGING & LABELLING"}
                back={6}
                next={8}
              />
            }
          />
          <Route
            path={`/packaging-labelling-1`}
            element={
              <MainUploadPages
                uploadData={uploadPackagingLabeling2}
                heading={"D. PACKAGING & LABELLING"}
                back={7}
                next={9}
              />
            }
          />
        </Routes>
        <button onClick={generatePdf}>Generate PDF</button>
      </div>
    </>
  );
};
