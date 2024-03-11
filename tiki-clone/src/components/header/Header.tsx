import { Form, Link, NavLink } from "react-router-dom";
// import logo from '../../assets/images/logo.png'
import {logo} from '../../assets/images/image';
import {MagnifyingGlassIcon, HomeIcon, FaceSmileIcon, ShoppingCartIcon, MapPinIcon} from '@heroicons/react/24/outline'
// import logo
export default function Header(){
    return(

        <header className=" w-full flex relative bg-white text-gray-500 gap-20 py-3 px-5">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
                <img src={logo} alt="Images_Logo" className="w-28"/>

            </Link>
            <div className="flex flex-col w-full ">
                <div className="flex w-full flex-grow items-center gap-5">
                    <Form method="post"  className="border-slate-400 border rounded-md   flex  w-full justify-between">

                        <label className=" ml-2 flex w-full">
                            <MagnifyingGlassIcon className="w-6 block"/>

                            <input type="text" name="search" 
                                className="border-0 w-full  focus:outline-none "
                            />
                        </label>
                        <button className="text-blue-600 font-semibold flex-shrink-0 border-l py-2 px-3 hover:bg-sky-200">Tìm kiếm</button>

                    </Form>
                    {/* <div id="search" className="border-slate-400 border rounded-md flex-grow py-2 px-3 flex  justify-between">
                        
                    </div> */}
                    <div className="flex flex-shrink-0">
                        <NavLink to="/" className="px-2 flex">
                            <HomeIcon className="w-6"/>
                            <h3>Trang chủ</h3>
                        </NavLink>
                        <NavLink to="/user" className="px-2 flex">
                            <FaceSmileIcon className="w-6"/>
                            <h3>Tài khoản</h3>
                        </NavLink>
                        <NavLink to="/cart" className="border-l border-slate-400 px-2 flex">
                            <ShoppingCartIcon className="borde-slate-400 w-6"/>
                        </NavLink>
                    </div>
                </div>
                <div className="flex right-0 justify-end ">
                    <MapPinIcon className="w-6"/>
                    <p>Giao đến:</p>
                    <Link to="/" className="flex text-black underline-offset-1">
                        
                            <p className="ml-4">Q.Hoàn Kiếm, P.Hàng Trống, Hà Nội</p>
                    </Link>
                </div>
            </div>
        </header>
    )
}