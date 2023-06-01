export async function authenticateFetch() {
    console.log('AuthenticateFetch')
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/user/authenticate`, {
        method: "get",
        credentials: "include"
    })
    const data = await response.json()
    console.log(data)
    return data
}

export async function loginFetch(username, password) {
    console.log("login!@!!")
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/user/login`, {
        method: "post",
        credentials: "include",
        headers: {
            // 'Accept': 'application/json',
            // 'Access-Control-Allow-Origin':'http://localhost:3000/',
            'content-type': 'application/json'
        },
        body: JSON.stringify({username: username, password: password})
    })
    const data = await response.json()
    console.log(data)
    return data
}

export async function signupFetch(username, email, password) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/user`, {
        method: "post",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({userName: username, email: email, password: password})
    })
    const data = await response.json()
    console.log(data)
    return data
}

export async function updatePassword(oldPassword, newPassword) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/user/updatePassword`, {
        method: "put",
        credentials: "include",
        headers: {
            // 'Accept': 'application/json',
            // 'Access-Control-Allow-Origin':'http://localhost:3000/',
            'content-type': 'application/json',
            // 'authorization': `Bearer ${contextObj.token}`
        },
        body: JSON.stringify({password: oldPassword, newPassword: newPassword})
    })
    const data = await response.json()
    console.log(data)
    return data
}

export async function logoutFetch() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/user/logout`, {
        method: 'get',
        credentials: "include"
    })
    const data = await response.json()
    console.log(data)
    return data
}