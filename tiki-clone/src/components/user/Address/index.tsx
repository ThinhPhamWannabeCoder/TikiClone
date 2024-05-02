import { useEffect, useState } from "react";
import { GetAddressList } from "../../../types/user.types";
import ContentBox from "../../Common/ContentBox";
import UserAddressItem from "./UserAddressItem";
import productApi from "../../../services/buyer.services";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export default function UserAddressModule(){
    const user = useSelector((state: RootState)=>state.auth.user)

    const [addressList, setAddressList] = useState<GetAddressList[]>([])
    useEffect(()=>{
        productApi.getAddress( {userId: user?.id as number, default: false})
            .then(res=>{  
                setAddressList(res.data.data)
            })

            .catch(err =>{
                console.log(err.message)
            })
    },[])
    return(
        <div className="flex flex-col gap-3 ">
            <ContentBox class="p-5 text-center rounded-none hover:bg-slate-400 cursor-pointer hover:text-white">
                THÊM ĐỊA CHỈ
            </ContentBox>

            {addressList?.map(item => (<UserAddressItem data={item} key={item.id}/>))}
        </div>
    )
}
// const sampleData = {
//     status: 200,
//     data: [
//         {
//             id: 1,
//             type: "Nhà",
//             address: "210 Bạch Đằng",
//             contact_name: "Thịnh",
//             contact_mobile: "0971933424",
//             default: false,
//             ward: {
//                 id: 3,
//                 name: "Bạch Đằng",
//                 district: {
//                     id: 3,
//                     name: "Hai Bà Trưng",
//                     city: {
//                         id: 1,
//                         name: "Hà Nội"
//                     }
//                 }
//             }
//         },
//         {
//             id: 2,
//             type: "Nhà",
//             address: "210 Bạch Đằng",
//             contact_name: "Thịnh",
//             contact_mobile: "0971933424",
//             default: false,
//             ward: {
//                 id: 3,
//                 name: "Bạch Đằng",
//                 district: {
//                     id: 3,
//                     name: "Hai Bà Trưng",
//                     city: {
//                         id: 1,
//                         name: "Hà Nội"
//                     }
//                 }
//             }
//         },
//         {
//             id: 3,
//             type: "Nhà",
//             address: "210 Bạch Đằng",
//             contact_name: "Thịnh",
//             contact_mobile: "0971933424",
//             default: false,
//             ward: {
//                 id: 3,
//                 name: "Bạch Đằng",
//                 district: {
//                     id: 3,
//                     name: "Hai Bà Trưng",
//                     city: {
//                         id: 1,
//                         name: "Hà Nội"
//                     }
//                 }
//             }
//         },
//         // ... (other objects)
//     ]
// }
