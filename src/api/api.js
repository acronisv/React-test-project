import * as axios from 'axios'

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

// const instance = axios.create({
//     withCredentials: true,
//     baseURL:,
//     headers:
// })

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return axios.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`,
    {
        withCredentials: true
    })
    .then(response => {
        return response.data
    })
}

export const getProfile = (userId = 2) => {
    return axios.get(baseUrl + `profile/${userId}`)
    .then(response => {
        return response.data
    })
    
}

export const getAuth = () => {
    return axios.get(baseUrl + `auth/me`,
    {
        withCredentials: true
    })
    .then(response => {
        return response.data
    })
}

export const follow = (userId) => {
    return axios.post(baseUrl + `follow/${userId}`, {}, {
        withCredentials: true,
        headers: {
            "API-KEY": "b22c94b5-30c9-4097-866c-dbf1930efb27"
        }
    })
    .then(response => {
        return response.data
    })
}

export const unfollow = (userId) => {
    return axios.delete(baseUrl +`follow/${userId}`, {
        withCredentials: true,
        headers: {
            "API-KEY": "b22c94b5-30c9-4097-866c-dbf1930efb27"
        }
    })
    .then(response => {
        return response.data
    })
}