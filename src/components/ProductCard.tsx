import Image from "next/image";
import React, { useState } from "react";
import edit from "#/images/edit.svg";
import del from "#/images/delete.svg";
import ConfirmationModal from "./Modals/ConfirmationModal";

interface IProductCardProps {
  product: {
    _id: string;
    category: string;
    title: string;
    description: string;
    price: number;
  };
  onOpen: (pid:string) => void;
  onClose: () => void;
  deleteItem: (pid: string) => void;
}

export const ProductCard = ({
  product,
  onOpen,
  onClose,
  deleteItem,
}: IProductCardProps) => {
 


  return (
    <>
      <div className="relative mt-12 p-4 py-10 bg-scnd-white rounded-md">
        <div>
          <div className="bg-prime-violet min-w-11 p-3 h-11 text-center rounded-2xl flex items-center justify-center absolute top-[-20px] left-3">
            <p className="font-bold text-scnd-white text-xs">
              {product.price}€
            </p>
          </div>
          <div>{product._id}</div>
          <div className="absolute top-5 right-5 flex gap-6">
            <span>
              <Image src={edit} width={20} height={20} alt="Edit button" />
            </span>
            <span onClick={() => onOpen(product._id)}>
              <Image src={del} width={20} height={20} alt="Delete button" />
            </span>
          </div>

          <h3 className="font-bold my-2">{product.title}</h3>
          <p className="text-[#6E8098] my-2">{product.description}</p>
          <p className="mt-8 mb-[-12px] font-bold text-prime-violet text-sm">
            {product.category}
          </p>
        </div>

      </div>
    </>
  );
};
