import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  Building,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://facebook.com",
      color: "hover:text-blue-600",
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com",
      color: "hover:text-sky-500",
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com",
      color: "hover:text-pink-600",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com",
      color: "hover:text-blue-700",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #eab308 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-5 py-10 pb-5">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
                    SSA Traders
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Textile Trading Excellence
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed max-w-md">
                Your trusted partner in textile machinery and spare parts. We
                specialize in used weaving looms, sizing equipment, and
                comprehensive spare parts solutions for the textile industry.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-sm">
                    Jakhra Market Stop#4, Nooriabad
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-sm">0331-7500543 / 0344-2491946</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span className="text-sm">ssatrader121@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
              </h4>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => navigate(link.path)}
                    className="block text-gray-300 hover:text-white transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </div>
                  </button>
                ))}
              </nav>
            </div>

            {}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white relative">
                Support
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
              </h4>
              <nav className="space-y-3">
                {legalLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => navigate(link.path)}
                    className="block text-gray-300 hover:text-white transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </div>
                  </button>
                ))}
              </nav>

              {}
              <div className="mt-6 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <h5 className="text-sm font-semibold text-white mb-2">
                  Business Hours
                </h5>
                <div className="text-xs text-gray-400 space-y-1">
                  <div className="flex justify-between">
                    <span>Monday - Saturday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {}
        <Separator className="bg-gray-700" />

        {}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {}
            <p className="text-gray-400 text-sm text-center lg:text-left">
              © {new Date().getFullYear()} SSA Traders. All rights reserved.
            </p>

            {}
            <div className="flex items-center gap-1">
              <span className="text-gray-400 text-sm mr-3">Follow us:</span>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                    title={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl text-white text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <ExternalLink className="w-4 h-4 rotate-90" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
