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
            <h1 className='text-2xl font-bold'>Sites</h1>
            <br/>
            <div>
                This project is very much in development.  
                Most of the effort so far has been put into getting the Specs section working.
            </div>
            <br/>
            <div className="grid gap-3 lg:grid-cols-3">

                {allSites.map(site => 
                    <Link key={site.id} href="#" className='rounded-md border border-gray-300 bg-white shadow-md p-10'>
                        
                        <h6>{site.name}</h6>
                        <hr/>
                        <p>{site.description}</p>
                        <p>{site.url}</p>
                    </Link>
                )}

                
            </div>
        </div>
    );
}