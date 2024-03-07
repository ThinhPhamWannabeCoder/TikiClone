import axios  from "axios";
import { redirect } from "react-router-dom";
const loginApiUrl = 'http://localhost:4000/careers'

export const login = async ({request}) =>{
    const data = await request.formData();
    const submission = {
        email: data.get('email'),
        passwrod: data.get('password')
    }
    try{
       await axios.get(loginApiUrl).then((res)=>{
                console.log(res.data[0])
            })
    }   
    catch(err){
        console.error('Error:', err);
    }
    console.log(submission)
    return redirect('/')
}
export function register(){
    return "Register Successfully"
}