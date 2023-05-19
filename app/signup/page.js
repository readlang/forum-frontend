"use client"
import Link from 'next/link';
import { useState } from "react";

export default function Page() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function onSubmit(event) {
        event.preventDefault()
        console.log(username, email, password)
    }

    return (
        <>
            <h1>Sign up</h1>
            <article style={{maxWidth: "600px", marginLeft: "auto", marginRight: "auto"}}>
                <form onSubmit={(event) => onSubmit(event)}>
                    <label>
                        Username
                        <input type="text" id="username" name="username" placeholder="Username" required
                        value={username} onChange={(e)=>setUsername(e.target.value)}
                        />
                    </label>
                    <label>
                        Email
                        <input type="text" id="email" name="email" placeholder="Email" required
                        value={email} onChange={(e)=>setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        New Password
                        <input type="password" id="password" name="password" placeholder="New password" required
                        value={password} onChange={(e)=>setPassword(e.target.value)}
                        />
                    </label>
                    <button type="submit">Sign up</button>
                </form > 
                <small>Already signed up? <Link href="/login">Log in here</Link></small>
            </article>
        </>
    );
}