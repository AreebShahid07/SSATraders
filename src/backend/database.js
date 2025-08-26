import { databases } from "./appwrite";

export async function addProduct(product) {
  try {
    return await databases.createDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      import.meta.env.VITE_APPWRITE_TABLE_ID,
      "unique()",
      product
    );
  } catch (error) {
    console.error("Add product error:", error);
    throw error;
  }
}

export async function getProducts() {
  try {
    return await databases.listDocuments(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      import.meta.env.VITE_APPWRITE_TABLE_ID
    );
  } catch (error) {
    console.error("Get products error:", error);
    throw error;
  }
}

// Get single product by ID
export async function getProductById(productId) {
  try {
    return await databases.getDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      import.meta.env.VITE_APPWRITE_TABLE_ID,
      productId
    );
  } catch (error) {
    console.error("Get product error:", error);
    throw error;
  }
}

// Update product
export async function updateProduct(productId, updates) {
  try {
    return await databases.updateDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      import.meta.env.VITE_APPWRITE_TABLE_ID,
      productId,
      updates
    );
  } catch (error) {
    console.error("Update product error:", error);
    throw error;
  }
}

// Delete product
export async function deleteProduct(productId) {
  try {
    return await databases.deleteDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      import.meta.env.VITE_APPWRITE_TABLE_ID,
      productId
    );
  } catch (error) {
    console.error("Delete product error:", error);
    throw error;
  }
}
