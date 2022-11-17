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
import UsersPage from "./user/UsersPage";
import WishlistPage from "./pages/WishlistPage";
import MyProfilePage from "./user/MyProfilePage";
import AddProduct from "./product/AddProduct";
import AddCart from "./cart/AddCart";
import AddUser from "./user/AddUser";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <div className="App">
        <AppBar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
          <Route path="/stuff" element={<ProductsPage />} />
          <Route path="/products" element={<CategoryProducts />} />
          <Route path="/carts" element={<AllCartsPage />} />
          <Route path="/single-cart" element={<SingleCartPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/user" element={<MyProfilePage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/add-order" element={<AddCart />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
