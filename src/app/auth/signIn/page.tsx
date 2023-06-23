"use client";
import TextBox from "@/components/elements/TextBox";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useRef } from "react";

export default function LoginPage() {
  const userName = useRef("");
  const pass = useRef("");
  
  const onSubmit = async () => {
    console.log("oi");
    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <div
      className={
        "flex flex-col justify-center items-center min-h-screen overflow-hidden"
      }
    >
      <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
        <TextBox
          lableText="User Name"
          onChange={(e) => (userName.current = e.target.value)}
        />
        <TextBox
          lableText="Password"
          type={"password"}
          onChange={(e) => (pass.current = e.target.value)}
        />
        <button onClick={onSubmit} className="bg-green-400 rounded-md">
          Login
        </button>
      </div>

      <Link href="/auth/signUp/">
        <button>Sign Up</button>
      </Link>
      

    </div>
  );
}
