import { useEffect, useState } from "react";

import productApi from "../../../services/buyer.services";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";

interface UserAddress{
  id: number,
  type: string,
  address: string,
  contact_name: string,
  contact_mobile: string,
  default: string
}
interface propsType{
  
  setAddress: (data: UserAddress) => void
  isOpen: boolean,
  onClose: () => void
}

export default function DeliveryUpdateModal(prop :propsType){
  const [addressess, setAddresses] = useState<UserAddress[]> ()
  const [activeDeliveryId, setActiveDeliveryId] = useState<number>(2);
  const user = useSelector((state: RootState)=>state.auth.user)
  const [currentAddress, setCurrentAddress] = useState<UserAddress> ()
  useEffect(()=>{
    productApi.getAddress( {userId: user?.id as number, default: false})
        .then(res=>{

            setAddresses(res.data.data)
            // console.log(res.data)
            res.data.forEach(item => {
              if(item.default == true){
                setActiveDeliveryId(item.id)
              }
            })
        })
        .catch(err =>{
            console.log(err.message)
        })
},[])
  const handleSelection = (id: number)=>{
    // console.log("hi")
    setActiveDeliveryId(id)
  }

  useEffect(()=>{
    if(addressess != undefined){
      addressess.forEach(item=>{
        if(item.id === activeDeliveryId){
          setCurrentAddress(item)
        }
      })
    }
  },[activeDeliveryId])
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
                    className="text-xl mb-14 leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    Cập nhật địa chỉ vận chuyển mà bạn mong muốn
                  </h3>
                  <div className="mt-2">

                    <ul className="flex flex-col gap-2">
                        {addressess?.map(item=>{
                            return(
                                <li key={item.id} >
                                <input type="checkbox" 
                                    checked={activeDeliveryId===item.id}
                                    id={item.id.toString()}
                                    className="hidden peer" 
                                    // onChange={()=>handleSelection(item.id)}
                                    onChange={() => handleSelection(item.id)}
                                    // onChange={handleTest}

                                />
                                <label htmlFor={item.id.toString()}
                                    className="inline-flex items-center justify-between w-full p-5 opacity-40 bg-white border-2  border-gray-200 rounded-lg cursor-pointer  peer-checked:border-blue-600 hover:text-gray-600 peer-checked:opacity-100 peer-checked:text-gray-200 hover:bg-gray-100 "
                                >                           
                                    <div className="block w-full">
                                        <div className="flex gap-3 justify-between">
                                            <span className="text-green-400 p-1 bg-green-100 rounded-sm " >{item.type}</span>
                                            <span className="w-full text-lg font-semibold text-black">{item.contact_name}</span>
                                            <span className="w-full text-lg font-semibold text-blue-500 ">{item.contact_mobile}</span>
                                        </div>
                                        
                                        <div className="w-full text-md text-black">{item.address}</div>
                                    </div>
                                </label>
                            </li>
                            )
                        })}
                       
                    </ul>
                    
                  </div>
                </div>
              </div>
            </div>
            {/* Modal footer */}
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={()=>prop.setAddress(currentAddress as UserAddress)}
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
    );
}
