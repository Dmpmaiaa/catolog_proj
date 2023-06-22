export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?:string
}

const Button = ({ children, className, ...props }: IButtonProps) => {
  return <button className={`${className}`}>{children}</button>;
};

export default Button;
