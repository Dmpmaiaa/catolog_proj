"use client";
import { useState } from "react";
import ConfirmationModal from "./Modals/ConfirmationModal";
import EditModal from "./Modals/EditModal";
import { ProductCard } from "./ProductCard";

interface IProducts {
  products: {
    _id: string;
    category: string;
    title: string;
    description: string;
    price: number;
  }[];
  onOpen: (type:string, pid?:any) => void
  onClose: () => void

  editModal?: boolean;
  deleteItem: (pid: string) => void;
}

export default function Products({
  products,
  deleteItem,
  onClose,
  onOpen
}: IProducts) {

  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-4">
      {Array.isArray(products) &&
        products.map((product) => (
          <div key={product._id} className="mb-2">
            <ProductCard
              product={product}
              onOpen={(pid: string) => onOpen("confirmation", pid)}
              onClose={onClose}
              deleteItem={(pid) => deleteItem(pid)}
            />

            
          </div>
        ))}


    </div>


  );
}
