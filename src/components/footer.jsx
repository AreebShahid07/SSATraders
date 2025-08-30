import React from "react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-white shadow-md ">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold text-blue-600">SSA Traders</div>
          <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          {["Home", "Products", "About"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="relative group"
          >
            <span className="hover:text-blue-500 transition-colors duration-300">
              {item}
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        ))}
      </div>

        </div>

        <Separator className="my-6" />
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-700 text-sm">
          <p>© {new Date().getFullYear()} SSA Traders. All rights reserved.</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-blue-600">Privacy Policy</Link>
            <Link to="/privacy-policy" className="hover:text-blue-600">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
