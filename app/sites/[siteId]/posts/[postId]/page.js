"use client"
import { useEffect, useState } from 'react';
import { getPostComments } from '@/appLogic/postFetches';
import ModalPostComment from '@/components/ModalPostComment';

export default function Page({ params }) {
    const [postComments, setPostComments] = useState({})

    useEffect(() => {
        getPostComments(params.postId)
        .then( data => setPostComments(data) )
    }, [])

    console.log(postComments)

    if ( ! postComments.comments) {
        return(<div>Loading comments from server...</div>)
    } else return(
        <>
            <div className="flex justify-between items-end">
                <h1 className='text-2xl font-bold'>Comments for Post {params.postId}</h1>
                <ModalPostComment type="Add Comment" params={params} postComments={postComments} setPostComments={setPostComments} />
            </div>
            <br/>
            
            <div className='rounded-3xl border border-gray-300 bg-base-100 shadow-md p-10'>
                <h6 className=""> Post: </h6>
                <h6 className="text-xl font-bold"> {postComments.title} </h6>
                <h6 className=""> {postComments.url} </h6>

                {postComments.comments.map(comment => 
                    <div key={comment.id}>
                        <div className='border-t-2 my-3'></div>
                        <div className='hover:bg-base-200 -m-3 p-3'>
                            <p className='text-lg font-bold '>{comment.text}</p>
                            <p>Author: {comment.User ? comment.User.userName: "unknown"}</p>
                            <p>Votes: {comment.votes}</p>
                            <p>comment ID: {comment.id}</p>
                            <p>nesting Depth {comment.nestingDepth}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}