"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getSitePosts } from '@/appLogic/siteFetches';
import ModalPostComment from '@/components/ModalPostComment';

export default function Page({ params }) {
    const [sitePosts, setSitePosts] = useState({})

    useEffect(() => {
        getSitePosts(params.siteId)
        .then( data => setSitePosts(data) )
    }, [])

    console.log(sitePosts)

    if ( ! sitePosts.posts ) {
        return( <div>Loading posts from server...</div> )
    } else return (
        <>
            <div className="flex justify-between items-end">
                <span className='text-2xl font-bold'>Posts for Site {params.siteId}</span>
                <ModalPostComment type="Add a Post" params={params} sitePosts={sitePosts} setSitePosts={setSitePosts} />
            </div>
            <br/>
            
            <div className='rounded-3xl border border-gray-300 bg-base-100 shadow-md p-10'>
                <h6 className=""> Site: </h6>
                <h6 className="text-xl font-bold"> {sitePosts.name} </h6>
                <h6 className=""> {sitePosts.description} </h6>
                <h6 className=""> {sitePosts.url} </h6>
                <div className='border-t-2 my-3'></div>

                {sitePosts.posts.map(post => 
                    <div key={post.id}> 
                        <div className='border-t-2 my-3'></div>
                        <Link href={ `/sites/${sitePosts.id}/posts/${post.id}` } > 
                            <div className='hover:bg-base-200 -m-3 p-3'>
                                <p className='text-lg font-bold '>{post.title}</p>
                                <p>Author: {post.User ? post.User.userName : "unknown"}</p>
                                <p>Votes: {post.votes}</p>
                                <p>{post.url}</p>
                                <p>post ID: {post.id}</p>
                            </div>
                        </Link >
                    </div>
                )}
            </div> 
        </>
    );
}