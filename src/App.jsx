import { Route, Routes } from "react-router-dom";
import HeroPage from "./Pages/HeroPage.jsx";
import ProductPage from "./Pages/ProductPage.jsx";
import CheckOutPage from "./Pages/CheckOutPage.jsx";
import ProductDetailsPage from "./Pages/ProductDetailsPage.jsx";
import Auth from "./Pages/Auth.jsx";
import Chat from "./Pages/Chat.jsx";
import "./styles.css"
import Profile from "./Pages/Profile.jsx";

const App = () => {
  return (
    <div>

      <Routes>
        <Route element={
          <HeroPage />
        } path="/home" />
        <Route element={
          <ProductPage />
        } path="/" />
        <Route element={
          <CheckOutPage />
        } path="/checkout" />
        <Route element={
          <ProductDetailsPage />
        } path="/product/:id" />
        <Route element={
          <Profile />
        } path="/profiledashboard" />
        <Route element={
          <Auth />
        } path="/auth" />
      </Routes>
      <div>
        <Chat />
      </div>
    </div>
  );
};

export default App;
