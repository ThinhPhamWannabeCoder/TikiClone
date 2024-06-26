import { useState } from "react";
import {  Link, useNavigate} from "react-router-dom";
import authApi from "../../../services/auth.services";
import Cookies from 'js-cookie';
import { User, AuthState, UserTrue} from "../../../types/user.types";
import userApi from "../../../services/user.services";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/authentication/authSlice";

interface LoginResponse {
    status?: number;
    error?: string; // Make error field optional
}

export default function LoginForm(){
    // REDUX
    const dispatch = useDispatch();
    const handleLogin =(payload: AuthState) =>{
        dispatch(
            login(payload)
        );
    }
    const navigate = useNavigate();
    const [errChecker, setErrChecker] = useState<LoginResponse>()
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]: value
        }));
    }
    const submitHandling = async (e) =>{
        e.preventDefault();
        // console.log(e)
        try {
            const response = await authApi.login({
                identifier: formData.email,
                password: formData.password
            })
            if(response.status===200){
                // Goi tiep
                await Cookies.set('jwt', response.data.jwt);

                const authResponse = await userApi.user()
                // console.log(authResponse.data.infomation_user.id)
                console.log(authResponse.data)
                const userInfo = await userApi.get_info_user(1)
                // console.log(userInfo.data.data.attributes.avatar.data.attributes.url)                
                // Handler here
                const result: User ={
                    user_id: authResponse.data.id,
                    name: authResponse.data.username,
                    email:authResponse.data.email,
                    information_id: userInfo.data.data.id,
                    nickname: userInfo.data.data.attributes.Nickname,
                    birthdate: userInfo.data.data.attributes.birthdate,
                    gender: userInfo.data.data.attributes.gender ,
                    phone: userInfo.data.data.attributes.phone ,
                    role: authResponse.data.role.name,
                    avatarUrl: userInfo.data.data.attributes.avatar.data ? userInfo.data.data.attributes.avatar.data.attributes.url : userInfo.data.data.attributes.avatar.data,
                    avatarId: userInfo.data.data.attributes.avatar.data ? userInfo.data.data.attributes.avatar.data.id : userInfo.data.data.attributes.avatar.data,
                }
                const intemediate: UserTrue={
                    id: authResponse.data.id,
                    infomationId: userInfo.data.data.id,
                    avatar: {
                        id: userInfo.data.data.attributes.avatar.data ? userInfo.data.data.attributes.avatar.data.id : userInfo.data.data.attributes.avatar.data,
                        url: userInfo.data.data.attributes.avatar.data ? userInfo.data.data.attributes.avatar.data.attributes.url : userInfo.data.data.attributes.avatar.data,
                    },
                    name: authResponse.data.username,
                    nickname: userInfo.data.data.attributes.Nickname,
                    dob: userInfo.data.data.attributes.birthdate,
                    gender: userInfo.data.data.attributes.gender ,
                    phone: userInfo.data.data.attributes.phone ,
                    email: authResponse.data.email,
                    jwtToken: response.data.jwt
                }
                handleLogin({user:intemediate})

                navigate("/user")
                return
            }
        } catch (error) {
            console.log(error.message)
            if(error.response.status===400){
                setErrChecker({status:400, error: 'Invalid  Credentials'})
                return
            }
            console.log("Error during login:", error)
            setErrChecker({ status: 500, error: 'Internal server error' });
            return;

        }
        
        

    }
    return (
            <form onSubmit={submitHandling}>
                <label>
                    <span  className="block text-gray-700 text-sm font-bold mb-2">Email</span>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}
                    className="hover:border-slate-400 transition duration-200 focus:border-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </label>
                <label>
                    <span className="block text-gray-700 text-sm font-bold mb-2">Mật khẩu</span>
                    <input type="password" name="password" value={formData.password} onChange={handleChange}
                    className="hover:border-slate-400 transition duration-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"  required />
                </label>
                {errChecker && (
                    <p className="text-red-500">
                        {errChecker &&errChecker.status === 400
                        ? 'Invalid credentials. Please log in again.'
                        : 'An error occurred while processing the form'}
                    </p>
                )}
                <div className="flex justify-between">
                    <button 
                        className="mt-4 transition duration-200 bg-blue-500 hover:bg-blue-700 focus:bg-red-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >Đăng nhập
                    </button>
                    <Link to="/register">
                        <button
                            className="mt-4  bg-red-500 hover:bg-red-700 focus:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >Đăng ký
                        </button>
                    </Link>
                </div>
            </form>   

    )
}
