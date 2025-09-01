import React, { useEffect, useState } from "react";
import {
  addCategory,
  getCategories,
  updateCategory,
  deleteCategory,
} from "../../backend/database.js";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  BoltIcon,
  HomeIcon,
  LayoutDashboard,
  Loader2,
  Package,
  Pencil,
  PlusCircle,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await getCategories();
      setCategories(res.documents);
    } catch (error) {
      console.error("Fetch categories error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddCategory = async () => {
    if (!newCategory.trim()) return;
    try {
      await addCategory({ name: newCategory });
      setNewCategory("");
      fetchCategories();
    } catch (error) {
      console.error("Add category error:", error);
    }
  };

  const handleUpdateCategory = async (id) => {
    if (!editingName.trim()) return;
    try {
      await updateCategory(id, { name: editingName });
      setEditingId(null);
      setEditingName("");
      fetchCategories();
    } catch (error) {
      console.error("Update category error:", error);
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      await deleteCategory(id);
      fetchCategories();
    } catch (error) {
      console.error("Delete category error:", error);
    }
  };

  return (
    <div className=" min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200">
      <aside className="w-full md:w-64 bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl flex flex-col md:h-auto p-4 md:p-6 border border-white/30 mb-4 md:m-3 ">
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
          <Link to="/admin/categories" className="flex-1 md:flex-none">
            <Button
              variant="outline"
              className="w-full justify-center md:justify-start gap-2 rounded-xl border-gray-300 text-gray-700 hover:text-indigo-700 hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300 text-sm md:text-base"
            >
              <BoltIcon className="h-4 w-4 md:h-5 md:w-5" /> Category
            </Button>
          </Link>
        </nav>
      </aside>
      <div className="flex-1 mx-auto p-10 space-y-6">
        <Card className="shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Manage Categories
            </CardTitle>
          </CardHeader>
          <CardContent className="flex gap-3">
            <Input
              placeholder="Enter category name"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <Button onClick={handleAddCategory}>Add</Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              All Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center p-4">
                <Loader2 className="h-6 w-6 animate-spin" />
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[70%]">Category Name</TableHead>
                    <TableHead className="w-[30%] text-right">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {categories.length > 0 ? (
                    categories.map((cat) => (
                      <TableRow key={cat.$id}>
                        <TableCell>
                          {editingId === cat.$id ? (
                            <Input
                              value={editingName}
                              onChange={(e) => setEditingName(e.target.value)}
                              className="w-full"
                            />
                          ) : (
                            cat.name
                          )}
                        </TableCell>
                        <TableCell className="text-right space-x-2">
                          {editingId === cat.$id ? (
                            <>
                              <Button
                                size="sm"
                                onClick={() => handleUpdateCategory(cat.$id)}
                              >
                                Save
                              </Button>
                              <Button
                                size="sm"
                                variant="secondary"
                                onClick={() => {
                                  setEditingId(null);
                                  setEditingName("");
                                }}
                              >
                                Cancel
                              </Button>
                            </>
                          ) : (
                            <>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                  setEditingId(cat.$id);
                                  setEditingName(cat.name);
                                }}
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handleDeleteCategory(cat.$id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={2}
                        className="text-center text-gray-500"
                      >
                        No categories found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Categories;
