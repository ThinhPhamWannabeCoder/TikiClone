import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

interface myProps{
    email: string,
    // setEmail: ()=>void,
}

export default function EmailForm(props: myProps){
    return(
        <div className="flex py-8 justify-between">
        <div className="flex">
            <EnvelopeIcon className="w-6 mr-4"/>
            <div className="flex-shrink-0 ">
                <p>Địa chỉ email</p>
                <p>{props.email}</p>
            </div>
        </div>

        <Link to="/" className="px-3 py-2 border-blue-300 border-solid border-2 rounded-lg flex-shrink-0"> Cập nhật</Link>
    </div>
    )
}