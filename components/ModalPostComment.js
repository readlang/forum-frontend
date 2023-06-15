"use client"
import { useState } from "react";
import { postPost } from '@/appLogic/postFetches';
import { postComment } from "@/appLogic/commentFetches";

export default function ModalPostComment ({type, params, sitePosts, setSitePosts, postComments, setPostComments}) {
    const [postTitle, setPostTitle] = useState("")
    const [postUrl, setPostUrl] = useState("")
    const [commText, setCommText] = useState("")
    const [commND, setCommND] = useState("")
    const [commPC, setCommPC] = useState("")

    async function submitPost(event) {
        event.preventDefault()
        const data = await postPost(postTitle, postUrl, params.siteId)
        console.log(data)
        const newPosts = [...sitePosts.posts, data ] 
        setSitePosts({...sitePosts, posts: newPosts })
        window.my_modal_2.close()
    }

    async function submitComment(event) {
        event.preventDefault()
        const data = await postComment(commText, parseInt(commND), parseInt(commPC), parseInt(params.postId) )
        console.log(data)
        const newComments = [...postComments.comments, data]
        setPostComments({...postComments, comments: newComments})
        window.my_modal_2.close()
    }

    return( <>
        <button className="btn btn-xs btn-info btn-outline" 
            onClick={()=>window.my_modal_2.showModal()}>{type}
        </button>
        <dialog id="my_modal_2" className="modal">
            { type === "Add a Post" ?
                // Add a post:
                <form method="dialog" className="modal-box" >
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">{type}</h3>
                    <div className="form-control">
                        <label className="label"> <span className="label-text">Post Title</span> </label>
                        <input type="text" placeholder="Title" className="input input-bordered" 
                        value={postTitle} onChange={e=> setPostTitle(e.target.value)} />
                    </div>

                    <div className="form-control">
                        <label className="label"> <span className="label-text">URL</span> </label>
                        <input type="text" placeholder="www.example.com" className="input input-bordered" 
                        value={postUrl} onChange={e=> setPostUrl(e.target.value)} />
                    </div>

                    <div className="form-control mt-6" onClick={(event) => submitPost(event)}>
                        <button type='submit' className="btn btn-primary">Add Post</button>
                    </div>
                </form>
            :   
                // Add a comment:
                <form method="dialog" className="modal-box" >
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">{type}</h3>
                    <div className="form-control">
                        <label className="label"> <span className="label-text">Comment</span> </label>
                        <input type="text" placeholder="I love this!" className="input input-bordered" 
                        value={commText} onChange={e=> setCommText(e.target.value)} />
                    </div>

                    <div className="form-control">
                        <label className="label"> <span className="label-text">Comment Nesting Depth</span> </label>
                        <input type="number" placeholder="commND" className="input input-bordered" 
                        value={commND} onChange={e=> setCommND(e.target.value)} />
                    </div>

                    <div className="form-control">
                        <label className="label"> <span className="label-text">Parent Comment</span> </label>
                        <input type="number" placeholder="parent comment" className="input input-bordered" 
                        value={commPC} onChange={e=> setCommPC(e.target.value)} />
                    </div>

                    <div className="form-control mt-6" onClick={(event) => submitComment(event)}>
                        <button type='submit' className="btn btn-primary">Add Comment</button>
                    </div>
                </form>
            }
            <form method="dialog" className="modal-backdrop">  <button>close</button>  </form>
        </dialog>
    </> )
}