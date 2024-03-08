import axios from 'axios';
import Cookies from 'js-cookie';
import { productUrl } from '../config';

export const getMe = async ()=>{
    const userJwt: string = Cookies.get("jwt");
    console.log(userJwt);
    try {
        const response = await axios.get(productUrl,{
            header:{
                headers:{
                    Authorization:
                        'Bearer ' + userJwt
                }
            }
        })
        console.log(response)
    } catch (error) {
        if (error.request.status === 400) {
            return { data: null, status: 400, error: 'error' };
        }
        if (error.request.status === 403) {
            console.log('Unauthorized')
            return { data: null, status: 400, error: 'error' };
        }
        // console.log(error.message)
        return { data: null, status: 500, error: 'error' };
        
    }

}