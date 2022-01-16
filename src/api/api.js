import * as axios from 'axios'

// const instance = axios.create({
//     withCredentials: true,
//     baseURL:,
//     headers:
// })

export const UsersApi = {
    baseUrl:'https://social-network.samuraijs.com/api/1.0/',
    apiKey: 'b22c94b5-30c9-4097-866c-dbf1930efb27',
    getUsers(currentPage = 1, pageSize = 10){
        return axios.get(this.baseUrl + `users?page=${currentPage}&count=${pageSize}`,
        {
            withCredentials: true
        })
        .then(response => {
            return response.data
        })
    },

    getProfile(userId = 2){
        return axios.get(this.baseUrl + `profile/${userId}`)
        .then(response => {
            return response.data
        })
    },

    getAuth(){
        return axios.get(this.baseUrl + `auth/me`,
        {
            withCredentials: true
        })
        .then(response => {
            return response.data
        })
    },

    follow(userId){
        return axios.post(this.baseUrl + `follow/${userId}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": this.apiKey
            }
        })
        .then(response => {
            return response.data
        })
    },

    unfollow(userId){
        return axios.delete(this.baseUrl +`follow/${userId}`, {
            withCredentials: true,
            headers: {
                "API-KEY": this.apiKey
            }
        })
        .then(response => {
            return response.data
        })
    }
}