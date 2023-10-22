import { useSelector } from "react-redux";
import "../CartPage/Cart.css";
import CartElement from "./CartElement/CartElement";
import PriceDetail from "./PriceDetails/PriceDetail";
import { useState } from "react";

const Cart = () => {
  // const [data, setData] = useState([
  //   {
  //     id: 1,
  //     name: "Hunky OC Polyester Office Arm Chair",
  //     seller: "Ambani",
  //     image:
  //       "https://api.woodfans.ru/storage/uploads/images/x9V57EeEsrvL9zWFSIUSK1766CK76PQ93XjrLDw1_widened_900.jpg",
  //     url1: "https://api.woodfans.ru/storage/uploads/images/CP65GN3NT3mxIemo9wXMFbJ19sPBXfhe0F9Ivr81_widened_900.jpg",
  //     url2: "https://api.woodfans.ru/storage/uploads/images/ESkUCJSMHzb62y1NeOkuTIEezKsjx0QzHOBb5Bd1_widened_900.jpg",
  //     url3: "https://api.woodfans.ru/storage/uploads/images/M83cTDULNmEr8rJ2qaOouPQjhpirGNXWStoLOKTG_widened_900.jpg",
  //     price: 252000,
  //     discount: 44,
  //   },
  //   {
  //     id: 2,
  //     name: "Chair with Sofa Combination",
  //     seller: "Adani",
  //     image:
  //       "https://api.woodfans.ru/storage/uploads/images/2di18TNSAcHrzcfG68FtSqYgzYom9feqpLGnOcmx_widened_900.jpg",
  //     url1: "https://api.woodfans.ru/storage/uploads/images/gVS0pCrTnMZMA0CYRzSv4UiECh5I0TVE9W0fA2uR_widened_900.jpg",
  //     url2: "https://api.woodfans.ru/storage/uploads/images/XdIDrOyutXZN8Wq23PEYwvM0JPnzSSEIh24HZYnV_widened_900.jpg",
  //     url3: "https://api.woodfans.ru/storage/uploads/images/4xO6HtnuPbQZ8mRmiTaAZmx312B9RK3J1876Nf7S_widened_900.jpg",
  //     price: 265000,
  //     discount: 24,
  //   },
  // ]);
  const data = useSelector((store) => store.CartReducer)
  // console.log(data)

  return data.length == 0 ? (
    <div className="emptyCardContainer">
      <div className="emptyBox">
        <img
          className="emptyImage"
          src="https://iticsystem.com/img/empty-cart.png"
          alt="Empty Cart"
        />
        <div className="emptyBtnContainer">
          <button className="emptyBtn">Shop Now</button>
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
