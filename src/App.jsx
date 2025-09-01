
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginForm from "./pages/login";
import SignupForm from "./pages/signup";
import AddProductForm from "./pages/admin/addproduct";
import AdminProducts from "./pages/admin/allproducts";
import AdminPage from "./pages/admin/adminpage";
import Homepage from "./pages/homepage";
import ProductsPage from "./pages/products";
import ProductDetailPage from "./pages/productdetail";
import MainLayout from "./components/mainlayout";
import AboutPage from "./pages/about";
import AdminRoute from "./components/AdminRoute";
import PolicyPage from "./pages/privacypolicy";
import Categories from "./pages/admin/categories";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy-policy" element={<PolicyPage />} />
        </Route>

        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/add-product" element={<AddProductForm />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/categories" element={<Categories />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
