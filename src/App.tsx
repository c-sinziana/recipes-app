import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import SingleProductPage from "./pages/SingleProductPage";
import CategoryProducts from "./pages/CategoryProducts";
import AllCartsPage from "./pages/AllCartsPage";
import ProductsPage from "./pages/ProductsPage";
import SingleCartPage from "./pages/SingleCartPage";
import UsersPage from "./pages/UsersPage";
import WishlistPage from "./pages/WishlistPage";
import MyProfilePage from "./pages/MyProfilePage";
import AddProductForm from "./components/product/AddProductForm";
import AddUserForm from "./components/user/AddUserForm";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { ColorModeContextProvider } from "./context/ThemeContext";
import { darkTheme } from "./theme/Theme";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ColorModeContextProvider theme={darkTheme}>
      <ShoppingCartProvider>
        <div className="App">
          <Navbar />
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
            <Route path="/add-product" element={<AddProductForm />} />
            <Route path="/add-user" element={<AddUserForm />} />
          </Routes>
        </div>
      </ShoppingCartProvider>
    </ColorModeContextProvider>
  );
}

export default App;
