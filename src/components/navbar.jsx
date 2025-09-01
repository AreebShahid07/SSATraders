import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
export default function Navbar() {
  const navItems = ["Home", "Products", "About"];
  return (
    <nav
      aria-label="Main navigation"
      className="w-full bg-blue-950 text-white px-6 md:px-12 py-4 flex items-center justify-between shadow-md sticky top-0 z-50 border-b border-yellow-400/20"
    >
      <Link
        to="/"
        className="flex items-center gap-3 text-2xl font-extrabold tracking-wide"
      >
        <img
          src="/SSAlogo.png"
          alt="SSA Traders logo"
          width={40}
          height={40}
          className="h-10 w-auto"
          decoding="async"
        />
        <span className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
          SSA TRADERS
        </span>
      </Link>
      <ul className="hidden md:flex gap-10 text-lg text-gray-300 font-semibold tracking-wide">
        {navItems.map((item) => (
          <li key={item}>
            <NavLink
              to={`/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `relative group transition-all duration-300 ease-out ${
                  isActive ? "text-cyan-300" : "hover:text-white"
                }`
              }
              aria-current={({ isActive }) => (isActive ? "page" : undefined)}
            >
              <span className="px-1 relative z-10">{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full group-focus-visible:w-full transition-all duration-300 ease-out rounded-full"></span>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex gap-4">
        <Link to="/login">
          <Button
            variant="outline"
            className="bg-transparent border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-blue-950 rounded-full px-6 transition-all duration-300 border-2 border-yellow-400"
          >
            Login
          </Button>
        </Link>
        <Link to="/signup">
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-semibold rounded-full px-8 shadow-sm transition-all duration-300 border-2 border-white">
            Signup
          </Button>
        </Link>
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-7 w-7 text-yellow-400" />
            </Button>
          </SheetTrigger>
          <SheetContent
            id="mobile-menu"
            side="right"
            className="bg-blue-950 text-white p-6 w-64 shadow-xl border-l border-yellow-400/20"
          >
            <div className="flex items-center justify-between mb-8">
              <Link
                to="/"
                className="text-xl font-extrabold tracking-wide text-yellow-400"
              >
                SSA TRADERS
              </Link>
            </div>
            <ul className="flex flex-col gap-5 border-b border-white/10 pb-6">
              {navItems.map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `text-lg font-medium transition-colors duration-300 ${
                        isActive
                          ? "text-yellow-400 border-l-4 border-yellow-400 pl-3 -ml-3"
                          : "hover:text-yellow-300"
                      }`
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 mt-6">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="w-full bg-transparent border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-blue-950 rounded-full transition-all duration-300"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-semibold rounded-full shadow-sm transition-all duration-300">
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
