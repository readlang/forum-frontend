"use client"
import { useContext } from 'react';
import { ContextStore } from '@/components/Context';

export default function UserDisplay() {
    const contextObj = useContext(ContextStore)

    return (
        <div style={{display: 'flex'}}>
            { contextObj.user && contextObj.user.username ? 
                <span style={{marginLeft: "auto", marginRight: "0"}}>Welcome, {contextObj.user.username}</span> : 
                null 
            }
        </div>
    )
}