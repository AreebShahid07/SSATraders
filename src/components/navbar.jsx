import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 via-blue-900 to-black text-white px-6 md:px-12 py-4 flex items-center justify-between shadow-lg backdrop-blur-sm sticky top-0 z-50">
      <Link
        to="/"
        className="text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 hover:scale-105 transition-transform duration-300"
      >
        SSA TRADERS
      </Link>

      <div className="hidden md:flex gap-8 text-gray-300 font-medium">
        {["Home", "Products", "About"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="relative group"
          >
            <span className="hover:text-white transition-colors duration-300">
              {item}
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
        ))}
      </div>

      <div className="hidden md:flex gap-3">
        <Link to="/login">
          <Button
            variant="outline"
            className="bg-blue-900/40 border-blue-400/50 text-blue-200 backdrop-blur-md hover:bg-blue-800/50 hover:text-white rounded-full transition-all duration-300"
          >
            Login
          </Button>
        </Link>
        <Link to="/signup">
          <Button className="bg-gradient-to-r from-cyan-500/90 to-blue-600/90 backdrop-blur-md hover:from-blue-600 hover:to-cyan-500 text-white rounded-full px-6 shadow-lg transition-all duration-300">
            Signup
          </Button>
        </Link>
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6 size-1.5 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-gradient-to-b from-gray-900 to-black text-white p-6 w-60"
          >
            <div className="flex items-center justify-between mb-8">
              <Link
                to="/"
                className="text-xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
              >
                SSA TRADERS
              </Link>
            </div>

            <div className="flex flex-col gap-4 border-b border-white/10 pb-6">
              {["Home", "Products", "About"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-lg font-medium hover:text-blue-400 transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-6">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="w-full bg-blue-700/60 border-blue-400/50 text-blue-200 backdrop-blur-md hover:bg-blue-800/50 hover:text-white rounded-full transition-all duration-300"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="w-full bg-gradient-to-r from-cyan-500/90 to-blue-600/90 backdrop-blur-md hover:from-blue-600 hover:to-cyan-500 text-white rounded-full shadow-lg transition-all duration-300">
                  Signup
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
