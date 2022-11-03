import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import SingleProductPage from "./pages/SingleProductPage";
import CategoryProducts from "./pages/CategoryProducts";
import AllCartsPage from "./pages/AllCartsPage";
import ProductsPage from "./pages/ProductsPage";
import SingleCartPage from "./pages/SingleCartPage";
import UsersPage from "./pages/UsersPage";
import WishlistPage from "./pages/WishlistPage";
import MyCartPage from "./pages/MyCartPage";
import MyProfilePage from "./pages/MyProfilePage";

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
        <Route
          path="category/products"
          element={<CategoryProducts />}
        />
        <Route path="carts" element={<AllCartsPage />} />
        <Route path="single-cart" element={<SingleCartPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="user" element={<MyProfilePage />} />
        <Route path="wishlist" element={<WishlistPage />} />
        <Route path="my-cart" element={<MyCartPage />} />
      </Routes>
    </div>
  );
}

export default App;
