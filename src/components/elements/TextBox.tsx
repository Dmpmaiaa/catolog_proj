import React from "react";
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  placeholder?: string;
  children?: React.ReactNode;
}

const TextBox = React.forwardRef<HTMLInputElement, IProps>(
  ({ className, placeholder, children, type = "text", error, ...props }, ref) => {
    return (
      <div className={className + " relative"}>
        <div className="flex items-stretch">
          <input
            name="txt"
            placeholder={placeholder}
            autoComplete="off"
            className={`w-80 h-14 outline-none py-2 px-4 rounded-md transition-all text-md lg:text-sm xl:text-base  bg-scnd-white ${className}`}
            {...props}
            ref={ref}
            type={type}
          ></input>

          <div className="flex">{children}</div>
        </div>
        {error && (
          <p className="text-red-600 text-right animate-shake">{error}</p>
        )}
      </div>
    );
  }
);

TextBox.displayName = "TextBox";
export default TextBox;
