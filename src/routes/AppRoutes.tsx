import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/homePage/HomePage";
import EditPage from "../pages/editProfile/EditProfile";
import Addresses from "../pages/addresses/Addresses";
import MyOrders from "../pages/myOrders/MyOrders";
import HistoryPage from "../pages/historyPage/HistoryPage";
import ProductsPage from "../pages/productsPage/ProductsPage";
import ProductPage from "../pages/productPage/ProductPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/edit-profile" element={<EditPage />} />
      <Route path="/addresses" element={<Addresses />} />
      <Route path="/orders" element={<MyOrders />} />
      <Route path="/our-story" element={<HistoryPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
  );
}
