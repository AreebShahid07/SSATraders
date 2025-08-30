// pages/Products.jsx
import React, { useEffect, useState } from "react";
import { getProducts } from "../backend/database.js"; 
import Card from "../components/card"; 
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts();
        setProducts(data.documents); 
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-4">
        <Loader2 className="animate-spin w-10 h-10 text-indigo-600" />
      </div>
    )
  }
  return (
    <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200">
      {products.map((product) => (
        <div
          key={product.$id}
          onClick={() => navigate(`/products/${product.$id}`)} 
        >
          <Card
            productName={product.name}
            productImage={product.imageUrl}
            productPrice={product.price}
          />
        </div>
      ))}
    </div>
  );
}

export default Products;
