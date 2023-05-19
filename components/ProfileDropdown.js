"use client"
import Link from 'next/link';
import { useContext } from "react";
import { ContextStore } from "./Context";
import { BsPersonCircle } from "react-icons/bs";

export function ProfileDropdown() {
    const contextObj = useContext(ContextStore)
    
    let dropdownItems 
    if (Object.keys(contextObj.user).length) { 
        // logged in
        dropdownItems = [
            {text: "Profile", link: "/profile"},
            {text: "Log out", link: "/logout"}
        ]
    } else { 
        // not logged in
        dropdownItems = [
            {text: "Log in", link: "/login"},
            {text: "Sign up", link: "/signup"}
        ]
    }

    return(
        <details role="list" dir="rtl">
            <summary aria-haspopup="listbox" role="link">
                <BsPersonCircle size="1.5em" />
            </summary>
            <ul role="listbox">
                { dropdownItems.map(item =>
                    <li key={item.text}>
                        <Link href={item.link}> {item.text} </Link>
                    </li> 
                )}
            </ul>
        </details>
    )
}