import { useEffect, useState } from "react"
import productApi from "../../../../services/buyer.services"
import ContentBox from "../../../Common/ContentBox"
import PrimaryTitle from "../../../Title/PrimaryTitle"
import { PostAddress } from "../../../../types/user.types"

interface propsType{
    isOpen: boolean,
    onClose: () => void,
    data: PostAddress,
  }


export default function UserAddressUpdate(){

    const [cityList, setCityList] = useState<{name: string, id: number}[]>([])
    const [districtList, setDistrictList] = useState<{name: string, id: number}[]>([])
    const [wardList, setWardList] = useState<{name: string, id: number}[]>([])
    useEffect(()=>{
        productApi.getCities()
            .then(res =>{
                // console.log(res.data)
                setCityList(res.data.data.map(item=>{
                    return{
                        id: item.id,
                        name: item.attributes.name
                    }
                }))
                return productApi.getDistricts()
            })
            .then(res =>{
                // console.log(res.data)
                setDistrictList(res.data.data.map(item=>{
                    return{
                        id: item.id,
                        name: item.attributes.name
                    }
                }))
                return productApi.getWards()
            })
            .then(res => {
                // console.log(res.data)
                setWardList(res.data.data.map(item=>{
                    return{
                        id: item.id,
                        name: item.attributes.name
                    }
                }))
            })
            .catch()
    },[])
    const handleCitySelect = (cityId: number)=>{
        console.log("Change district and ward")
    }
    const handleDistrictSelect = (districtId: number)=>{
        console.log("Change city and ward")
        
    }
    const handleWardSelect = (wardId: number)=>{
        console.log("Change district and city")
    }
    return (
  
        <>
        <ContentBox class="p-3 flex flex-col gap-4">
            <PrimaryTitle name="Cập nhật thông tin dịa chỉ" />
            <div className="flex flex-col gap-2">
                <div className="flex gap-3">
                    <label htmlFor="name" className="w-28">Họ Tên</label>
                    <input type="text" id="name" className="border-2 rounded-lg py-1  text-base"/>
                </div>
                <div className="flex gap-3">
                    
                    <label htmlFor="mobile" className="w-28">Số điện thoại</label>
                    <input type="text" id="mobile" className="border-2 rounded-lg py-1  text-base"/>
                </div>
                <div className="flex gap-3">

                    
                    <label htmlFor="city" className="w-28">Thành phố</label>
                    <input type="text" id="city" className="border-2 rounded-lg py-1  text-base"/>
                </div>
                <div className="flex gap-3">

                    <label htmlFor="district" className="w-28">Quận</label>
                    <input type="text" id="district" className="border-2 rounded-lg py-1  text-base"/>
                </div>
                <div className="flex gap-3">

                <label htmlFor="ward" className="w-28">Phường</label>
                    <input type="text" id="ward" className="border-2 rounded-lg py-1  text-base"/>
                </div>
                <div className="flex gap-3">
                
                    <label htmlFor="address" className="w-28">Địa chỉ</label>
                    <input type="text" id="address" className="border-2 rounded-lg py-1  text-base"/>
                </div>
                <div className="flex gap-3">

                    Loại địa chỉ
                </div>
                <div className="flex gap-3">

                    Cập nhật địa chỉ mặc định
                </div>
            </div>
        </ContentBox>
        </>
    )
}
