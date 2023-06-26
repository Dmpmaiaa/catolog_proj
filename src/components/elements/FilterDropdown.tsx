import React, { use, useEffect, useRef, useState } from "react";

interface IFilterDropdownProps {
  products: any;
  filterValueSelected: (e: any) => void;
}

export const FilterDropdown = ({
  products,
  filterValueSelected,
}: IFilterDropdownProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selected, setSelected] = useState("All")

  
  const onFilterValueChange = (e: any) => {
    setSelected(e.target.id)
    filterValueSelected(e.target.id);
    setIsOpened(false)
  };

  return (
    <div className="relative flex flex-col">
      <button
        className="text-prime-violet bg-scnd-white h-[72px] focus:outline-none focus:shadow focus:shadow-prime-violet font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center w-30 "
        type="button"
        onClick={() => setIsOpened(prevState => !prevState)}
       
        
        
      >
        {`${selected} `}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        id="dropdown"
        className={`absolute z-10 mr-32  ${
          !isOpened && "hidden"
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-28 absolute left-[-38px] top-[80px] max-h-[180px] overflow-y-auto`}
      >
        <ul
          className="py-2 text-sm text-prime-violet"
        >
            <li onClick={onFilterValueChange} id={"All"} className="block px-4 py-2 hover:bg-gray-100 ">All</li>
          {products.map((el: any) => (
            <li key={el} onClick={onFilterValueChange} id={el}  className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

{
  /* <div>
      <select
        name="categories"
        onChange={onFilterValueChange}
        className="outline-none border-none h-[72px] w-20 rounded-md p-3 bg-scnd-white"
      >
     
          <option value={"all"}>All</option>
          {products.map((el: any) => (
            <option key={el} value={el} className="bg-blue-800 text-center p-2 w-28 rounded-xl">
              {el}
            </option>
          ))}
        
      </select>
    </div> */
}
