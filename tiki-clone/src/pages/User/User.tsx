import axios from "axios";
import { getMe } from "../../utils/User";
import Cookies from 'js-cookie';
import { productUrl } from '../../config';
export default function  User(){
    // console.log("hi"+)
    const data =  Cookies.get('jwt');
    axios.get(productUrl,{
        headers: {
            Authorization:
                'Bearer '+data
        }
    }).then((response)=>{
        console.log(response.data.data[0].attributes.name)
        return(<>
            <h1>Hi</h1>
            <p>{response.data.data[0].attributes.name}</p>
        </>)
    }).catch((err)=>{

    })
    
}