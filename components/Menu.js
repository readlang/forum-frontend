"use client"
import Link from "next/link"
import { useState } from "react";
import { BsList } from "react-icons/bs";

export function Menu() {
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <a href="#" className="secondary" onClick={()=>setShowModal(true)} >
                <BsList size="2em"/>
            </a>

            {showModal ?
                <dialog id="modal-example" open
                style={{ justifyContent: "flex-start", alignItems: "stretch", left: "-20px", backdropFilter: "none"}} >
                    <article style={{maxWidth: "400px", minWidth: "300px", paddingLeft: "50px"}}>
                        <a href="#close"
                        aria-label="Close"
                        className="close"
                        data-target="modal-example"
                        onClick={()=>setShowModal(false)}
                        >
                        </a>
                        <h4>Menu</h4>
                        
                        <Link href="/profile" onClick={()=>setShowModal(false)}><h6>Link One</h6></Link><br/>
                        <Link href="/" onClick={()=>setShowModal(false)}><h6>Link Two</h6></Link><br/>
                        <Link href="/" onClick={()=>setShowModal(false)}><h6>Link Three</h6></Link><br/>
                        
                        <button href="#cancel"
                            role="button"
                            className="secondary"
                            data-target="modal-example"
                            onClick={()=>setShowModal(false)}
                            >
                            close
                        </button>
                    </article>
                </dialog>
            : null }
        </>
    )
}