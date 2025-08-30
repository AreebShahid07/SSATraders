import React from "react";
import { Card as ShadCard, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

const Card = ({ productName, productImage, productPrice }) => (
<ShadCard className="max-w-xs rounded-3xl border-blue-400 bg-gray-100 shadow-inner p-6 mx-auto text-center hover:shadow-xl transition duration-500">
  <div className="rounded-2xl shadow-md bg-gray-200 p-2 mb-5">
    <img src={productImage} alt={productName} className="w-full border-2 h-40 object-cover rounded-xl" />
  </div>

  <CardContent className="p-0">
    <CardTitle className="text-xl font-semibold text-gray-800">{productName}</CardTitle>
    <CardDescription className="text-gray-500 text-sm mt-2">Tech Items</CardDescription>
  </CardContent>

  <div className="flex items-center justify-between mt-5">
    <span className="text-lg font-bold text-indigo-600">₹{productPrice}</span>
    <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-xl shadow-md">
      <ShoppingCart className="inline h-4 w-4 mr-1" /> Buy now
    </button>
  </div>
</ShadCard>





);

export default Card;
