import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar";
import HomePage from "./HomePage";
import RegisterPage from "./authentification/RegisterPage";
import LoginPage from "./authentification/LoginPage";
import SingleRecipeCard from "./pages/SingleRecipePage";


function App() {
  return (
    <div className="App">
      <AppBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="recipe" element={<SingleRecipeCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
