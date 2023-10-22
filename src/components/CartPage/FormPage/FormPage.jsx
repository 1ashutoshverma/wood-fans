import { useCallback, useState } from "react";
import "./Formpage.css"; // Import the CSS for styling
import PriceDetail from "../PriceDetails/PriceDetail";
import useRazorpay from "react-razorpay";

import logo from "../../Navbar/NavbarImages/logo.svg"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  //=========================>>>>
  const data = useSelector((store) => store.CartReducer)

  let details = data.reduce((acc, e) => {
    return { ...acc, qty: acc.qty + e.qty, total: acc.total + Number(e.price) * e.qty }
  }, { qty: 0, total: 0 })
  console.log(details)
  const ammount = details.total - Math.round(details.total * 24 / 100);
  const navigate = useNavigate()
  //==========================>>>>
  const [Razorpay, isLoaded] = useRazorpay();
  const handlePayment = useCallback(() => {
    const options = {
      key: 'rzp_test_yswl3N40ETtM35', // Replace with your actual API Key
      amount: ammount * 100,
      currency: 'INR',
      name: 'WOOD FANS',
      description: 'Test Transaction',
      image: logo,
      // order_id: 1, // Pass the order ID obtained from createOrder
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: 'Ashutosh Verma',
        email: 'youremail@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);
  //==========================>>>>

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
              <PriceDetail onclick={handlePayment} title={"Pay Now"} />
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={handlePayment}>Click</button> */}
    </div>
  );
}

export default FormPage;
