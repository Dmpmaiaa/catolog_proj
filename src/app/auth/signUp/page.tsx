"use client";

import TextBox from "@/components/elements/TextBox";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default async function SignUp() {
   const userName = useRef("");
  const email = useRef("");
  const password = useRef("");
  const router = useRouter();

  const verifySignUpData = (
    name: string,
    password: string,
    email: string
  ): boolean => {
    // CHECK PASSWORD STRENGHT AND VALIDATES INPUT DATA
    if (name.length > 0 && password.length > 0 && email.includes("@")) {
      return true;
    }
    return false;
  };

  const submitForm = async () => {
   
    if (verifySignUpData(userName.current, password.current, email.current)) {
      const res = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName.current,
          email: email.current,
          password: password.current,
        }),
      });

      if (res.status === 201) {
        router.push("/auth/signIn");
      } else {
        //add toastify notification
      }
    }
  };

  return (
    <div className="h-screen flex items-center pb-16 lg:pb-0">
      <div className="h-screen bg-prime-violet w-1/2 m-[-20px] hidden lg:block"></div>
      <div className="w-full overflow-y-hidden  bg-cover rounded-md lg:w-1/2">
        <div className="w-full flex flex-col items-center p-5 gap-2">
          <p className="font-semibold text-2xl">Create an account!</p>
          <p className="font-light w-44 text-center">
            Fill in your data and join us!
          </p>
        </div>
        <div className="py-10 flex flex-col items-center justify-center gap-5">
          <TextBox
            placeholder="Username"
            onChange={(e) => (userName.current = e.target.value)}
            className="focus:shadow"
          />
          <TextBox
            placeholder="Email"
            type="email"
            onChange={(e) => (email.current = e.target.value)}
            className="focus:shadow"
          />
          <TextBox
            placeholder="Password"
            type="password"
            onChange={(e) => (password.current = e.target.value)}
            className="focus:shadow"
          />

          <button
            type="submit"
            className="transition-all duration-400 rounded-md bg-prime-violet h-10 w-72 flex items-center justify-center font-bold text-white lg:w-80 hover:opacity-90 active:scale-[98%]"
            onClick={submitForm}
          >
            Create account
          </button>
        </div>
      </div>
    </div>
  );
}
