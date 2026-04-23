import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/homePage/HomePage";
import EditPage from "../pages/editProfile/EditProfile";
import Addresses from "../pages/addresses/Addresses";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<EditPage />} />
      <Route path="/manage" element={<Addresses />} />
    </Routes>
  );
}