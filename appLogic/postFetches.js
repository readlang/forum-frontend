export async function postPost(title, url, siteId) {
    console.log("PostPost");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/post`, {
        method: 'post',
        credentials: "include",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({title: title, url: url, SiteId: siteId}) 
    })
    const data = await response.json()
    console.log(data)
    return data
}

export async function getPostComments(postId) {
    console.log("getPostComments");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/post/${postId}/comments`, {
        method: 'get',
        credentials: "include"
    })
    const data = await response.json()
    console.log(data)
    return data
}