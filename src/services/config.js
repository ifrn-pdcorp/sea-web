import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://sea-beta.herokuapp.com/'
})

http.interceptors.request.use(config => {
    var token = sessionStorage.getItem('userToken')
    if (token)
        config.headers.common['Authorization'] = 'Bearer ' + token
    return config
})