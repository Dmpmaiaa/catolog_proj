"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import logout from "#/images/logout.svg";
import Image from "next/image";

const SignButton = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <div className="ml-auto rounded-md  hover:bg-prime-light-violet font-bold text-sm text-prime-violet">
        <button onClick={() => signOut()} className="text-red-600">
          <Image src={logout} width={35} height={35} alt="logout btn" />
        </button>
      </div>
    );
  }
  return (
    <div className="ml-auto rounded-md bg-scnd-light-gray h-10 w-24 flex items-center justify-center hover:bg-prime-light-violet">
      <button onClick={() => signIn()} className="font-bold text-prime-violet ">
        Login
      </button>
    </div>
  );
};

const SignOutBtn = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <div className="ml-auto rounded-md  hover:bg-scnd-white hover:text-prime-violet font-bold text-md text-scnd-white transition-colors duration-400">
        {" "}
        <button onClick={() => signOut()} className="lg:p-2">
          Sign Out
          {/* <Image src={logout} width={35} height={35} alt="logout btn" /> */}
        </button>
      </div>
    );
  }
};

export { SignButton, SignOutBtn };
