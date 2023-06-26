import React from "react";

interface IPaginationProps {
  productsPerPage: number;
  totalProducts: number;
  paginate: (number: number) => void;
  currentPage: number;
}

export default function Pagination({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
}: IPaginationProps) {

  // POPULATE ARRAY TO DISPLAY AS NUMBER OF PAGES 
  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="text-center mt-10 left-0 right-0">
      <ul className="inline-flex space-x-1">
        {pageNumbers.map((num) => (
          <li
            key={num}
            className={`transition-all duration-200 px-3 py-2 ml-0 w-10 h-10 leading-tight text-gray-500 bg-white border shadow rounded-lg hover:shadow-prime-violet hover:text-prime-violet hover:font-bold  cursor-pointer${
              num == currentPage && "bg-prime-violet hover:border "
            }`}
            onClick={() => paginate(num)}
          >
            <span>{num}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
