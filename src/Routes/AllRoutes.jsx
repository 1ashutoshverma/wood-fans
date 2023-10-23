import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import CartPage from "../pages/CartPage";
import LoginAndSignUpPage from "../pages/LoginAndSignUpPage";
import ProductPage from "../pages/ProductPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import FormPage from "../components/CartPage/FormPage/FormPage";

const AllRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginAndSignUpPage />} />
            <Route path="/address" element={<FormPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/product/productdetails/:type/:id" element={<ProductDetailsPage />} />
        </Routes>
    )
}



export default AllRoutes;
