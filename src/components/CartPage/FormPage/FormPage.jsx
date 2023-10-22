import { useState } from "react";
import "./Formpage.css"; // Import the CSS for styling
import PriceDetail from "../PriceDetails/PriceDetail";

function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="wrapperDivFormPage">
      <div className="paymentContainer">
        <div>
          <div id="delivery-address">
            <div className="form">
              <form action="">
                <h4 className="color-666666">Personal Details</h4>
                <div id="name-contact">
                  <div>
                    <div id="name">
                      <label htmlFor="first-name">
                        <span className="color-red">*&nbsp;</span>Enter first
                        name
                      </label>
                      <input type="text" id="first-name" required />
                    </div>
                  </div>

                  <div>
                    <div id="last-name">
                      <label htmlFor="lastname">
                        <span className="color-red">*&nbsp;</span>Enter last
                        name
                      </label>
                      <input type="text" id="lastname" required />
                    </div>
                  </div>

                  <div>
                    <div id="phone">
                      <label htmlFor="contact">
                        <span className="color-red">*&nbsp;</span>Enter contact
                        number
                      </label>
                      <input type="number" id="contact" required />
                    </div>
                  </div>
                </div>

                <div id="Address-details">
                  <div id="Address">
                    <label htmlFor="houseNumber">
                      <span className="color-red">*&nbsp;</span>House No
                    </label>
                    <input type="number" id="houseNumber" required />
                  </div>
                  <div>
                    <label htmlFor="apartment">Enter apartment name</label>
                    <input type="text" id="apartment" required />
                  </div>
                </div>

                <div id="Street-details">
                  <div id="street-det">
                    <label htmlFor="street">Enter street details</label>
                    <input type="text" id="street" required />
                  </div>
                  <div>
                    <label htmlFor="landmark">
                      Enter landmark for easy reach out
                    </label>
                    <input type="text" id="landmark" required />
                  </div>
                </div>

                <div id="city-details">
                  <div id="city-name">
                    <label htmlFor="city">Enter city name</label>
                    <select type="text" id="city">
                      <option value="delhi">Delhi</option>
                      <option value="mumbai">Mumbai</option>
                      <option value="mumbai">Bangalore</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="area-det">
                      <span className="color-red">*&nbsp;</span>Area details
                    </label>
                    <select type="text" id="area-det">
                      <option value="">Sarojni</option>
                      <option value="">Anand Vihar</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="pincode">
                      <span className="color-red">*&nbsp;</span>Pincode
                    </label>
                    <select type="text" id="pincode">
                      <option value="">21345</option>
                      <option value="248145">248145</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>

            <div>
              <PriceDetail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
