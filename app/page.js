"use client"
import Link from 'next/link';
import { useEffect } from 'react';
import { authenticateFetch } from '@/components/userFetches';
import { ContextStore } from "@/components/Context";
import { useContext } from "react";

export default function Home() {
    const contextObj = useContext(ContextStore)
    useEffect(() => { authenticateFetch().then(data => contextObj.setUser(data.user) )}, [])

    return (
        <div>
            <h1>Sites</h1>
            <br/>
            <div>
                This project is very much in development.  
                Most of the effort so far has been put into getting the Specs section working.
            </div>

            <div className="grid">
                <Link href="#">
                    <article>
                        <h6>Title</h6>
                        <hr/>
                        <p>body text...</p>
                    </article>
                </Link>
                <Link href="#">
                    <article>
                        <h6>Title</h6>
                        <hr/>
                        <p>body text...</p>
                    </article>
                </Link>
                <Link href="#">
                    <article>
                        <h6>Title</h6>
                        <hr/>
                        <p>body text...</p>
                    </article>
                </Link>
                
            </div>
        </div>
    );
}