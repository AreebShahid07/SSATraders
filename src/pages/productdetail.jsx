
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, getProducts } from "../backend/database";
import { Button } from "@/components/ui/button";
import { Box, Loader2, MessageCircle, Star } from "lucide-react";
import Card from "@/components/card";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

    useEffect(() => {
      async function fetchData() {
        try {
          const data = await getProducts();
          setProducts(data.documents.slice(0, 3));
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    }, []);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <Loader2 className="animate-spin w-10 h-10 text-indigo-600" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex h-screen items-center justify-center text-gray-700">
        Product not found.
      </div>
    );
  }
 
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-xl p-6">
        <div className="flex justify-center items-center bg-gray-100 rounded-xl p-4">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="object-contain max-h-[500px]"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <Box className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-900">Quantity :  </span>
              <span className="text-gray-600">{product.quantity || "Not Available"} </span>
            </div>
            <p className="text-2xl font-semibold text-indigo-700 mb-6">
              ${product.price}
            </p>
            <p className="text-gray-700 mb-6">{product.description || "High-quality textile machinery & spare parts."}</p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Button
              size="lg"
              className="bg-indigo-600 text-white rounded-full px-8 shadow-lg hover:bg-indigo-700"
              onClick={() =>(window.location.href = `https://wa.me/923317500543?text=${encodeURIComponent(`Hello, I'm interested in buying *${product.name}* .`)}`)}
            >
               <MessageCircle className="mr-2 h-6 w-6" />
              Order from WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-indigo-700 rounded-full px-8 shadow hover:bg-gray-100"
              onClick={() => navigate("/products")}
            >
             
              Back to Products
            </Button>
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          You Might Also Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.$id}
              onClick={() => navigate(`/products/${product.$id}`)}
              className="transition-transform transform hover:scale-105"
            >
              <Card
                productName={product.name}
                productImage={product.imageUrl}
                productPrice={product.price}
              />
            </div>
          ))}
        </div>
        
      </section>
    </div>
  );
}

export default ProductDetail;