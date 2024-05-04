import { useEffect, useState } from "react"
import productApi from "../../../../services/buyer.services"
import ContentBox from "../../../Common/ContentBox"
import PrimaryTitle from "../../../Title/PrimaryTitle"
import { PostAddress } from "../../../../types/user.types"
import { LockClosedIcon, XCircleIcon } from "@heroicons/react/24/outline"

interface propsType{
    // isOpen: boolean,
    onClose: () => void,
    data: PostAddress,
    addressId: number
  }


export default function UserAddressUpdate(props: propsType){

    const [cityList, setCityList] = useState<{name: string, id: number}[]>([])
    const [districtList, setDistrictList] = useState<{name: string, id: number}[]>([])
    const [wardList, setWardList] = useState<{name: string, id: number}[]>([])

    const [name, setName] = useState<string>(props.data.name);
    const [mobile, setMobile] = useState<string>(props.data.mobile);
    const [address, setAddress] = useState<string>(props.data.address);
    const [city, setCity] = useState<number>(props.data.cityId);
    const [district, setDistrict] = useState<number>(props.data.districtId);
    const [ward, setWard] = useState<number>(props.data.wardId);
    const [type, setType] = useState<'Nhà' | 'Công ty'>(props.data.type)
    const [option , setOption] = useState<boolean>(props.data.option)

    useEffect(()=>{
        productApi.getCities({})
            .then(res =>{
                setCityList(res.data.data)
                return productApi.getDistricts({})
            })
            .then(res =>{
                setDistrictList(res.data.data)
                return productApi.getWards({})
            })
            .then(res => {
                setWardList(res.data.data)
            })
            .catch()
    },[])
    const handleCitySelect = (e)=>{
        setCity(e.target.value)
        // console.log("Change district and ward")
    }
    const handleDistrictSelect = (e)=>{
        setDistrict(e.target.value)
        console.log("Change city and ward")
        
    }
    const handleWardSelect = (e)=>{
        setWard(e.target.value)
        console.log("Change district and city")
    }
    // const han
    const handleAddress = (e) =>{
        setAddress(e.target.value)
    }
    const handleName = (e) =>{
        setName(e.target.value)
    }
    const handleMobile = (e)=>{
        setMobile(e.target.value)
    }
    const handleSubmitChange = ()=>{
        const changePayload:PostAddress = {
            userId: props.data.userId,
            wardId: ward,
            districtId: district,
            cityId: city,
            address: address,
            name: name,
            mobile: mobile,
            type: type,
            option: option ? "true"  :"false"
        }
        console.log(changePayload)
        productApi.updateAddress({body: changePayload, addressId: props.addressId})
            .then(res => {
                // console.log(res.data)
                alert("Thành công")
                window.location.reload()
            })
            .catch(err =>{
                console.log(err.message)
                alert("Fail")
            })
    }
    return (
  
        <>
        <ContentBox class="p-3 flex flex-col gap-4 ">
            <div className="flex justify-between items-center">
                <PrimaryTitle name="Cập nhật thông tin dịa chỉ" />
                <XCircleIcon 
                    className="w-6 h-6 text-red-500 font-bold cursor-pointer"
                    onClick={()=> {props.onClose()}}
                />

            </div>
            <div className="flex flex-col gap-2">
                <div className="flex gap-3">
                    <label htmlFor="name" className="w-28">Họ Tên</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name}
                        placeholder="Nhập tên người liên hệ"
                        className="hover:border-slate-400 transition duration-200 focus:border-black shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={handleName}
                    />
                    
                </div>
                <div className="flex gap-3">
                    
                    <label htmlFor="mobile" className="w-28">Số điện thoại</label>
                    <input 
                        type="text" 
                        id="mobile" 
                        value={mobile}
                        placeholder="Nhập số điện thoại liên hệ"
                        className="hover:border-slate-400 transition duration-200 focus:border-black shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(handleMobile)}
                    />
                </div>
                <div className="flex gap-3">

                    
                    <label className="w-28">Thành phố</label>
                    <select 
                        name="city" 
                        value={city} 
                        onChange={handleCitySelect} 
                        className="py-3 px-5 mr-4 cursor-pointer rounded-md bg-gradient-to-b from-gray-200 to-gray-400 shadow-md"
                    >
                        <option value="">Lựa chọn thành phố</option>
                            {cityList.map( city => (
                                <option key={city.id} value={city.id}>{city.name}</option>
                            ))}
                    </select>
                </div>
                <div className="flex gap-3">

                    <label className="w-28">Quận</label>
                    <select 
                        name="district" 
                        value={district} 
                        onChange={handleDistrictSelect} 
                        className="py-3 px-5 mr-4 cursor-pointer rounded-md bg-gradient-to-b from-gray-200 to-gray-400 shadow-md"
                    >
                        <option value="">Lựa chọn quận</option>
                            {districtList.map( district => (
                                <option key={district.id} value={district.id}>{district.name}</option>
                            ))}
                    </select>
                </div>
                <div className="flex gap-3">

                    <label className="w-28">Phường</label>
                    <select 
                        name="ward" 
                        onChange={handleWardSelect} 
                        value={ward}
                        className="py-3 px-5 mr-4 cursor-pointer rounded-md bg-gradient-to-b from-gray-200 to-gray-400 shadow-md"
                    >
                        <option value="">Lựa chọn phường</option>
                            {wardList.map( ward => (
                                <option key={ward.id} value={ward.id}>{ward.name}</option>
                            ))}
                    </select>
                </div>
                <div className="flex gap-3">
                
                    <label className="w-28">Địa chỉ</label>
                    <input 
                        type="text" 
                        className="hover:border-slate-400 transition duration-200 focus:border-black shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Nhập địa chỉ nhận hàng"
                        onChange={handleAddress}
                        value={address}
                    />
                </div>
                <div className="flex gap-3">

                    
                    <label className="w-28">Loại địa chỉ</label>
                    <div className="flex gap-3 items-center radio-container">
                        <input
                            type="radio"
                            name="type"
                            value="home"
                            checked={type == 'Nhà'}
                            // onChange={handleGenderChange}
                            onChange={()=>{setType("Nhà")}}

                            className="w-5 h-5 rounded-full cursor-pointer border border-gray-300 focus:ring-1 focus:ring-primary-500 focus:outline-none"

                        />
                        <label>Nhà</label><br />
                        <input
                            type="radio"
                            name="type"
                            value="company"
                            checked={type == 'Công ty'}

                            onChange={()=>{setType("Công ty")}}
                            
                            className="w-5 h-5 rounded-full cursor-pointer border border-gray-300 focus:ring-1 focus:ring-primary-500 focus:outline-none"
                        />
                        <label>Công ty</label><br />
                        
                    </div>
                </div>
                <div className="flex gap-3">

                    <label className="mr-5">Địa chỉ mặc định</label>
                    <div className="flex gap-3 items-center radio-container">
                        <input
                            type="radio"
                            name="default"
                            value="yes"
                            checked={option == true}
                            onChange={()=>{setOption(!option)}}
                            className="w-5 h-5 rounded-full cursor-pointer border border-gray-300 focus:ring-1 focus:ring-primary-500 focus:outline-none"

                        />
                        <label>Mặc định</label><br />
                        <input
                            type="radio"
                            name="default"
                            value="false"
                            // checked={props.gender === 'female'}
                            checked={option == false}
                            onChange={()=>{setOption(!option)}}

                            // onChange={handleGenderChange}
                            
                            className="w-5 h-5 rounded-full cursor-pointer border border-gray-300 focus:ring-1 focus:ring-primary-500 focus:outline-none"
                        />
                        <label>Không</label><br />
                        
                    </div>
                </div>
            </div>
            <div className="flex justify-end items-center">
                <button type="button" onClick={handleSubmitChange} className="px-5 py-2 bg-blue-500 rounded-lg text-white font-semibold shadow-lg active:bg-blue-600 ">Lưu thay đổi</button>
                                        {/* {data && (data.status === 200 ? 
                                        ( <p className="text-blue-500 font-semibold">Updated sucessfully</p>) :
                                        ( <p className="text-red-500">Unable to update</p>))
                                        } */}
            </div>
        </ContentBox>
        </>
    )
}
