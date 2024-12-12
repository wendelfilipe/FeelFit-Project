"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link";
import React from "react";

export default function Register(){
    function handleClick(){
        
    }
    
    return (
        <div className="container bg-white flex flex-col justify-center items-center h-screen">
            <form className="bg-white shadow-2xl shadow-red-600 p-8 rounded-2xl">
                <div className="flex flex-col w-96">
                    <label htmlFor="Name">Name</label>
                    <input className="border-black border-2 rounded-md p-2 my-1" type="text" id="Name" name="Name" placeholder="Name"/>
                </div>
                <div className="flex flex-col w-96 mt-3">
                    <label htmlFor="Email">Password</label>
                    <input className="border-black border-2 rounded-md p-2 my-1" type="password" id="Email" name="Email" placeholder="Password" />
                </div>
                <div className="flex flex-col w-96 mt-3">
                    <label htmlFor="Email">Confirm Password</label>
                    <input className="border-black border-2 rounded-md p-2 my-1" type="password" id="Email" name="Email" placeholder="Confirm password"/>
                </div>
                <div className="mt-3 flex flex-row justify-center">
                    <div className="mx-5">
                        <Button onClick={() => handleClick()}>Register</Button>
                    </div>
                    <div className="mx-5">
                        <Link href="/">
                            <Button className="px-7" onClick={() => handleClick()}>Back</Button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}