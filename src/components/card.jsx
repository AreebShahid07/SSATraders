import React, { useState } from "react";
import {
  Card as ShadCard,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ShoppingCart, Heart } from "lucide-react";

const Card = ({
  productName = "Premium Wireless Headphones",
  productImage = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
  productPrice = "15,999",
  productCategory = "Electronics",
  productDescription = "High-quality wireless headphones with noise cancellation.",
}) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <ShadCard className="max-w-sm rounded-2xl border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 mx-auto overflow-hidden group">
      <div className="relative bg-blue-50 p-6 pb-4">
        <div className="rounded-xl overflow-hidden bg-white shadow-sm">
          <img
            src={productImage}
            alt={productName}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      <CardContent className="p-6 pt-2">
  
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
            {productCategory || "Uncategorized"}
          </span>
        </div>

        <CardTitle className="text-lg font-bold text-gray-900 mb-2 leading-tight line-clamp-2">
          {productName}
        </CardTitle>

        <CardDescription className="text-gray-600 text-sm mb-4 line-clamp-2">
          {productDescription}
        </CardDescription>

        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-blue-600">
              Rs. {productPrice}
            </span>
            <span className="text-xs text-gray-500 line-through">
              Rs. {(
                parseInt(String(productPrice).replace(/,/g, "")) * 1.2
              ).toLocaleString()}
            </span>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 group/btn">
            <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />

            <span>Buy Now</span>
          </button>
        </div>
      </CardContent>
    </ShadCard>
  );
};

export default Card;
