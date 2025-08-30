import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import {
  LayoutDashboard,
  Package,
  PlusCircle,
  DollarSign,
  FileText,
  Hash,
  Image as ImageIcon,
  HomeIcon,
  BoltIcon
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

import { addProduct } from "../../backend/database.js"
import { uploadImage } from "@/backend/imageHandle.js"

export default function AddProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      let imageUrl = ""
      if (data.image[0]) {
        imageUrl = await uploadImage(data.image[0])
      }

      const product = {
        name: data.name,
        price: parseFloat(data.price),
        imageUrl,
        description: data.description,
        quantity: parseInt(data.quantity, 10),
      }

      await addProduct(product)
      alert("✅ Product added successfully!")
      reset()
    } catch (error) {
      console.error("Add product error:", error)
      alert("❌ Failed to add product")
    } finally {
      setLoading(false)
    }
  }

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
      <main className="flex-1 p-4 md:p-8 flex items-center justify-center">
        <Card className="w-full max-w-md md:max-w-lg shadow-2xl rounded-3xl border border-gray-200 backdrop-blur-sm bg-white/90">
          <CardHeader>
            <CardTitle className="text-center text-2xl md:text-3xl font-bold text-gray-800">
              Add New Product
            </CardTitle>
            <p className="text-center text-xs md:text-sm text-gray-500 mt-1">
              Fill in the product details
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-5">
              <div>
                <Label htmlFor="name">Product Name</Label>
                <div className="relative">
                  <Package className="absolute left-3 top-3 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Awesome T-Shirt"
                    className="pl-10 rounded-xl text-sm md:text-base"
                    {...register("name", { required: "Name is required" })}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="price">Price</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    placeholder="19.99"
                    className="pl-10 rounded-xl text-sm md:text-base"
                    {...register("price", { required: "Price is required" })}
                  />
                </div>
                {errors.price && (
                  <p className="text-red-500 text-xs">{errors.price.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="quantity">Quantity</Label>
                <div className="relative">
                  <Hash className="absolute left-3 top-3 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                  <Input
                    id="quantity"
                    type="number"
                    placeholder="10"
                    className="pl-10 rounded-xl text-sm md:text-base"
                    {...register("quantity", { required: "Quantity is required" })}
                  />
                </div>
                {errors.quantity && (
                  <p className="text-red-500 text-xs">{errors.quantity.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                  <Input
                    id="description"
                    type="text"
                    placeholder="Enter product details"
                    className="pl-10 rounded-xl text-sm md:text-base"
                    {...register("description", { required: "Description is required" })}
                  />
                </div>
                {errors.description && (
                  <p className="text-red-500 text-xs">{errors.description.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="image">Product Image</Label>
                <div className="relative">
                  <ImageIcon className="absolute left-3 top-3 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    className="pl-10 rounded-xl text-sm md:text-base"
                    {...register("image")}
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl py-2 md:py-3 text-sm md:text-base font-medium shadow-md hover:scale-[1.02] transition-transform"
              >
                {loading ? "Adding..." : "Add Product"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
