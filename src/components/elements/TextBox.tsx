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
        <div className="flex">
          <input
            name="txt"
            placeholder={placeholder}
            autoComplete="off"
            className={`w-80 h-14 outline-none flex flex-wrap py-2 px-4 rounded-md transition-all text-md lg:text-sm xl:text-base bg-scnd-white ${className}`}
            {...props}
            ref={ref}
            type={type}
          ></input>

          <div className="">{children}</div>
        </div>
      </div>
    );
  }
);

TextBox.displayName = "TextBox";
export default TextBox;
