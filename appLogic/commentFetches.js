export async function postComment(text, nestingDepth, parentComment, postId) {
    if (!nestingDepth) nestingDepth = 0

    console.log("PostComment");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/comment`, {
        method: 'post',
        credentials: "include",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({text: text, nestingDepth: nestingDepth, parentComment: parentComment, PostId: postId}) 
    })
    const data = await response.json()
    console.log(data)
    return data
}