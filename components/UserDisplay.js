"use client"
import { useEffect, useContext } from 'react';
import { ContextStore } from "@/components/Context";
import { authenticateFetch } from '@/appLogic/userFetches';

export default function UserDisplay() {
    const contextObj = useContext(ContextStore)
    useEffect(() => { authenticateFetch().then(data => contextObj.setUser(data.user) )}, [])

    return (
        <div style={{display: 'flex', marginTop: "-15px"}}>
            <span style={{marginLeft: "auto", marginRight: "0", fontSize: "12px", fontWeight: "bolder" }}>
                { contextObj.user && contextObj.user.username ? 
                    `Welcome, ${contextObj.user.username}` : "Please sign in"
                }
            </span> 
        </div>
    )
}