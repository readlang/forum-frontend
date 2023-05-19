"use client"
import { useEffect, useState } from "react";

export function SearchBar() {
    const [searchText, setSearchText] = useState("")
    const [componentWidth, setComponentWidth] = useState("140px")

    useEffect(() => {
        if (window.innerWidth > 600 && searchText !== "") setComponentWidth("250px")
        if (searchText === "") setComponentWidth("140px")
    },[searchText])
    
    return(
        <input type="search" id="search" name="search" placeholder="Search" 
            style={{height: "1em", width: componentWidth, marginBottom: "0"}}
            value={searchText} onChange={(e) => setSearchText(e.target.value)} 
        />
    )
}