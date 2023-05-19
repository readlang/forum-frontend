"use client"
// useState requires client component
import { createContext, useState } from "react";
export const ContextStore = createContext({})

export default function Context({ children }) {
    const [valX, setValX] = useState(100)
    const [valY, setValY] = useState(999)
    const [user, setUser] = useState({})

    const contextObj ={
        valX: valX, setValX: setValX,
        valY: valY, setValY: setValY,
        user: user, setUser: setUser,
    }
    
    return(
        <ContextStore.Provider value={contextObj}>
            {children}
        </ContextStore.Provider>
    )
}
