import { NavLink, Outlet } from "react-router-dom";

export default function User(){
    // Fetch Data
    // Use Effect
    // Khi nao thi dung useContaxt day ta
    // Fetch data
    // Pass vao cac component
    return(
        <div className="grid grid-cols-5 w-full gap-10 px-10">
            <div className="nav flex flex-col col-span-1">
                <h1 className="font-bold text-green-800">Thông tin tài khoản</h1>
                <NavLink to="info">Thông tin tài khoản</NavLink>
                <NavLink to="noti">Thông báo của tôi</NavLink>
                <NavLink to="address">Sổ địa chỉ</NavLink>
                <NavLink to="order">Quản lý đơn hàng</NavLink>
            </div>
            <div className="col-span-4 flex items-center flex-col">
                <h1 className="font-bold text-green-800">Content</h1>

                {/* Render here */}
                <Outlet></Outlet>
            </div>
        </div>
    )
}