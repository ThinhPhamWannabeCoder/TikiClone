import { Form} from "react-router-dom";

export default function RegisterForm(){

    return(
        <>
            
            <Form method = "post" action="/login" className="">
                <label>
                    <span  className="block text-gray-700 text-sm font-bold mb-2">Số điện thoại</span>
                    <input type="email" name="email" className="hover:border-slate-400 transition duration-200 focus:border-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin" required />
                </label>
                <label>
                    <span className="block text-gray-700 text-sm font-bold mb-2">Mật khẩu</span>
                    <input type="password" name="password" className="hover:border-slate-400 transition duration-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"  required />
                </label>
                <label>
                    <span className="block text-gray-700 text-sm font-bold mb-2">Nhập lại mật khẩu</span>
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
        </>            

    )
}