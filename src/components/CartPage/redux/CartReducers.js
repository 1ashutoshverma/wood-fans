import React from "react";

const intialState = [
  {
    title: "LLAMA FUR CHAIR",
    type: "Armchairs and poufs",
    image:
      "https://api.woodfans.ru/storage/uploads/images/xm5MB9izJWBozqaEYYqJ7vH5j6bNQno9ltsGCNHM_cropped_1800_1790_widened_540.webp",
    url1: "https://api.woodfans.ru/storage/uploads/images/UmaPHDlW1aDJm3GNgVfZ57pb4vq0ZrQRV9qyKkiz_widened_540.webp",
    url2: "https://api.woodfans.ru/storage/uploads/images/TD7seJcC0GnwNmvTEyz5wM8pGbfU0AwI9uk2VhZx_cropped_3952_3873_widened_540.webp",
    url3: "https://api.woodfans.ru/storage/uploads/images/enbbf8b4hJ1iKXGEN1V9ZNqN2cx2V2KH1pajXyrw_cropped_3812_3769_widened_540.webp",
    price: "12000",
    id: 8,
    qty: 1,
  },
  {
    title: "POUF TRIPOD",
    type: "Armchairs and poufs",
    image:
      "https://api.woodfans.ru/storage/uploads/images/a5SJWIWqQVjfcqaDEUSBqSP7Fh9yXQ60Aam3zDew_widened_540.jpg",
    url1: "https://api.woodfans.ru/storage/uploads/images/2GWJDlcJVHEGJy9ACG5zPGkf18XS1if7FuHg4Lkw_widened_540.jpg",
    url2: "https://api.woodfans.ru/storage/uploads/images/ChiY8HjDlDGZNGqOgBjjU2SK1vMuetWXJ2VUTIex_widened_540.jpg",
    url3: "https://api.woodfans.ru/storage/uploads/images/kiVackRSd71v8nXZAOhZaTuVrkpQai0tDMMNbKCt_widened_540.jpg",
    price: "35000",
    id: 6,
    qty: 1,
  },
];
const CartReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case "add":
      return [...state, ...payload];
    case "remove": {
      let fil = state.filter((ele) => {
        return ele.title != payload;
      });
      return fil;
    }
    case "increase": {
      let map = state.map((ele) => {
        if (ele.title == payload) {
          return { ...ele, qty: ele.qty + 1 };
        } else {
          return ele;
        }
      });
      return map;
    }
    case "decrease": {
      let map = state.map((ele) => {
        if (ele.title == payload && ele.qty > 1) {
          return { ...ele, qty: ele.qty - 1 };
        } else {
          return ele;
        }
      });
      return map;
    }
    default:
      return state;
  }
};

export default CartReducer;
