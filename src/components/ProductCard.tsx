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
      <div className="relative p-4 py-10 bg-scnd-white rounded-md border lg:flex lg:w-96 lg:h-72">
        <div>
          <div className="bg-prime-violet min-w-11 max-w-11 p-3 h-11 text-center rounded-2xl flex items-center justify-center absolute top-[-20px] left-3 ">
            <p className="font-bold text-scnd-white text-xs lg:text-sm">
              {product.price}€
            </p>
          </div>
    
          <div className="flex gap-6 lg:gap-3 lg:mb-5">
            <span className="cursor-pointer">
              <Image src={edit} width={20} height={20} alt="Edit button" />
            </span>
            <span onClick={() => onOpen(product._id)} className="cursor-pointer"> 
              <Image src={del} width={20} height={20} alt="Delete button" />
            </span>
          </div>

          <h3 className="font-bold my-2 lg:text-2xl">{product.title}</h3>
          <p className="text-[#6E8098] my-2 lg:text-xl">{product.description}</p>
          <p className="font-bold text-prime-violet text-sm absolute bottom-8 left-5">
            {product.category}
          </p>
        </div>

      </div>
    </>
  );
};
