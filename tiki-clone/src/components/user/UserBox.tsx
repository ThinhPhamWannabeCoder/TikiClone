import {ReactNode } from "react";

interface myProps{
    class?: string,
    children: ReactNode
}
export default function UserBox(prop: myProps){
    return(
        <div  className={`p-5 bg-white w-full rounded-lg flex  ${prop.class}`}>
            {prop.children}
        </div>

    )
}