import { Routes, Route } from "react-router-dom";

import React from 'react'
import Homepage from "../pages/Homepage";
import CartPage from "../pages/CartPage";
import LoginAndSignUpPage from "../pages/LoginAndSignUpPage";
import ProductPage from "../pages/ProductPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginAndSignUpPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/product/productdetails/:id" element={<ProductDetailsPage />} />
        </Routes>
    )
}

export default AllRoutes