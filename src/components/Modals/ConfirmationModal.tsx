import React from "react";
import { Modal } from "./Modal";
import { Button } from "../elements/Button";

interface IModalProps {
  isVisible: boolean;
  onClose: () => void;
  deleteItem: any;
}

const ConfirmationModal = ({ isVisible, onClose, deleteItem }: IModalProps) => {
  return (
    <Modal isVisible={isVisible}>
      <div className="flex ">
        <Button func={onClose} className={"bg-prime-violet"}>
          <p className="text-white">Nope</p>
        </Button>
        <Button func={deleteItem} className={"bg-prime-violet"}>
          <p className="text-white">Yep</p>
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
