
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/login";
import SignupForm from "./pages/signup";
import AddProductForm from "./pages/admin/addproduct";
import AdminProducts from "./pages/admin/allproducts";
import AdminPage from "./pages/admin/adminpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="*" element={<LoginForm />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/add-product" element={<AddProductForm />} /> 
        <Route path="/admin/products" element={<AdminProducts />} />
      </Routes>
    </Router>
  );
}

export default App;
