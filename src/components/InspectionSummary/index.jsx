import React from "react";

import "../InspectionSummary/index.css";
import NextButton from "../NextButton";
import BackButton from "../BackButton";

const InspectionSummary = ({ heading, back, next }) => {
  return (
    <>
      <div className="container">
        <div className="cust-header">
          <h3>{heading}</h3>
        </div>
        <div className="d-flex">
          <BackButton page={back} />
          <NextButton page={next} />
        </div>
      </div>
    </>
  );
};

export default InspectionSummary;
