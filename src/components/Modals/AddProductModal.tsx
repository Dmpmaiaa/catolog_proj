import React, { ChangeEvent, useRef, useState } from "react";
import { Modal } from "./Modal";
import TextBox from "../elements/TextBox";

interface IAddProductModalProps {
  isVisible: boolean;
  onClose: () => void;
  userSess: any;
}

interface INewProductData {
  title: string;
  description: string;
  price: number | string;
  category: string;
}

export const AddProductModal = ({
  isVisible,
  onClose,
  userSess,
}: IAddProductModalProps) => {
  const title = useRef("");
  const description = useRef("");
  const price = useRef("");
  const category = useRef("");

  const onSubmit = async (e: any) => {
    e.preventDefault;
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        accessToken: userSess.accessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title.current,
        description: description.current,
        price: price.current,
        category: category.current,
        userId: userSess._id,
      }),
    });
    console.log(res);
  };

  return (
    <>
      <Modal
        isVisible={isVisible}
        onClose={onClose}
        className="flex justify-center p-8"
      >
        <form className="flex flex-col gap-6">
          <h3 className="font-bold text-2xl mb-4 text-prime-violet">
            Create new product
          </h3>
          <div>
            <span>Title</span>
            <TextBox
              placeholder="e.g. Playstation 5"
              onChange={(e) => (title.current = e.target.value)}
              className="shadow focus:shadow-prime-violet"
            />
          </div>
          <div>
            <span>Description</span>
            <textarea
              name="txt"
              placeholder="e.g Home video game console developed by Sony Interactive Entertainment..."
              autoComplete="off"
              className={`transition-all duration-1000 w-80 h-28 outline-none shadow focus:shadow-prime-violet flex py-2 px-4 rounded-md  resize-none text-md lg:text-sm bg-scnd-white}`}
              onChange={(e) => (description.current = e.target.value)}
            />
          </div>

          <div>
            <span>Price</span>
            <TextBox
              placeholder="e.g 549"
              type="number"
              onChange={(e) => (price.current = e.target.value)}
              className="shadow focus:shadow-prime-violet"
            />
          </div>
          <div>
            <span>Category</span>
            <TextBox
              placeholder="e.g. Technology"
              onChange={(e) => (category.current = e.target.value)}
              className="shadow focus:shadow-prime-violet"
            />
          </div>
          <div className="w-full text-center flex justify-center">
            <button
              className="transition-all duration-400 rounded-md bg-prime-violet h-10 w-40 text-center font-bold text-white lg:w-80 hover:opacity-90 active:scale-[98%]"
              onClick={(e) => onSubmit(e)}
            >
              Add product
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};
