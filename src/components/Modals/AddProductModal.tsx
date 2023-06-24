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


const onSubmit = async () => {
    const res = await fetch ("/api/products" , {
        method: "POST",
        headers: {
            "accessToken" : userSess.accessToken ,
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            title: title.current,
            description: description.current,
            price: price.current,
            category: category.current,
            userId: userSess._id
        })
    
    })
    console.log(res)
}

  return (
    <>
      <Modal
        isVisible={isVisible}
        onClose={onClose}
      >
        <form className="flex flex-col gap-2 items-center">
            <h3 className="font-bold text-2xl my-10  text-prime-violet">Create new product</h3>
          <TextBox
            placeholder="Title"
            onChange={(e) => (title.current = e.target.value)}
            className="shadow focus:shadow-prime-violet"
          />
          <TextBox
            placeholder="Description"
            onChange={(e) => (description.current = e.target.value)}
            className="shadow focus:shadow-prime-violet"
          />
          <TextBox
            placeholder="Price"
            type="number"
            onChange={(e) => (price.current = e.target.value)}
            className="shadow focus:shadow-prime-violet"
          />
          <TextBox
            placeholder="Category"
            onChange={(e) => (category.current = e.target.value)}
            className="shadow focus:shadow-prime-violet"
          />

          <button className="rounded-full bg-prime-violet text-white w-28 h-10 my-10" onClick={onSubmit}>Submit</button>
        </form>
      </Modal>
    </>
  );
};
