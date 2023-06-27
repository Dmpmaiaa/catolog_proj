"use client";
import TextBox from "@/components/elements/TextBox";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function LoginPage() {
  const userName = useRef("");
  const pass = useRef("");

  const onSubmit = async () => {
    
    const res = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/UserProducts",

    });
    console.log(res)
    if(res === undefined){
      toast.info('Item updated!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        });
    }
    
  };
  return (
    <div className="h-screen flex items-center pb-16 lg:pb-0">
      <div className="h-screen bg-prime-violet w-1/2 m-[-20px] hidden lg:block"></div>
      <div className="w-full overflow-y-hidden  bg-cover rounded-md lg:w-1/2">
        <div className="w-full flex flex-col items-center p-5 gap-2">
          <p className="font-semibold text-2xl">Hello Again!</p>
          <p className="font-light w-44 text-center">
            Welcome back you've been missed!
          </p>
        </div>
        <div className="py-10 flex flex-col items-center justify-center gap-10">
          <TextBox
            placeholder="Username"
            className="focus:shadow"
            onChange={(e) => (userName.current = e.target.value)}
          />
          <TextBox
            placeholder="Password"
            type={"password"}
            className="focus:shadow"
            onChange={(e) => (pass.current = e.target.value)}
          />
          <button
            className="transition-all duration-400 rounded-md bg-prime-violet h-10 w-72 flex items-center justify-center font-bold text-white lg:w-80 hover:opacity-90 active:scale-[98%]"
            onClick={onSubmit}
          >
            Login
          </button>
          <div className="border w-2/3"></div>

          <span>
            <span>Not a member? </span>
            <Link href="/auth/signUp/">
              <span className="text-prime-violet hover:underline">
                Register Now
              </span>
            </Link>
          </span>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
