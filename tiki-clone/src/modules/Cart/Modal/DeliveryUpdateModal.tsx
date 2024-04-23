import { useEffect, useState } from "react";

import productApi from "../../../services/buyer.services";



export default function DeliveryUpdateModal({ isOpen, onClose }){

  const [activeDeliveryId, setActiveDeliveryId] = useState<number>(2);
 
  const handleSelection = (id: number)=>{
    setActiveDeliveryId(id)
    console.log(id)
  }
  if (!isOpen) return null;
    

     return (
      <div className="fixed z-10 inset-0 overflow-y-auto ">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          {/* Background overlay */}
          <div
            className="fixed inset-0 transition-opacity"
            onClick={onClose}
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
                        {sampleData.map(item=>{
                            return(
                                <li>
                                <input type="checkbox" 
                                    id={item.id}
                                    key={item.id}
                                   
                                    checked={activeDeliveryId===item.id}
                                    className="hidden peer" 
                                    onChange={()=>handleSelection(item.id)}
                                />
                                <label for={item.id}
                                    className="inline-flex items-center justify-between w-full p-5 text-gray-400 bg-white border-2 border-gray-200 rounded-lg cursor-pointer  peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-black peer-checked:text-gray-200 hover:bg-gray-50 "
                                >                           
                                    <div className="block w-full">
                                        <div className="flex gap-3 justify-between">
                                            <span className="text-green-400 p-1 bg-green-100 rounded-sm" >{item.type}</span>
                                            <span className="w-full text-lg font-semibold">{item.contactName}</span>
                                            <span className="w-full text-lg font-semibold text-blue-500">{item.contactPhone}</span>
                                        </div>
                                        
                                        <div className="w-full text-md">{item.location}</div>
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
                onClick={()=>onClose(activeDeliveryId)}
              >
                Xác nhận
              </button>
              <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={()=>onClose(activeDeliveryId)}
                >
                  Huỷ
                </button>
            </div>
          </div>
        </div>
      </div>
    );
}
const sampleData = [
    {
        id: 1,
        type: "Nhà",
        contactName: "Tien",
        contactPhone: "9123",
        location : "dia chi 1 dia chi 1dia chi 1dia chi 1dia chi 1dia chi 1dia chi 1dia chi 1dia chi 1",
    },
    {
        id: 2,
        type: "Nhà",
        contactName: "Tien1218",
        contactPhone: "9123",
        location : "dia chi 1",
    },
    {
        id: 3,
        type: "Nhà",
        contactName: "Tien3333",
        contactPhone: "9123",
        location : "dia chi 1",
    },
    
]