import React from "react"
import { Link } from "react-router-dom"
import { LayoutDashboard, Package, PlusCircle, HomeIcon,BoltIcon } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AdminPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-4">
      <aside className="w-full md:w-64 bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl flex flex-col md:h-auto p-4 md:p-6 border border-white/30 mb-4 md:mb-0">
        <div className="text-xl md:text-2xl font-extrabold text-indigo-700 mb-6 md:mb-10 flex items-center gap-2 justify-center md:justify-start">
          <LayoutDashboard className="h-6 w-6 md:h-7 md:w-7" /> Admin Panel
        </div>

        <nav className="flex flex-row md:flex-col gap-2 md:gap-3 justify-center md:justify-start">
          <Link to="/admin/products" className="flex-1 md:flex-none">
            <Button
              variant="outline"
              className="w-full justify-center md:justify-start gap-2 rounded-xl border-gray-300 text-gray-700 hover:text-indigo-700 hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300 text-sm md:text-base"
            >
              <Package className="h-4 w-4 md:h-5 md:w-5" /> Products
            </Button>
          </Link>
          <Link to="/admin/add-product" className="flex-1 md:flex-none">
            <Button
              variant="outline"
              className="w-full justify-center md:justify-start gap-2 rounded-xl border-gray-300 text-gray-700 hover:text-indigo-700 hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300 text-sm md:text-base"
            >
              <PlusCircle className="h-4 w-4 md:h-5 md:w-5" /> Add
            </Button>
          </Link>
          <Link to="/admin" className="flex-1 md:flex-none">
            <Button
              variant="outline"
              className="w-full justify-center md:justify-start gap-2 rounded-xl border-gray-300 text-gray-700 hover:text-indigo-700 hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300 text-sm md:text-base"
            >
              <HomeIcon className="h-4 w-4 md:h-5 md:w-5" /> Home
            </Button>
          </Link>
                 <Link to="/" className="flex-1 md:flex-none">
                  <Button
                    variant="outline"
                    className="w-full justify-center md:justify-start gap-2 rounded-xl border-gray-300 text-gray-700 hover:text-indigo-700 hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300 text-sm md:text-base"
                  >
                    <BoltIcon className="h-4 w-4 md:h-5 md:w-5" /> Website
                  </Button>
                </Link>
        </nav>
      </aside>

      <main className="flex-1 p-4 md:p-10 flex items-center justify-center">
        <Card className="shadow-2xl rounded-2xl border-none bg-white/80 backdrop-blur-lg hover:shadow-3xl transition-shadow duration-300 w-full max-w-lg md:max-w-2xl">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl font-bold text-gray-800 text-center md:text-left">
              Welcome to Admin Dashboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base text-center md:text-left">
              Use the navigation to manage your products and add new items.
              Stay productive with a clean and modern dashboard.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
