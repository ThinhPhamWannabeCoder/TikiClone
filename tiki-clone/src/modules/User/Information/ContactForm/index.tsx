import { Link } from "react-router-dom";
// import EmailForm from "./EmailForm";
// import PhoneForm from "./PhoneForm";
import { EnvelopeIcon, PhoneArrowDownLeftIcon } from "@heroicons/react/24/outline";
import PhoneForm from "./PhoneForm";
import EmailForm from "./EmailForm";


interface myProps{
    email: string,
    phone: string,
    // setEmail: ()=>void,
    // setPhone: ()=>void,
}

export default function ContactForm(props: myProps){
    return(

        <div className="w-2/5 ml-4 flex-shrink-0 text-sm border-b-2 h-full">
            <h1 className="flex-shrink-0 text-xl ">Số điện thoại và Email </h1>
            <PhoneForm phone={props.phone}/>
            <EmailForm email={props.email}/>
        </div>  
    )
}