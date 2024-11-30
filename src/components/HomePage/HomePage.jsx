/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import "../HomePage/HomePage.css";

export const HomePage = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [file, setFile] = useState(null);

  // Function to handle image selection and preview
  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      // Generate preview URL
      const previewUrl = URL.createObjectURL(selectedFile);
      setImagePreview(previewUrl);
      setFile(selectedFile);
    }
  };
  return (
    <>
      <table className="home-page-table">
        <tr>
          <th colspan="3" className="table-header">
            &#8544;. GENERAL INFORMATION
          </th>
        </tr>
        <tr>
          <td style={{ width: "20%" }} className="input-labels">
            Client:
          </td>
          <td style={{ width: "40%" }}>
            <input
              type="text"
              id="lname"
              name="lname"
              className="inpput-filed"
              placeholder="Please enter the details."
            />
          </td>
          <td rowspan="12" className="image-column">
            {/* <div className="image-container"> */}
            <p className="image-heading">APPROVED PRODUCT IMAGE</p>
            {/* Display image preview if available */}
            <div className="image-preview">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Image Preview"
                  style={{
                    width: "300px",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
              ) : (
                "No image selected"
              )}
            </div>
            <div class="upload-btn-wrapper">
              <button class="btn">Choose an image</button>
              <input type="file" name="myfile" onChange={handleImageChange} />
            </div>
          </td>
        </tr>
        <tr>
          <td style={{ width: "20%" }} className="input-labels">
            Supplier:
          </td>
          <td style={{ width: "40%" }}>
            <input
              type="text"
              id="lname"
              name="lname"
              className="inpput-filed"
              placeholder="Please enter the details."
            />
          </td>
        </tr>
        <tr>
          <td style={{ width: "20%" }} className="input-labels">
            Factory:
          </td>
          <td style={{ width: "40%" }}>
            <input
              type="text"
              id="lname"
              name="lname"
              className="inpput-filed"
              placeholder="Please enter the details."
            />
          </td>
        </tr>
        <tr>
          <td style={{ width: "20%" }} className="input-labels">
            Factory Address:
          </td>
          <td style={{ width: "40%" }}>
            <input
              type="text"
              id="lname"
              name="lname"
              className="inpput-filed"
              placeholder="Please enter the details."
            />
          </td>
        </tr>
        <tr>
          <td style={{ width: "20%" }} className="input-labels">
            Product Description:
          </td>
          <td style={{ width: "40%" }}>
            <input
              type="text"
              id="lname"
              name="lname"
              className="inpput-filed"
              placeholder="Please enter the details."
            />
          </td>
        </tr>
        <tr>
          <td style={{ width: "20%" }} className="input-labels">
            Material:
          </td>
          <td style={{ width: "40%" }}>
            <input
              type="text"
              id="lname"
              name="lname"
              className="inpput-filed"
              placeholder="Please enter the details."
            />
          </td>
        </tr>
        <tr>
          <td style={{ width: "20%" }} className="input-labels">
            P.O. No.:
          </td>
          <td style={{ width: "40%" }}>
            <input
              type="text"
              id="lname"
              name="lname"
              className="inpput-filed"
              placeholder="Please enter the details."
            />
          </td>
        </tr>
        <tr>
          <td style={{ width: "20%" }} className="input-labels">
            SKU No.:
          </td>
          <td style={{ width: "40%" }}>
            <input
              type="text"
              id="lname"
              name="lname"
              className="inpput-filed"
              placeholder="Please enter the details."
            />
          </td>
        </tr>
        <tr>
          <td style={{ width: "20%" }} className="input-labels">
            PO Quantity:
          </td>
          <td style={{ width: "40%" }}>
            <input
              type="text"
              id="lname"
              name="lname"
              className="inpput-filed"
              placeholder="Please enter the details."
            />
          </td>
        </tr>
        <tr>
          <td style={{ width: "20%" }} className="input-labels">
            Shipment Quantity:
          </td>
          <td style={{ width: "40%" }}>
            <input
              type="text"
              id="lname"
              name="lname"
              className="inpput-filed"
              placeholder="Please enter the details."
            />
          </td>
        </tr>
        <tr>
          <td style={{ width: "20%" }} className="input-labels">
            Sample Size:
          </td>
          <td style={{ width: "40%" }}>
            <input
              type="text"
              id="lname"
              name="lname"
              className="inpput-filed"
              placeholder="Please enter the details."
            />
          </td>
        </tr>
        <tr>
          <td style={{ width: "20%" }} className="input-labels">
            Inspection Date:
          </td>
          <td style={{ width: "40%" }}>
            <input
              type="text"
              id="lname"
              name="lname"
              className="inpput-filed"
              placeholder="Please enter the details."
            />
          </td>
        </tr>
        <tr>
          <td style={{ width: "20%" }} className="input-labels">
            Inspector Name:
          </td>
          <td style={{ width: "40%" }}>
            <input
              type="text"
              id="lname"
              name="lname"
              className="inpput-filed"
              placeholder="Please enter the details."
            />
          </td>
        </tr>
        <tr>
          <td style={{ width: "20%" }} className="input-labels">
            Re-Inspection:
          </td>
          <td style={{ width: "40%" }} colspan="2">
            {/* <div  className="check-box-div"> */}
            <input
              type="checkbox"
              id="re-inspection-yes"
              name="re-inspection-yes"
            />
            <label for="re-inspection-yes">Yes</label>
            <input
              type="checkbox"
              id="re-inspection-no"
              name="re-inspection-no"
            />
            <label for="re-inspection-no">No</label>
            {/* </div> */}
          </td>
        </tr>
        <tr>
          <td style={{ width: "20%" }} className="input-labels">
            Reference Sample:
          </td>
          <td style={{ width: "40%" }} colspan="2">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1">No Reference Sample On-site</label>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1">Product Specification</label>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1">P.O.</label>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1">Packaging Spec </label>
          </td>
        </tr>
      </table>
    </>
  );
};
