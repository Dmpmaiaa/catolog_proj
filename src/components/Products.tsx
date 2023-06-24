"use client";

import edit from "#/images/edit.svg";
import del from "#/images/delete.svg";
import Image from "next/image";
import { useState } from "react";
import ConfirmationModal from "./Modals/ConfirmationModal";

interface IProducts {
  products: {
    _id: string;
    category: string;
    title: string;
    description: string;
    price: number;
  }[];

  loading: boolean;
  deleteItem: (pid: string) => void;
}

export default function Products({ products, loading, deleteItem }: IProducts) {
  const [confirmationModal, setConfirmationModal] = useState(false);

  return (
    <div>
      {Array.isArray(products) &&
        products.map((product) => (
          <div
            key={product._id}
            className="relative mt-12 p-4 py-10 bg-scnd-white rounded-md"
          >
            <div>
              <div className="bg-prime-violet min-w-11 p-3 h-11 text-center rounded-2xl flex items-center justify-center absolute top-[-20px] left-3">
                <p className="font-bold text-scnd-white text-xs">
                  {product.price}€
                </p>
              </div>

              <div className="absolute top-5 right-5 flex gap-3">
                <span>
                  <Image src={edit} width={20} height={20} alt="Edit button" />
                </span>
                <span onClick={() => setConfirmationModal(true)}>
                  <Image src={del} width={20} height={20} alt="delete button" />
                </span>
              </div>

              <h3 className="font-bold my-2">{product.title}</h3>
              <p className="text-[#6E8098] my-2">{product.description}</p>
              <p className="mt-8 mb-[-12px] font-bold text-prime-violet text-sm">
                {product.category}
              </p>
            </div>
          </div>
        ))}

        <ConfirmationModal isVisible={confirmationModal} onClose={() => setConfirmationModal(false)} deleteItem={() => deleteItem()}/>
    </div>
  );
}
