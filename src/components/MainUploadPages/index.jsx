import React, { useEffect, useState } from "react";

import "../MainUploadPages/index.css";
import UploadPhoto from "../UploadPhoto";
import NextButton from "../NextButton";
import BackButton from "../BackButton";
import { useNavigate } from "react-router-dom";
import { Header } from "../Header/Header";

const MainUploadPages = ({pageId, generatePdf, captureCanvas ,uploadData, heading, back, next}) => {
  const [hasCaptured, setHasCaptured] = useState(false); // State to track if capture has occurred
  const navigate = useNavigate();

    const captureAndGeneratePdf = async () => {
      console.log('capCansva', pageId)
      // if (!hasCaptured) { // Check if we have already captured
        await captureCanvas(pageId, 1); // Capture canvas for contact page
        // setHasCaptured(true); // Set the flag to true after capturing
      // }
      generatePdf()
  
    }

  

  return (
    <>
      <div className="container" id={pageId}>
        <Header></Header>
        <div className="cust-header">
          <h3>{heading}</h3>
        </div>
        <div className="grid">
          {uploadData?.map((imageData, index) => (
            <React.Fragment key={index}>
              <UploadPhoto imageData={imageData} index={index} />
            </React.Fragment>
          ))}
        </div>
        <div className="d-flex">
          <BackButton page={back} />
          <NextButton page={next} />
        </div>
        <button onClick={captureAndGeneratePdf}>Download PDF</button>
        </div>
    </>
  );
};

export default MainUploadPages;
