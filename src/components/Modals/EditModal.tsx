import React from "react";
import { Modal } from "./Modal";
import { Button } from "../elements/Button";

interface IModalProps {
  isVisible: boolean;
  onClose?: () => void;

}

const EditModal = ({ isVisible, onClose }: IModalProps) => {
  return (
    <Modal
      isVisible={Boolean(isVisible)}
      className="flex flex-col items-center gap-10 py-8 z-index-50 "
    >
        <input defaultValue={product.title}/>
        <Button func={() => console.log('oi')
        } className={"bg-prime-violet active:scale-95"}>
          <p className="text-white font-normal">No</p>
        </Button>
    
    </Modal>
  );
};

export default EditModal;
