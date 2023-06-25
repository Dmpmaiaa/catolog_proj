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
  onOpen: (pid?:any) => void
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
    <div>
      {Array.isArray(products) &&
        products.map((product) => (
          <div key={product._id}>
            <ProductCard
              product={product}
              onOpen={(pid: string) => onOpen(pid)}
              onClose={onClose}
              deleteItem={(pid) => deleteItem(pid)}
            />

            <EditModal isVisible={false} product={product} />
          </div>
        ))}
    </div>
  );
}
