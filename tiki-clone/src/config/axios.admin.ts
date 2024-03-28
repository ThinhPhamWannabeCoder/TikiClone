import axios from "axios";
const DOMAIN_API = import.meta.env.VITE_API_URL

const axiosAdmin = axios.create({
    baseURL: `${DOMAIN_API}`,
    headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer f11a14f18d7f061b33caf5b502395529af5f3107b211eb12bbb95040c176bd992d45a0c4f67f050950af13e390ae0af7df73748e1961f9285f14bdaa1bc41eceaa472ea9b9d12d20c82765c3961f83c6fb5edeba2607f2daf1aee7adb68ebf7a9c6be46ccd980a0ee8dc5363a5eba25a456cab5606198f7ecbb3a0d6b040de09`
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