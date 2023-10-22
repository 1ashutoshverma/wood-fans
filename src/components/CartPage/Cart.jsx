import { useSelector } from "react-redux";
import "../CartPage/Cart.css";
import CartElement from "./CartElement/CartElement";
import PriceDetail from "./PriceDetails/PriceDetail";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {

 
  const data = useSelector((store) => store.CartReducer)
  const navigate = useNavigate();

  return data.length == 0 ? (
    <div className="emptyCardContainer">
      <div className="emptyBox">
        <img
          className="emptyImage"
          src="https://iticsystem.com/img/empty-cart.png"
          alt="Empty Cart"
        />
        <div className="emptyBtnContainer">
          <button className="emptyBtn" onClick={() => { navigate("/product") }}>Shop Now</button>
        </div>
      </div>
    </div>
  ) : (
    <div id="cartContainer">
      <div id="Container">
        <div id="address">
          <h3>From Saved Address</h3>
          <h3>Enter Pin Code</h3>
        </div>
        <div id="CardElement">
          {data.map((ele) => {
            return (
              <CartElement
                key={ele.id}
                name={ele.title}
                seller={"Wood Fans"}
                image={ele.image}
                price={Number(ele.price)}
                discount={24}
                quantity={ele.qty}
              />
            );
          })}
        </div>
      </div>
      <div>
        <PriceDetail />
      </div>
    </div>
  );
};

export default Cart;
