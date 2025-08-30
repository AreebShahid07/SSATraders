
import React, { useEffect, useState } from "react";
import { getProducts } from "../backend/database";
import Card from "../components/card";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Loader2, Star, ShieldCheck, Truck } from "lucide-react";

function Homepage() {
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

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200">
        <Loader2 className="animate-spin w-10 h-10 text-indigo-600" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-4">
 
<section className="relative w-full bg-indigo-900 text-white py-24 px-6 text-center">
  <div className="max-w-4xl mx-auto relative z-10">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
      Welcome to <span className="text-yellow-400">SSA Traders</span> 
    </h1>
    <p className="text-lg md:text-xl mb-8 text-gray-200">
      Quality textile machinery & spare parts you can trust
    </p>
    <div className="flex justify-center gap-6 flex-wrap">
      
      <Button
        size="lg"
        variant="outline"
        className="bg-yellow-400 text-indigo-900 font-bold rounded-full px-10 py-3 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        onClick={() => navigate("/products")}
      >
        Shop Now
      </Button>

      <Button
        size="lg"
        variant="outline"
        className="bg-yellow-400 text-indigo-900 font-bold rounded-full px-10 py-3 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        onClick={() => navigate("/about")}
      >
        Learn More
      </Button>
    </div>
  </div>

  <div className="absolute -top-16 -left-16 w-48 h-48 bg-yellow-400/20 rounded-full"></div>
  <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-white/10 rounded-full"></div>
</section>


      <section className="w-full max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Featured Products
        </h2>
        <p className="text-gray-500 text-center mb-10">
          Handpicked items that our customers love
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
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

        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 shadow-lg"
            onClick={() => navigate("/products")}
          >
            View All Products
          </Button>
        </div>
      </section>

      <section className="w-full bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Why Choose SSA Traders?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <Star className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Trusted Quality</h3>
            <p className="text-gray-600">
              We provide only the best machinery and spare parts, tested for reliability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <Truck className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Quick and reliable shipping ensures your business never slows down.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <ShieldCheck className="w-10 h-10 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
            <p className="text-gray-600">
              Our team is here to help you find exactly what you need.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Business?</h2>
        <p className="mb-6 text-gray-200">
          Explore our wide range of textile machinery and spare parts today.
        </p>
        <Button
          size="lg"
          className="bg-white text-indigo-700 hover:bg-gray-100 font-semibold rounded-full px-8 shadow-md"
          onClick={() => navigate("/products")}
        >
          Explore Products
        </Button>
      </section>
    </div>
  );
}

export default Homepage;
