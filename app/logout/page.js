"use client"
import Link from 'next/link';
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ContextStore } from "../../components/Context";
import { logoutFetch } from '@/components/userFetches';

export default function Page() {
    const router = useRouter()
    const contextObj = useContext(ContextStore)
    console.log("Log out action here")

    logoutFetch().then(data => contextObj.setUser(data.user))
    .then(() => console.log(contextObj))

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