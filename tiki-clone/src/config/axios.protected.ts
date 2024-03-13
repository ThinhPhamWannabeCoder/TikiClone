import axios from "axios";
const DOMAIN_API = import.meta.env.VITE_API_URL
import Cookies from 'js-cookie';

const axiosProtected = axios.create({
    baseURL: `${DOMAIN_API}`,
    headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('jwt')}`
    },
})
const axiosMultiPartProtected = axios.create({
    baseURL: `${DOMAIN_API}`,
    headers:{
        'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
        'Authorization': `Bearer ${Cookies.get('jwt')}`
    }
})
export {axiosProtected, axiosMultiPartProtected}