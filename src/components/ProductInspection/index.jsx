import React from "react";

import "../ProductInspection/index.css";
import { uploadProductInspection } from "../../utils/constant";
import UploadPhoto from "../UploadPhoto";

const ProductInspection = () => {
  return (
    <>
      <div className="container">
        <div className="cust-header">
          <h3>PRODUCT OFFERED FOR INSPECTION</h3>
        </div>
        <div className="grid">
          {uploadProductInspection?.map((imageData, index) => (
            <React.Fragment key={index}>
              <UploadPhoto imageData={imageData} index={index} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductInspection;
