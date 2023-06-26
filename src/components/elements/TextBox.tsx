import React from "react";
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  placeholder?: string;
  label?: string,
  children?: React.ReactNode;
}

const TextBox = React.forwardRef<HTMLInputElement, IProps>(
  ({ className, placeholder, type = "text", error, label, ...props  }, ref) => {
    return (
      <div className={className + " relative"}>
        <div>
          <input
            name="txt"
            placeholder={placeholder}
            autoComplete="off"
            className={`w-80 h-14 outline-none flex py-2 px-4 rounded-md transition-all text-md lg:text-sm bg-scnd-white ${className} break-words`}
            {...props}
            ref={ref}
            type={type}
          ></input>

         
        </div>
      </div>
    );
  }
);


export default TextBox;
