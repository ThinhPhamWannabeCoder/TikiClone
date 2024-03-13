import { redirect } from "react-router-dom";
import { useAuthContext } from "../../components/auth/AuthProvider";
import LoginForm from "../../components/auth/LoginForm";
import { sendLogin } from "../../utils/auth";
import Cookies from 'js-cookie';
import authApi from "../../services/auth.services";
interface LoginProps{
    identifier: string;
    password: string
  }
interface LoginResponse {
    status?: number;
    error?: string; // Make error field optional
}

export default function Login(){
    // const context = useAuthContext();
    // console.log(context?.test);
    return(
        <div className="w-full max-w-xs bg-white  shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="font-bold">Xin chào</h1>
            <h3 className="mb-4">Đăng nhập hoặc tạo tài khoản mới</h3>
            <LoginForm />  
        </div>
        
    )
}


export const login = async ({request}):Promise<LoginResponse>=>{
    try{
        const data = await request.formData();
        const submission: LoginProps = {
            identifier: data.get('email'),
            password: data.get('password')
          };
        const response = await authApi.login(submission);

        if(response.status===200){
            await Cookies.set('jwt', response.data.jwt);
            // console.log(Cookies.get('jwt'))

            return redirect('/user')
        }
        // return {status:200, data: }
        throw new Error('Inter Server Error');
    }
    catch(err){
        if(err.response.status==400){
            return {status:400, error: 'Invalid  Credentials'}
        }
        console.error(err);
        return { status: 500, error: 'Internal server error' };
    }
}