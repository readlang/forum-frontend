"use client"
import Link from 'next/link';
import { useState, useContext, useEffect } from "react";
import { ContextStore } from "./Context";
import { BsPersonCircle } from "react-icons/bs";

export function ProfileDropdown() {
    const contextObj = useContext(ContextStore)
    // const [loggedIn, setLoggedIn] = useState(false)


    
    // let dropdownItems = [
    //             {text: "Log in", link: "/login"},
    //             {text: "Sign up", link: "/signup"}
    //         ]

    // useEffect(() => {
    //     if (contextObj.user && Object.keys(contextObj.user).length) { 
    //         // logged in
    //         dropdownItems = [
    //             {text: "Profile", link: "/profile"},
    //             {text: "Log out", link: "/logout"}
    //         ]
    //     } 

    // },[contextObj])

    let dropdownItems = [
        {text: "Log in", link: "/login"},
        {text: "Sign up", link: "/signup"},
        {text: "Profile", link: "/profile"},
        {text: "Log out", link: "/logout"},
    ]

    return(
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="m-0 btn px-0"> <BsPersonCircle size="2em" /> </label>
            <ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 z-40">
                { dropdownItems.map(item =>
                    <li key={item.text}> <Link href={item.link}> {item.text} </Link> </li> 
                )}
            </ul>
        </div>
    )
}