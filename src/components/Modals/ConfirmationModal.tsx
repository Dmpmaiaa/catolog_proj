import React from "react";
import { Modal } from "./Modal";
import { Button } from "../elements/Button";

interface IModalProps {
  isVisible: boolean;
  onClose: () => void;
  deleteItem: (pid:string) => void;
}

const ConfirmationModal = ({
  isVisible,
  onClose,
  deleteItem,
}: IModalProps) => {
  return (
    <Modal isVisible={isVisible} className="flex flex-col items-center gap-10 py-8">
      <h3 className="w-44 font-semibold">
        Are you sure you want to delete this product?
      </h3>
      <div className="flex justify-center items-center gap-4">
        <Button func={deleteItem} className={"transition-all duration-400 bg-red-700 active:scale-95 hover:bg-red-600"}>
          <p className="text-white font-normal">Delete</p>
        </Button>

        <Button func={onClose} className={"transition-all duration-400 bg-prime-violet active:scale-95 hover:opacity-90"}>
          <p className="text-white font-normal">No</p>
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
