import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getProducts, deleteProduct, updateProduct } from "../../backend/database.js"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Loader2,
  Edit,
  Trash2,
  LayoutDashboard,
  Package,
  PlusCircle,
  HomeIcon,
} from "lucide-react"
import DeleteProduct from "./deleteproduct"
import EditProduct from "./editproduct"

export default function AdminProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [editingProduct, setEditingProduct] = useState(null)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await getProducts()
        setProducts(res.documents)
      } catch (err) {
        console.error("Error fetching products:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const handleDeleteConfirm = async (id) => {
    try {
      await deleteProduct(id)
      setProducts((prev) => prev.filter((p) => p.$id !== id))
    } catch (err) {
      console.error("Failed to delete product:", err)
    } finally {
      setSelectedProduct(null)
    }
  }

  const handleEditSave = async (id, updatedData) => {
    try {
      const updated = await updateProduct(id, updatedData)
      setProducts((prev) =>
        prev.map((p) => (p.$id === id ? { ...p, ...updated } : p))
      )
    } catch (err) {
      console.error("Failed to update product:", err)
    } finally {
      setEditingProduct(null)
    }
  }

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200">
        <Loader2 className="animate-spin w-10 h-10 text-indigo-600" />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-4">
      {/* Sidebar / Topbar */}
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
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 flex items-center justify-center">
        <Card className="w-full max-w-full md:max-w-6xl shadow-2xl rounded-3xl border border-gray-200 backdrop-blur-sm bg-white/90">
          <CardHeader>
            <CardTitle className="text-xl md:text-3xl font-bold text-center text-gray-800">
              All Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            {products.length === 0 ? (
              <p className="text-center text-gray-500">No products found.</p>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold text-gray-700 text-xs md:text-sm">
                        Image
                      </TableHead>
                      <TableHead className="font-semibold text-gray-700 text-xs md:text-sm">
                        Name
                      </TableHead>
                      <TableHead className="font-semibold text-gray-700 text-xs md:text-sm">
                        Price
                      </TableHead>
                      <TableHead className="font-semibold text-gray-700 text-xs md:text-sm">
                        Quantity
                      </TableHead>
                      <TableHead className="font-semibold text-gray-700 text-xs md:text-sm">
                        Description
                      </TableHead>
                      <TableHead className="font-semibold text-gray-700 text-xs md:text-sm">
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow
                        key={product.$id}
                        className="hover:bg-indigo-50/40 transition-colors"
                      >
                        <TableCell>
                          <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="h-12 w-12 md:h-16 md:w-16 object-cover rounded-lg border shadow-sm"
                          />
                        </TableCell>
                        <TableCell className="font-medium text-gray-800 text-sm md:text-base">
                          {product.name}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="px-2 py-1 text-xs md:text-sm">
                            ${product.price}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm md:text-base">
                          {product.quantity}
                        </TableCell>
                        <TableCell className="max-w-[120px] md:max-w-xs truncate text-gray-600 text-xs md:text-sm">
                          {product.description}
                        </TableCell>
                        <TableCell className="flex flex-col md:flex-row gap-2 mt-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex items-center gap-1 rounded-lg border-gray-300 hover:border-indigo-400 hover:text-indigo-700 transition-all text-xs md:text-sm"
                            onClick={() => setEditingProduct(product)}
                          >
                            <Edit className="w-4 h-4" /> Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            className="flex items-center gap-1 rounded-lg text-xs md:text-sm"
                            onClick={() => setSelectedProduct(product)}
                          >
                            <Trash2 className="w-4 h-4" /> Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      {/* Modals */}
      <DeleteProduct
        product={selectedProduct}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setSelectedProduct(null)}
      />
      <EditProduct
        product={editingProduct}
        onSave={handleEditSave}
        onCancel={() => setEditingProduct(null)}
      />
    </div>
  )
}
