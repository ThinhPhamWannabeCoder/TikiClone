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

