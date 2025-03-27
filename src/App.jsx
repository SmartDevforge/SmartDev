import { Navigate, Route, Routes } from "react-router-dom";
import HeroPage from "./Pages/HeroPage.jsx";
import ProductPage from "./Pages/ProductPage.jsx";
import CheckOutPage from "./Pages/CheckOutPage.jsx";
import ProductDetailsPage from "./Pages/ProductDetailsPage.jsx";
import Auth from "./Pages/Auth.jsx";
import Chat from "./Pages/Chat.jsx";
import "./styles.css"
import Profile from "./Pages/Profile.jsx";
import { ResetPassword } from "./Pages/PasswordReset.jsx";
import ProtectedRoute from "./constants/ProtectedRoute.jsx";

const App = () => {
  const token = localStorage.getItem("token");
  return (
    <div>

      <Routes>
        <Route element={
          <HeroPage />
        } path="/home" />

        <Route element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } path="/profile" />


        <Route element={
          <ProductPage />
        } path="/" />


        <Route element={
          <ProtectedRoute>
            <CheckOutPage />
          </ProtectedRoute>
        } path="/checkout" />


        <Route element={
          <ProductDetailsPage />
        } path="/product/:id" />


        <Route element={
          <ResetPassword />
        } path="/reset-password" />


        <Route
          path="/auth"
          element={token ? <Navigate to="/" replace /> : <Auth />}
        />
      </Routes>
      <div>
        <Chat />
      </div>
    </div>
  );
};

export default App;
