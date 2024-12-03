import React from "react";

import "../MainUploadPages/index.css";
import UploadPhoto from "../UploadPhoto";
import NextButton from "../NextButton";
import BackButton from "../BackButton";

const MainUploadPages = ({uploadData, heading, back, next}) => {
  return (
    <>
      <div className="container">
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
      </div>
    </>
  );
};

export default MainUploadPages;
