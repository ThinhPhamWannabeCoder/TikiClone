import { NavLink } from "react-router-dom";
import {UserIcon, BellIcon, MapPinIcon, ReceiptRefundIcon} from '@heroicons/react/24/solid'
import {thinh_avatar} from '../../assets/images/image'
const user_nav=[
    {
        id: 1,
        title: "Thông tin tài khoản",
        url: "info",
        icon: <UserIcon className="w-6 mx-3"/>,
    },
    {
        id: 2,
        title: "Thông báo của tôi",
        url: "noti",
        icon: <BellIcon className="w-6 mx-3"/>
    },
    {
        id: 3,
        title: "Sổ địa chỉ",
        url: "address",
        icon: <MapPinIcon className="w-6 mx-3"/>
    },
    {
        id: 4,
        title: "Quản lý đơn hàng",
        url: "order",
        icon: <ReceiptRefundIcon className="w-6 mx-3"/>
    }
]


export default function UserNav(){
    // props user info
    // Duoc su dung lam layout
    // Lay prop tu context de lam viec -> Cool
    // Hom nay lam xong xin thu 6

    // Su dung Nav tai day
    return (
        <div id="user-nav" className="col-span-1 flex flex-col">
            <div id="user-info" className="flex items-center py-4">
                <img src={thinh_avatar} alt="" className="object-cover w-12 h-12 rounded-full flex-shrink-0"/>
                <div className="ml-3 flex flex-col justify-between h-full">
                    <p className="text-s font-light">Tài khoản của</p>
                    <p>Phạm Tiến Thịnh</p>
                </div>
                
            </div>
            <nav id="v-nav" className="flex flex-col">
                {user_nav.map(nav=>(
                        <NavLink key={nav.id} to={nav.url} className="user-nav flex hover:bg-gray-200 py-2 text-slate-500">
                            {nav.icon}
                            {nav.title}
                        </NavLink>
                    ))
                }
            </nav>
        </div>
    )
}