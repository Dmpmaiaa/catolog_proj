"use client";
import { useState } from "react";
import ConfirmationModal from "./Modals/ConfirmationModal";
import { ProductCard } from "./ProductCard";
import { EditModal } from "./Modals/EditModal";

interface IProducts {
  products: {
    _id: string;
    category: string;
    title: string;
    description: string;
    userId: string
    price: number;
  }[];
  onOpen: (type: string, pid?: any) => void;
  onClose: () => void;
  deleteItem: (pid: string) => void;
  updateProduct: (uid:string, product:any) => void

}

export default function Products({
  products,
  deleteItem,
  onClose,
  onOpen,
  updateProduct
}: IProducts) {
  const [editingProductId, setEditingProductId] = useState<string>("");

  const startEditing = (productId: string) => {
    setEditingProductId(productId);
  };

  const stopEditing = () => {
    setEditingProductId(prevState => "");
  };

 

  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-5">
      {Array.isArray(products) &&
        products.map((product) => (
          <div key={product._id} className="mb-2">
             {editingProductId === product._id ? (
              <EditModal
                product={product}
                onClose={stopEditing}
                updateProduct={updateProduct}
              />
            ) : (
              <ProductCard
                product={product}
                onOpen={(pid: string) => onOpen("confirmation", pid)}
                onClose={onClose}
                deleteItem={(pid) => deleteItem(pid)}
                startEditing={() => startEditing(product._id)}
              />
            )}
        </div>
        ))}
    </div>
  );
}
