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
    <div className="fixed inset-0 bg-prime-dark-blue bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
      <div className="w-full mx-2 lg:w-1/2 flex flex-col">
        {onClose && (
          <button
            onClick={() => onClose()}
            className="text-white text-bold text-xl place-self-end"
          >
            Close
          </button>
        )}
        <div className={`bg-scnd-white p-3 rounded-md ${className}`}>
          {children}
        </div>
      </div>
    </div>
  );
};
