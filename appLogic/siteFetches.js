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

export async function postSite() {
    console.log("GetSites");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/site`, {
        method: 'post',
        credentials: "include"
    })
    const data = await response.json()
    console.log(data)
    return data
}

export async function updateSite() {
    console.log("GetSites");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/site/${siteId}`, {
        method: 'put',
        credentials: "include"
    })
    const data = await response.json()
    console.log(data)
    return data
}

export async function deleteSite() {
    console.log("GetSites");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/site/${siteId}`, {
        method: 'delete',
        credentials: "include"
    })
    const data = await response.json()
    console.log(data)
    return data
}

export async function getSitePosts() {
    console.log("GetSites");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/site/${siteId}/posts`, {
        method: 'get',
        credentials: "include"
    })
    const data = await response.json()
    console.log(data)
    return data
}