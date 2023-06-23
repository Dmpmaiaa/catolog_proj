"use client";
import SignButton from "../components/SignButton";

export default function Home() {
  async function getData(){
    const res = await fetch("/api/categories")
    console.log(res)
  }
  return (
    <>
      <button onClick={getData}>OIDS</button>
    </>
  );
}
