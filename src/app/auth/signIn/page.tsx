"use client";
import TextBox from "@/components/elements/TextBox";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useRef } from "react";

export default function LoginPage() {
  const userName = useRef("");
  const pass = useRef("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/UserProducts",
    });
  };
  return (
    <>
      <div className="w-full overflow-y-hidden bg-mobile-banner bg-cover rounded-md">
        <div className="py-10 flex flex-col items-center justify-center gap-10">
          <TextBox
            placeholder="Username"
            onChange={(e) => (userName.current = e.target.value)}
          />
          <TextBox
            placeholder="Passord"
            type={"password"}
            onChange={(e) => (pass.current = e.target.value)}
          />
          <button
            onClick={onSubmit}
            className="rounded-md bg-scnd-light-gray h-10 w-40 flex items-center justify-center hover:bg-prime-light-violet font-bold text-prime-violet"
          >
            Login
          </button>
        <Link href="/auth/signUp/">
          <button className="rounded-md bg-prime-midnight h-10 w-40 flex items-center justify-center hover:bg-prime-light-violet font-bold text-scnd-light-gray shadow-sm">
            Sign Up
          </button>
        </Link>
        </div>
      </div>
      <div className="border ">
      </div>
    </>
  );
}
