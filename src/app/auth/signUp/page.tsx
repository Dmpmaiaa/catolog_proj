"use client";

import TextBox from "@/components/elements/TextBox";
import { useRef } from "react";
import { verifySignUpData } from "./utils";
import { useRouter } from "next/navigation";

export default async function SignUp() {
  const userName = useRef("");
  const email = useRef("");
  const password = useRef("");
  const router = useRouter();

  const submitForm = async (e: any) => {
    e.preventDefault();
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

      console.log(res);
      if (res.status === 201) {
        router.push("/auth/signIn");
      } else {
        //add toastify notification
      }
    }
  };

  return (
    <form>
      <TextBox
        lableText="Username"
        onChange={(e) => (userName.current = e.target.value)}
      />
      <TextBox
        lableText="Email"
        type="email"
        onChange={(e) => (email.current = e.target.value)}
      />
      <TextBox
        lableText="Password"
        type="password"
        onChange={(e) => (password.current = e.target.value)}
      />

      <button type="submit" onClick={(e) => submitForm(e)}>
        Create account
      </button>
    </form>
  );
}
