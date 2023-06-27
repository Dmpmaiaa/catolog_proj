"use client";

import React from "react";
import { SignOutBtn } from "./SignButton";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const AppBar = () => {
  const { data: session } = useSession();
  const path = usePathname()
  if (!path.includes("auth")) {
    return (
      <header className=" w-full flex justify-between gap-4 p-9 h-[136px] bg-prime-violet lg:rounded-bl-full lg:rounded-br-full lg:bg-no-repeat lg:bg-cover lg:bg-bottom ">
        <h1 className="text-scnd-white font-bold text-xl lg:ml-72">
          {session?.user && `Welcome, ${session.user.username}!`}
        </h1>
        <div className="lg:mr-72">
          <SignOutBtn />
        </div>
      </header>
    );
  }
};

export default AppBar;
