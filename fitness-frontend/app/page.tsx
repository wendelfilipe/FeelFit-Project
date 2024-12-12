'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function clickLogin() {
    console.log("Click")
  }

  return (
    <div className="bg-white flex flex-col justify-center items-center h-screen">
      <form className="bg-white shadow-red-600 shadow-2xl p-8 rounded-2xl">
        <div className="flex flex-col">
          <label className="text-black my-1">Email</label>
          <input className="border-black rounded-sm border-2 p-1" placeholder="Email"></input>
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-black my-1">Password</label>
          <input type="password" className="border-black rounded-sm border-2 p-1" placeholder="Password"></input>
        </div>
        <div className="flex flex-row items-center mt-2 justify-around">
          <Link href="/home">
            <Button>Login</Button>
          </Link>
          <Link href="/register" onClick={clickLogin}>
            <Button>Register</Button>
          </Link>
        </div>
      </form>      
    </div>
  );
}
