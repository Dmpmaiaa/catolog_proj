"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const SignButton = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <div className="flex ml-auto rounded-md bg-scnd-light-gray h-8 w-20 items-center justify-center hover:bg-prime-light-violet font-bold text-sm text-prime-violet">
        
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
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

export default SignButton;
