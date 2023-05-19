"use client"

import Context from "../components/Context"

export default function ContextWrapper({children}) {
    return(
        <Context>
            {children}
        </Context>
    )
}

