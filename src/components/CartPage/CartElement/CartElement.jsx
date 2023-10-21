import "./CartElement.css";
import { useState } from "react";
const CartElement = ({ name, seller, image, price, discount }) => {
  console.log(name, seller, image, price, discount);
  const [mainPrice, setMainPrice] = useState(price);
  const [discountPrice, setDiscountPrice] = useState(
    price - price * (discount / 100)
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <div id="cartElementContainer">
        <div>
          <img src={image} width={150} height={150} />
        </div>
        <div>
          <p className="productName">{name}</p>
          <p className="productDetails">Black, DIY(Do-It-Yourself)</p>
          <p className="sellerName">Seller:{seller}</p>
          <div id="elementPrice">
            <span className="beforePrice">₹{mainPrice}</span>
            <span className="currentPrice">₹{discountPrice.toFixed(0)}</span>
            <span className="discount">{discount}% Off</span>
          </div>
        </div>
      </div>
      <div id="quantityContainer">
        <div className="quantity-control">
          <button
            className="decrement"
            disabled={quantity == 1}
            onClick={() => {
              setQuantity(quantity - 1);
              setMainPrice(mainPrice - price);
              setDiscountPrice(
                discountPrice - (price - price * (discount / 100))
              );
            }}
          >
            -
          </button>
          <div className="quantity">{quantity}</div>
          <button
            className="increment"
            onClick={() => {
              setQuantity(quantity + 1);
              setMainPrice(mainPrice + price);
              setDiscountPrice(discountPrice + (price - price * (discount / 100)));
            }}
          >
            +
          </button>
        </div>
        <div id="removeBtn">
          <button>SAVE FOR LATER</button>
          <button>REMOVE</button>
        </div>
      </div>
    </div>
  );
};

export default CartElement;
