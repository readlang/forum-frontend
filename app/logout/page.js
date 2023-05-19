"use client"
import Link from 'next/link';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter()

    console.log("Log out action here")

    useEffect(()=>{
        setTimeout(()=>{
            console.log("redirect action")
            router.push('/')
        }, 3000)
    },[])

    return (
        <>
            <article style={{maxWidth: "600px", marginLeft: "auto", marginRight: "auto"}}>
                <h5>You have been logged out.</h5>
                <small>you will be redirected to the home page</small><br/>
                <small><Link href="/login">Go back to log in</Link></small>
            </article>
        </>
    );
}