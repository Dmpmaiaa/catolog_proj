import React from 'react'
interface IButtonProps {
   children?: React.ReactNode;
   className?: string
   func: (arg:any) => void
   arg?: any
}

export const Button = ({children, func, className, arg }: IButtonProps) => {
  return (
    <button
    onClick={() => func(arg)}
    className={`rounded-md h-10 w-40 flex items-center justify-center font-bold text-prime-violet ${className}`}
  >
    {children}
  </button>
  )
}
