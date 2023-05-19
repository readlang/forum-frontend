"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter()
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    function onSubmit(event) {
        event.preventDefault()
        console.log(newPassword)
    }

    return (
        <>
            <h1>Profile</h1>
            <article>
                <h6>Welcome, Username</h6>
                <p>username@gmail.com</p>
                <hr/>
                <form onSubmit={(event) => onSubmit(event)}>
                    <p>Change password</p>
                    <div className="grid">
                        <input type="password" id="oldpassword" name="oldpassword" placeholder="Current password" required
                            value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)} 
                        />
                        <input type="password" id="newpassword" name="newpassword" placeholder="New password" required
                            value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}
                        />
                        <button type="submit"  style={{backgroundColor: '#ffc107', borderColor: '#ffc107', color: 'black'}}>Change password</button>
                    </div>
                </form > 
                <hr/>
                <br/>
                <button className="outline" style={{color: 'red', borderColor: 'red', maxWidth: '120px'}}
                    onClick={() => router.push('/logout')}
                >Log out</button>
            </article>
        </>
    );
}