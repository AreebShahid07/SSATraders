import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, getProducts } from "../backend/database";
import { Button } from "@/components/ui/button";
import {
  Box,
  Loader2,
  MessageCircle,
  Star,
  ArrowLeft,
  Heart,
  Share2,
  Package,
  Shield,
  Truck,
} from "lucide-react";
import Card from "@/components/card";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts();
        setProducts(data.documents.slice(0, 3));
      } catch (error) {
        console.error("Error fetching products:", error);
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
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-yellow-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
            <Loader2 className="animate-spin w-10 h-10 text-blue-600" />
          </div>
          <p className="text-gray-600 font-medium">
            Loading product details...
          </p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-yellow-50">
        <div className="text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="w-8 h-8 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Product Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The product you're looking for doesn't exist.
          </p>
          <Button
            onClick={() => navigate("/products")}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 backdrop-blur-lg ">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/products")}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Button>
          </div>
        </div>
      </div>

      {}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
          {}
          <div className="p-8">
            <div className="bg-blue-50 rounded-2xl p-8 mb-4">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] object-contain rounded-xl"
              />
            </div>
          </div>

          {}
          <div className="p-8 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
                    {product.category || "General"}
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {product.name}
                </h1>
              </div>
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isLiked ? "text-red-500 fill-red-500" : "text-gray-600"
                    }`}
                  />
                </button>
              </div>
            </div>

            {}
            <div className="mb-6">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-4xl font-bold text-blue-600">
                  Rs. {product.price}
                </span>
                <span className="text-xl text-gray-500 line-through">
                  Rs. {(parseInt(product.price) * 1.2).toFixed(2)}
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-sm font-medium rounded">
                  23% OFF
                </span>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Box className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">Stock:</span>
                  <span className="font-medium text-green-600">
                    {product.quantity || "Available"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-600">1 Year Warranty</span>
                </div>
              </div>
            </div>

            {}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                About this product
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {product.description ||
                  "High-quality textile machinery & spare parts."}
              </p>
            </div>

            {}
            <div className="flex gap-4 flex-wrap mt-auto">
              <Button
                size="lg"
                onClick={() =>
                  (window.location.href = `https://wa.me/923317500543?text=${encodeURIComponent(
                    `Hello, I'm interested in buying *${product.name}* .`
                  )}`)
                }
                className="flex-1 min-w-[200px] bg-green-600 hover:bg-green-700 text-white rounded-xl px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <MessageCircle className="mr-3 h-5 w-5" />
                Order via WhatsApp
              </Button>
            </div>

            {}
            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Free Delivery</p>
                  <p className="text-sm text-gray-600">
                    Expected delivery in 2-3 business days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {}
        <section className="bg-white rounded-3xl shadow-lg p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              You Might Also Like
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((relatedProduct) => (
              <div
                key={relatedProduct.$id}
                onClick={() => navigate(`/products/${relatedProduct.$id}`)}
                className="cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <Card
                  productName={relatedProduct.name}
                  productImage={relatedProduct.imageUrl}
                  productPrice={relatedProduct.price}
                  productCategory={relatedProduct.category}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductDetail;
