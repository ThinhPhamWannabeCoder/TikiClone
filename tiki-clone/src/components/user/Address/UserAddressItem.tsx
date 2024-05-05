import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { GetAddressList } from "../../../types/user.types";
import ContentBox from "../../Common/ContentBox";
import { useState } from "react";
import productApi from "../../../services/buyer.services";
import UserAddressUpdate from "./Update";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
// import Dropdown from 'react-bootstrap/Dropdown';
// import { Dropdown } from "react-bootstrap";
// import { Button, Flex } from 'antd';
interface propType{
    data: GetAddressList,
    // setAddressList: (data:) => void
}
export default function UserAddressItem(prop: propType){
    const user = useSelector((state:RootState) => state.auth.user)
    const [isOpen, setIsOpen] = useState(false);
    const [isUpdateOpen, setIsUpdateOpen] = useState(false)
    const onClose = () =>{
        setIsUpdateOpen(!isUpdateOpen)
    }
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleDelete = (id: number) => {
    if(confirm("Ban chac chac muon xoa chua")){
        
        // alert("ban can than day")
        // confirm("Da xoa thanh cong")
        // window.location.reload();
        productApi.deleteAddress(id)
            .then(res => {
                if(res.data.status == 200){
                    confirm("Da xoa thanh cong")
                    window.location.reload();
                }
                else{
                    confirm("Da xoa that bai")
                }
            })
            .catch(err => {
                confirm("Da xoa that bai")

                console.log(err.message)
            })
            .finally(()=>{
            setIsOpen(!isOpen);

            })

    }
    else{
        setIsOpen(!isOpen);
        
    }

  }
  const handleUpdate = () => {
    // console.log(id)
    setIsUpdateOpen(!isUpdateOpen)
    if(isUpdateOpen){
        setIsOpen(!isOpen);

    }
    
  }
    if(isUpdateOpen){
        return(
            <UserAddressUpdate 
                data={{
                    // id: prop.data.id,
                    userId: user?.id as number,
                    wardId: prop.data.ward.id,
                    districtId: prop.data.ward.district.id,
                    cityId: prop.data.ward.district.city.id,
                    address: prop.data.address,
                    name: prop.data.contact_name,
                    mobile: prop.data.contact_mobile,
                    type: prop.data.type,
                    option: prop.data.default
                }}
                onClose={handleUpdate}
                addressId={prop.data.id}
            />
        )
    }
    else{
        return(
        
            <ContentBox class="p-5">
                {/* <UserAddressUpdate isOpen={isUpdateOpen} onClose={onClose}/> */}

                <div className="flex flex-col gap-3">
                    <div  className="flex justify-between">
                        <div className="flex gap-3">
                            {/* <span> PHẠM TIẾN THỊNH</span> */}
                            <span> {prop.data.contact_name.toUpperCase()}</span>
                            {prop.data.default == true 
                                ? (<span className="text-green-600 flex items-center gap-2"> <CheckCircleIcon className="w-5 h-5"/> Địa chỉ mặc định</span>) 
                                : ''
                            }
                            
                        </div>
                        <div>
                            {/* <span className="text-blue-500">Chỉnh sửa</span> */}
                            <div className="relative inline-block text-left">
                            <button
                                // type="button"
                                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-blue-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 "
                                id="menu-button"
                                aria-expanded={isOpen}
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                Chỉnh sửa
                                
                            </button>
    
                            {isOpen && (
                                <div
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="menu-button"
                                // tabIndex="-1"
                                >
                                <div className="py-1" role="none">
                                    <span  className="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100" role="menuitem"  onClick={()=>{handleUpdate()}} >
                                    Sửa
                                    </span>
                                    <span className="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100" role="menuitem" onClick={()=>{handleDelete(prop.data.id)}}>
                                    Xoá
                                    </span>
                                </div>
    
                       
                                </div>
                            )}
                            </div>
                            
                            
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className="text-slate-500">Địa chỉ: </span>
                            <span>Ngõ 210 bạch Đằng, Phường Chương Dương Độ, Quận Hoàn Kiếm, Hà Nội, Phường Chương Dương Độ, Quận Hoàn Kiếm, Hà Nội</span>
                            <span>{`${prop.data.address}, ${prop.data.ward.name}, ${prop.data.ward.district.name}, ${prop.data.ward.district.city.name}`}</span>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <span className="text-slate-500">Điện thoại: </span>
                                <span>{prop.data.contact_mobile}</span>
                            </div>
                            <div>
                                <span className="text-green-400 p-1 bg-green-100 rounded-sm" >{prop.data.type}</span>
                            </div>
                        </div>
                        
                
                    </div>
                </div>
            </ContentBox>
                
        )
    }
    
}