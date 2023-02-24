import Axios from 'axios'

const baseURL = "http://127.0.0.1:8000";

export const post = Axios.create({
    baseURL: process.env.API_URL,
    method:'post'
})

export const instance = Axios.create({
    baseURL: baseURL,
})
