import { useContext, useEffect, useState } from "react";
import { Form, Link, useActionData} from "react-router-dom";
import { useAuth } from "./AuthProvider";

export default function LoginForm(){

    const data = useActionData() as { status: number; error?: string };
    const auth = useAuth();
    // useEffect(() => {
    //     // Use the data and perform actions based on the result
    //     if (data.status === 200) {
    //       login({ id: 2 });
    //     }
    //   }, [data.status, login]);
    const handleSubmitEvent = async (e) => {
        // e.preventDefault();
        // if (input.username !== "" && input.password !== "") {
            auth.login({id:1});
          return;
        // }
        // alert("pleae provide a valid input");
      };
    return (
        <div className="w-full max-w-xs bg-white  shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="font-bold">Xin chào</h1>
            <h3 className="mb-4">Đăng nhập hoặc tạo tài khoản mới</h3>
            <Form method = "post" action="/login" className="" onSubmit={handleSubmitEvent} >
                <label>
                    <span  className="block text-gray-700 text-sm font-bold mb-2">Email</span>
                    <input type="email" name="email" className="hover:border-slate-400 transition duration-200 focus:border-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin" required />
                </label>
                <label>
                    <span className="block text-gray-700 text-sm font-bold mb-2">Password</span>
                    <input type="password" name="password" className="hover:border-slate-400 transition duration-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"  required />
                </label>
                {data && data.error && (
                    <p className="text-red-500">
                        {data.status === 400
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
                        className="mt-4 transition duration-200 bg-red-500 hover:bg-red-700 focus:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"

                        >Đăng ký</button>
                    </Link>
                </div>
                

            </Form>
        </div>
    )
}