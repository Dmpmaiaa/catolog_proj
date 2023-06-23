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
  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="text-center fixed bottom-20 left-0 right-0">
      <ul className="inline-flex space-x-1">
        {pageNumbers.map((num) => (
          <li
            key={num}
            className={`px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ${
              num === currentPage && "bg-red-500 hover:bg-red-400"
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
