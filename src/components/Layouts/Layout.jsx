import { Header } from "../Header/Header"
import { HomePage } from "../HomePage/HomePage"
import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const Layouts = () =>  {
  
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
    captureCanvas('home', 0)
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
 
    return <>
    <div id="home">
    <Header />
    <HomePage/>
    <button onClick={generatePdf}>Generate PDF</button>
    </div>
    </>
  }