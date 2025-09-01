import React, { useEffect, useState } from "react";
import { getProducts } from "../backend/database";
import Card from "../components/card";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Loader2,
  Star,
  ShieldCheck,
  Truck,
  ArrowRight,
  Award,
  Users,
  Building,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

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

  const stats = [
    { number: "200+", label: "Happy Customers", icon: Users },
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Products Sold", icon: Building },
  ];

  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-4">
      {}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white w-full py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
              <Building className="w-4 h-4 mr-2" />
              Textile Industry Leaders Since 2022
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                SSA Traders
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Quality textile machinery & spare parts you can trust
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-12">
              <Button
                size="lg"
                onClick={() => navigate("/products")}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl px-8 py-4 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/about")}
                className="bg-white/10 border-white/20 text-white font-bold rounded-xl px-8 py-4 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {}
          <div className="hidden lg:block">
            <img
              src="/hero.jpg"
              alt="Textile Machinery"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {}
      <section className="w-full max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Handpicked Selection
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Featured Products
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 mx-auto rounded-full"></div>
          <p className="text-gray-500 text-center mt-4">
            Handpicked items that our customers love
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.$id}
              onClick={() => navigate(`/products/${product.$id}`)}
              className="cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
            >
              <Card
                productName={product.name}
                productImage={product.imageUrl}
                productPrice={product.price}
                productCategory={product.category}
                productDescription={product.description}
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

      {}
      <section className="w-full bg-white py-24 px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Why Choose SSA Traders?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Star,
              title: "Trusted Quality",
              desc: "We provide only the best machinery and spare parts, tested for reliability.",
              color: "text-yellow-600",
              bg: "bg-yellow-50",
            },
            {
              icon: Truck,
              title: "Fast Delivery",
              desc: "Quick and reliable shipping ensures your business never slows down.",
              color: "text-blue-600",
              bg: "bg-blue-50",
            },
            {
              icon: ShieldCheck,
              title: "Customer Support",
              desc: "Our team is here to help you find exactly what you need.",
              color: "text-green-600",
              bg: "bg-green-50",
            },
          ].map((f, i) => (
            <div
              key={i}
              className={`${f.bg} p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center`}
            >
              <f.icon className={`w-12 h-12 ${f.color} mx-auto mb-6`} />
              <h3 className="text-xl font-semibold mb-4">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {}
      <section className="w-full bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32  rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Upgrade Your Business?
        </h2>
        <p className="mb-12 text-gray-300 max-w-2xl mx-auto">
          Explore our wide range of textile machinery and spare parts today.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          <Button
            size="lg"
            className="w-full sm:w-auto max-w-xs bg-gradient-to-r from-yellow-400 to-yellow-500 
               hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold 
               rounded-xl px-8 py-4 shadow-lg transition-all duration-300 
               hover:scale-105 group text-center"
            onClick={() => navigate("/products")}
          >
            Explore Products
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
             <div className="flex gap-3 justify-center sm:justify-start w-full sm:w-auto">
            <Button
              size="lg"
              onClick={() => (window.location.href = "tel:+923317500543")}
              className="bg-white/10 border border-white/20 text-white font-semibold rounded-xl px-6 py-4 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              onClick={() =>
                (window.location.href =
                  "https://wa.me/923317500543?text=Hello%20SSA%20Traders")
              }
              className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl px-6 py-4 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              onClick={() =>
                (window.location.href = "mailto:ssatrader121@gmail.com")
              }
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl px-6 py-4 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
