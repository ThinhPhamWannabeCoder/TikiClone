import { Form, Link } from "react-router-dom";

export default function RegisterForm(){

    return(
        <div className="w-full max-w-xs bg-white  shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="font-bold">Tạo Tài Khoản</h1>
            <h3 className="mb-4">Vui lòng nhập số điện thoại</h3>
            <Form method = "post" action="/login" className="">
                <label>
                    <span  className="block text-gray-700 text-sm font-bold mb-2">Email</span>
                    <input type="email" name="email" className="hover:border-slate-400 transition duration-200 focus:border-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin" required />
                </label>
                <label>
                    <span className="block text-gray-700 text-sm font-bold mb-2">Password</span>
                    <input type="password" name="password" className="hover:border-slate-400 transition duration-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"  required />
                </label>
                <label>
                    <span className="block text-gray-700 text-sm font-bold mb-2">Re-enter Password</span>
                    <input type="password" name="password" className="hover:border-slate-400 transition duration-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"  required />
                </label>
                {/* {data && data.error && (<p className="text-red-500">User or Passwrod incorrect</p>)}  */}
                <div className="flex justify-between">
                    <button 
                        className="mt-4 transition duration-200 bg-blue-500 hover:bg-blue-700 focus:bg-red-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"

                    >Đăng ký
                    </button>
                   
                </div>
                

            </Form>
        </div>
    )
}