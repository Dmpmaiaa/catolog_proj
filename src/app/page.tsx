"use client";
import Image from "next/image";
import SignButton from "../components/SignButton";


export default function Home() {
  async function getData() {
    const res = await fetch("/api/categories");
    console.log(res);
  }
  return (
    <>
     
    </>
  );
}
