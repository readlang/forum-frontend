"use client"
import Link from 'next/link';
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { ContextStore } from "../../components/Context";
import { postSite } from '@/appLogic/siteFetches';

export default function Page() {
    const contextObj = useContext(ContextStore)
    const router = useRouter()

    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [url, setUrl] = useState("")

    function onSubmit(event) {
        event.preventDefault()
        postSite(name, desc, url)
        // .then(data => contextObj.setUser(data.user))
        .then(() => router.push('/')) 
    }

    return(
        <>
            <div className="text-xl font-bold mb-4">Add a Site</div>
            {contextObj.user && contextObj.user.username ?
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                    <form className="card-body" onSubmit={(event) => onSubmit(event)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" 
                            value={name} onChange={e=> setName(e.target.value)} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" placeholder="Description" className="input input-bordered" 
                            value={desc} onChange={e=> setDesc(e.target.value)} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">URL</span>
                            </label>
                            <input type="text" placeholder="www.example.com" className="input input-bordered" 
                            value={url} onChange={e=> setUrl(e.target.value)} />
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Add Site</button>
                        </div>
                    </form>
                </div> 
            :
                <div className='font-bold'>
                    Please&nbsp;
                    <Link href="/login" className="underline">log in</Link>
                    &nbsp;before adding a site
                </div>
            }

        </>
    )
}