export async function getSites() {
    console.log("GetSites");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/site`, {
        method: 'get',
        credentials: "include"
    })
    const data = await response.json()
    console.log(data)
    return data
}

export async function postSite(name, desc, url) {
    console.log("PostSites");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/site`, {
        method: 'post',
        credentials: "include",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({name: name, description: desc, url: url}) 
    })
    const data = await response.json()
    console.log(data)
    return data
}

export async function updateSite() {
    console.log("updateSite");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/site/${siteId}`, {
        method: 'put',
        credentials: "include"
    })
    const data = await response.json()
    console.log(data)
    return data
}

export async function deleteSite() {
    console.log("deleteSite");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/site/${siteId}`, {
        method: 'delete',
        credentials: "include"
    })
    const data = await response.json()
    console.log(data)
    return data
}

export async function getSitePosts() {
    console.log("getSitePosts");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/site/${siteId}/posts`, {
        method: 'get',
        credentials: "include"
    })
    const data = await response.json()
    console.log(data)
    return data
}