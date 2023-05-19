"use client"
import Link from 'next/link';
import { useState } from "react";

export default function Page() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function onSubmit(event) {
        event.preventDefault()
        console.log(username, password)
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