"use client";

import Link from "next/link";
import React from "react";
import { SignOutBtn } from "./SignButton";
import logout from "#/images/logout.svg";
import { useSession } from "next-auth/react";

const AppBar = () => {
  const { data: session } = useSession();
  if (session?.user) {
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
