import React from "react";

interface IModalProps {
  isVisible: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  className?: string;
}

export const Modal = ({
  isVisible,
  onClose,
  children,
  className,
}: IModalProps) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-prime-dark-blue bg-opacity-50 backdrop-blur-sm flex justify-center items-center overflow-clip">
      <div className="w-11/12 flex flex-col">
        {onClose && (
          <button
            onClick={() => onClose()}
            className="text-scnd-light-gray text-xl place-self-end"
          >
            X
          </button>
        )}
        <div className={`bg-scnd-white p-3 rounded-md ${className}`}>
          {children}
        </div>
      </div>
    </div>
  );
};
