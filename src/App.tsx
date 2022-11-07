import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import SingleProductPage from "./product/SingleProductPage";
import CategoryProducts from "./pages/CategoryProducts";
import AllCartsPage from "./cart/AllCartsPage";
import ProductsPage from "./product/ProductsPage";
import SingleCartPage from "./cart/SingleCartPage";
import UsersPage from "./pages/UsersPage";
import WishlistPage from "./pages/WishlistPage";
import MyCartPage from "./cart/MyCartPage";
import MyProfilePage from "./pages/MyProfilePage";
import AddProduct from "./product/AddProduct";
import ElectronicsProducts from "./pages/ElectronicsProducts";
import MenClothesCategory from "./pages/MenClothesCategory";
import WomensClothesCategory from "./pages/WomensClothesCategory";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="product" element={<SingleProductPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="category/products" element={<CategoryProducts />} />
        <Route
          path="category/products/electronics"
          element={<ElectronicsProducts />}
        />
        <Route
          path="category/products/men's clothing"
          element={<MenClothesCategory />}
        />
        <Route
          path="category/products/women's clothing"
          element={<WomensClothesCategory />}
        />
        <Route path="carts" element={<AllCartsPage />} />
        <Route path="single-cart" element={<SingleCartPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="user" element={<MyProfilePage />} />
        <Route path="wishlist" element={<WishlistPage />} />
        <Route path="my-cart" element={<MyCartPage />} />
        <Route path="add-product" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
