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
    <div className="fixed inset-0 bg-prime-dark-blue bg-opacity-50 backdrop-blur-sm flex justify-center items-center ">
      <div className="relative w-full mx-2 lg:w-1/2 flex flex-col">
        
        <div className={`bg-scnd-white p-3 rounded-md ${className}`}>
        {onClose && (
          <button
            onClick={() => onClose()}
            className="transition-all duration-75 text-prime-violet rounded-md text-bold text-2xl absolute top-4 right-6 active:scale-90 hover:bg-red-600 hover:text-white w-4 h-4 p-4 flex items-center justify-center "
          >
            X
          </button>
        )}
          {children}
        </div>
      </div>
    </div>
  );
};
