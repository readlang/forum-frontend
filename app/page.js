"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getSites } from '@/appLogic/siteFetches';

export default function Home() {
    const [allSites, setAllSites] = useState([])

    useEffect(() => {
        getSites()
        .then(data => setAllSites(data))
    },[])

    console.log(allSites)

    return (
        <div>
            <h1>Sites</h1>
            <br/>
            <div>
                This project is very much in development.  
                Most of the effort so far has been put into getting the Specs section working.
            </div>

            <div className="grid">

                {allSites.map(site => 
                    <Link key={site.id} href="#">
                        <article>
                            <h6>{site.name}</h6>
                            <hr/>
                            <p>{site.description}</p>
                        </article>
                    </Link>
                )}

                <Link href="#">
                    <article>
                        <h6>Title</h6>
                        <hr/>
                        <p>body text...</p>
                    </article>
                </Link>
                <Link href="#">
                    <article>
                        <h6>Title</h6>
                        <hr/>
                        <p>body text...</p>
                    </article>
                </Link>
                
            </div>
        </div>
    );
}