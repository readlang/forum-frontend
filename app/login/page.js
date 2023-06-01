"use client"
import Link from 'next/link';
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { ContextStore } from "../../components/Context";
import { loginFetch } from '@/components/userFetches';

export default function Page() {
    const contextObj = useContext(ContextStore)
    const router = useRouter()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function onSubmit(event) {
        event.preventDefault()
        loginFetch(username, password)
        .then(data => contextObj.setUser(data.user))
        .then(() => router.push('/')) 
    }

    return (
        <>
            <h1>Log in</h1>
            <article style={{maxWidth: "600px", marginLeft: "auto", marginRight: "auto"}}>
                <form onSubmit={(event) => onSubmit(event)}>
                    <label>
                        Username
                        <input type="text" id="username" name="username" placeholder="Username" required
                        value={username} onChange={(e)=>setUsername(e.target.value)}
                        />
                    </label>
                    <label>
                        Password
                        <input type="password" id="password" name="password" placeholder="Password" required
                        value={password} onChange={(e)=>setPassword(e.target.value)}
                        />
                    </label>
                    <button type="submit">Log in</button>
                </form >
                <small>Need to sign up? <Link href="/signup">Create Account</Link></small>
            </article>
        </>
    );
}