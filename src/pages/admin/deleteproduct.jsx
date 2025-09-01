import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DeleteProduct = ({ product, onConfirm, onCancel }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Delete Product</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Are you sure you want to delete <b>{product.name}</b>?
          </p>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => onConfirm(product.$id)}
            >
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeleteProduct;
