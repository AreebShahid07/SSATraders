import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const EditProduct = ({ product, onSave, onCancel }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (product) {
      reset({
        name: product.name || "",
        price: product.price || "",
        category: product.category || "",
        description: product.description || "",
        imageUrl: product.imageUrl || "",
      });
    }
  }, [product, reset]);

  if (!product) return null;

  const onSubmit = (data) => {
    onSave(product.$id, data);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Edit Product</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label>Name</Label>
              <Input
                {...register("name", { required: "Name is required" })}
                placeholder="Enter product name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Label>Price</Label>
              <Input
                type="number"
                step="0.01"
                {...register("price", {
                  required: "Price is required",
                  valueAsNumber: true,
                  min: { value: 1, message: "Price must be at least 1" },
                })}
                placeholder="Enter product price"
              />
              {errors.price && (
                <p className="text-red-500 text-sm">{errors.price.message}</p>
              )}
            </div>

            <div>
              <Label>Category</Label>
              <Input
                type="text"
                {...register("category", {
                  required: "Category is required",
                })}
                placeholder="Enter product category"
              />
              {errors.category && (
                <p className="text-red-500 text-sm">{errors.category.message}</p>
              )}
            </div>
                  
            <div>
              <Label>Description</Label>
              <Input
                {...register("description")}
                placeholder="Enter description"
              />
            </div>

            <div>
              <Label>Image URL</Label>
              <Input
                {...register("imageUrl")}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button type="button" variant="outline" onClick={onCancel}>
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditProduct;
