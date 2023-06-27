"use client";

import { useState } from "react";
import TextBox from "../elements/TextBox";

interface IEditModalProps {
  product: {
    _id: string;
    userId: string;
    category: string;
    title: string;
    description: string;
    price: number;
  };
  onClose: () => void;
  updateProduct: (uid: string, product: any) => void;
}

export const EditModal = ({
  product,
  onClose,
  updateProduct,
}: IEditModalProps) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    const dataToSend = {
      title: updatedProduct.title,
      description: updatedProduct.description,
      price: updatedProduct.price,
      category: updatedProduct.category,
      userId: updatedProduct.userId,
    };
    e.preventDefault();
    updateProduct(updatedProduct._id, dataToSend)
    onClose()
  };

  return (
    <div className="relative p-4 py-6 bg-scnd-white rounded-md border lg:flex lg:w-96 lg:h-72  ">
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-1">
        <div className="min-w-fit max-w-fit p-3 h-11 rounded-2xl  absolute top-[-40px] left-3 ">
          <p className="font-bold text-scnd-white text-xs lg:text-sm">
            <input
              autoComplete="off"
              type="text"
              name="price"
              value={updatedProduct.price}
              onChange={handleInputChange}
              className="transition-all duration-200 text-prime-violet rounded-md shadow focus:bg-prime-violet focus:text-white focus:outline-none p-3 min-w-fit max-w-fit"
            />
          </p>
        </div>
        <h3 className="font-bold my-2 lg:text-2xl">
          <TextBox
            type={"text"}
            name="title"
            value={updatedProduct.title}
            onChange={handleInputChange}
            className="transition-all duration-200 rounded-md shadow focus:shadow-prime-violet"
          />
        </h3>
        <p className="text-[#6E8098] my-2 lg:text-sm">
          <textarea
            name="description"
            value={updatedProduct.description}
            className="transition-all duration-200 w-80 h-28 shadow resize-none py-2 px-4 focus:outline-none focus:shadow-prime-violet   rounded-md"
            onChange={(event) => handleInputChange(event)}
          ></textarea>
        </p>
        <div className="flex justify-between">
          <p className="text-prime-violet text-sm">
            <input
              type="text"
              name="category"
              value={updatedProduct.category}
              onChange={handleInputChange}
              className="transition-all duration-400 rounded-md shadow focus:bg-prime-violet focus:text-white focus:outline-none py-1 px-5"
            />
          </p>
          <div className="lg: flex lg:gap-4 lg:w-full lg:justify-center">
            <button
              type="submit"
              className="transition-all duration-200 text-bold text-2xl text-green-600 active:scale-95"
            >
              ✓
            </button>
            <button
              type="button"
              className="transition-all duration-200 text-red-600 text-2xl active:scale-95"
              onClick={onClose}
            >
              X
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
