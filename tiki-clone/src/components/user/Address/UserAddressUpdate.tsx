import { useEffect, useState } from "react"
import productApi from "../../../services/buyer.services"

interface propsType{
//   TYPE FOR DATA INFO -> QUICKER TO CHANGE
    // setAddress: (data: UserAddress) => void
    isOpen: boolean,
    onClose: () => void
  }

export default function UserAddressUpdate(prop :propsType){

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

    const handleSelectCityChange = (event) => {
        const selectedId = parseInt(event.target.value);
        // FILTER LAI THONG TIN CUA SELECT
        console.log(selectedId)
    };
    // const handleSelectDistrictChange = (event) => {
    //     const selectedId = parseInt(event.target.value);
    //     console.log(selectedId)
    // };
    // const handleSelectWardChange = (event) => {
    //     const selectedId = parseInt(event.target.value);
    //     console.log(selectedId)
    // };
    if (!prop.isOpen) return null;
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto ">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          {/* Background overlay */}
          <div
            className="fixed inset-0 transition-opacity"
            onClick={prop.onClose}
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          {/* Modal content */}
          <div
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              {/* Modal header */}
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0  sm:text-left">
                  <h3
                    className="text-xl mb-14 leading-6 font-medium text-gray-900 "
                    id="modal-headline"
                  >
                    Cập nhật địa chỉ mới
                  </h3>
                  <div className="mt-2 ">

                  <div >
                  <div>
                        <label htmlFor="">
                            Tên người liên hệ
                            <input type="text" placeholder="Vui lòng nhập địa chỉ"/>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                            Số điện thoại
                            <input type="text" placeholder="Vui lòng nhập địa chỉ"/>
                        </label>
                    </div>
                    <div>
                        <h1>Thành phố</h1>
                        <select
                            onChange={handleSelectCityChange}
                            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value=""> Vui lòng lựa chọn thành phố</option>
                            {cityList.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <h1>Quận</h1>
                        <select
                            // onChange={handleSelectCityChange}
                            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value=""> Vui lòng lựa chọn quận</option>
                            {districtList.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <h1>Phường</h1>
                        <select
                            // onChange={handleSelectCityChange}
                            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value=""> Vui lòng lựa chọn phường</option>
                            {wardList.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">
                            Địa chỉ
                            <input type="text" placeholder="Vui lòng nhập địa chỉ"/>
                        </label>
                    </div>
                    
                    
                    
                    
                    

                    <div>
                        <h1 className="font-bold">Đặt làm địa chỉ mặc định</h1>
                        <div className="flex gap-3">
                            <div>
                                <input
                                type="radio"
                                id="macdinh"
                                name="diachimacdinh"
                                value="macdinh"
                                className="mr-2"
                                />
                                <label htmlFor="macdinh">Mặc định</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="thuong"
                                    name="diachimacdinh"
                                    value="thuong"
                                    className="mr-2"
                                />
                                <label htmlFor="thuong">Thường</label>
                            </div>
                        
                        </div>
                        
                    </div>
                    <div>
                        <h1 className="font-bold">Loại địa chỉ</h1>
                        <div className="flex gap-3 ">
                            <div>
                                <input
                                type="radio"
                                id="nha"
                                name="diachimacdinh"
                                value="nha"
                                className="mr-2"
                                />
                                <label htmlFor="nha">Nhà</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="congty"
                                    name="diachimacdinh"
                                    value="congty"
                                    className="mr-2"
                                />
                                <label htmlFor="congty">Công ty</label>
                            </div>
                        
                        </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Modal footer */}
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                // onClick={()=>prop.setAddress(currentAddress as UserAddress)}
                onClick={()=>prop.onClose()}

              >
                Xác nhận
              </button>
              <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={()=>prop.onClose()}
                >
                  Huỷ
                </button>
            </div>
          </div>
        </div>
      </div>
    )
}
// 
// GET CITY
// GET DISTRICT
// GET WARD
