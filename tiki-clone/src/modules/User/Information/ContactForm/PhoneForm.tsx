import { PhoneArrowDownLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

interface myProps{
    phone: string,
    // setPhone: ()=>void,
}

export default function PhoneForm( props: myProps){
    return(
        <div className="flex py-8 justify-between ">
                <div className="flex">
                    <PhoneArrowDownLeftIcon className="w-6 mr-4"/>
                    <div className="flex-shrink-0 ">
                        <p>Số điện thoại</p>
                        {props.phone ? (<p>{props.phone}</p>) : (<p>Please enter phone number</p>)}
                    </div>
                </div>
                
                <Link to="/" className="px-3 py-2 border-blue-300 border-solid border-2 rounded-lg  flex-shrink-0 "> Cập nhật</Link>
        </div>
    )
}