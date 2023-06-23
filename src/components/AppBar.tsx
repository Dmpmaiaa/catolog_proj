import Link from "next/link";
import React from "react";
import SignButton from "./SignButton";

const AppBar = () => {
  return (
    <header className=" w-full flex items-center gap-4 p-5 h-[136px] bg-mobile-banner">
      <h1 className="text-scnd-white font-bold text-xl">Catalog</h1>
      <SignButton />
    </header>
  );
};

export default AppBar;
