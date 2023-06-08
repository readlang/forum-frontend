"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getSitePosts } from '@/appLogic/siteFetches';

export default function Page({ params }) {
    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        getSitePosts(params.siteId)
        .then(data => setAllPosts(data))
    },[])

    return (
        <div>
            <h1 className='text-2xl font-bold'>Posts for Site {params.siteId}</h1>
            <br/>
            
            <div className="grid gap-3 lg:grid-cols-3">
                {allPosts.map(post => 
                    <Link key={post.id} href="#" className='rounded-md border border-gray-300 bg-white shadow-md p-10'>
                        
                        <p className='text-lg font-bold mb-5'>{post.title}</p>
                        <hr/>
                        <p>Author: {post.User.userName}</p>
                        <p>Votes: {post.votes}</p>
                        <p>{post.url}</p>
                    </Link>
                )} 
            </div>
        </div>
    );
}