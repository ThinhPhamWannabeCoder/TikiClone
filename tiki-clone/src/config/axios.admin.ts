import axios from "axios";
const DOMAIN_API = import.meta.env.VITE_API_URL
const ADMIN_TOKEN = import.meta.env.VITE_ADMIN_TOKEN
const axiosAdmin = axios.create({
    baseURL: `${DOMAIN_API}`,
    headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ADMIN_TOKEN}`
    },
})

// axiosProtected.interceptors.request.use(request=>{
//     console.log('Starting request', request)
//     return request
// })
// axiosProtected.interceptors.response.use(response=>{
//     console.log('Starting response', response)
//     console.log(response.status)
//     return response
// })
export {axiosAdmin}