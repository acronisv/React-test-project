import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": 'b22c94b5-30c9-4097-866c-dbf1930efb27'
    }
})

export const UsersApi = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
    },

    getProfile(userId = 2){
        return instance.get(`profile/${userId}`)
        .then(response => {
            return response.data
        })
    },

    getAuth(){
        return instance.get(`auth/me`)
        .then(response => {
            return response.data
        })
    },

    follow(userId){
        return instance.post(`follow/${userId}`)
        .then(response => {
            return response.data
        })
    },

    unfollow(userId){
        return instance.delete(`follow/${userId}`)
        .then(response => {
            return response.data
        })
    }
}