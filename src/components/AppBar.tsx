"use client"

import Link from "next/link";
import React from "react";
import {SignOutBtn} from "./SignButton";
import logout from "#/images/logout.svg"
import { useSession } from "next-auth/react";

const AppBar = () => {
  const { data: session } = useSession();

  
  return (
    <header className=" w-full  flex gap-4 p-9 h-[136px] bg-mobile-banner ">
      
      <h1 className="text-scnd-white font-bold text-xl">
        {session?.user ? `Welcome, ${session.user.username}!` : `Hello!`}
      </h1>
      <SignOutBtn />
    </header>
  );
};

export default AppBar;
