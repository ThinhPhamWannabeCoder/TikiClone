import axios from "axios";
 const DOMAIN_API = import.meta.env.VITE_API_URL
const axiosPublic = axios.create({
    baseURL: `${DOMAIN_API}`,
    headers:{
        'Content-Type': 'application/json',
    },
    withCredentials: true,
})
export default axiosPublic;