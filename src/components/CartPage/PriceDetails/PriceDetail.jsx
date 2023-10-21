import "./PriceDetail.css";
import { Link } from "react-router-dom";
const PriceDetail = () => {
  return (
    <div id="mainContainer">
      <div id="priceContainer">
        <div>
          <h3 className="priceDetail">Price Details</h3>
        </div>
        <hr />
        <div className="priceTags">
          <p>Price (2 items)</p>
          <h4>₹40,999</h4>
        </div>
        <div className="priceTags">
          <p>Discount</p>
          <h4>₹22,200</h4>
        </div>
        <div className="priceTags">
          <p>Delivery Charges</p>
          <p>
            <span id="deliveryCharges">₹40</span>
            <span id="deliveryFree">Free</span>
          </p>
        </div>
        <hr className="dotted-line"></hr>
      </div>
      <div className="totalAmount priceTags">
        <h3>Total Amount</h3>
        <h3>₹18,799</h3>
      </div>
      <hr className="dotted-line"></hr>
      <div className="checkOutContainer">
        <button className="checkOutBtn">
          <Link className="checkoutLink" to={"/address"}>Checkout</Link>
        </button>
      </div>
    </div>
  );
};

export default PriceDetail;
