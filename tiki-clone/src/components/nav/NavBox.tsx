import {ReactNode } from "react";

interface myProps{
    class?: string,
    children: ReactNode
}
export default function NavBox(prop: myProps){
    return(
        <div className={`w-1/6 bg-white rounded-xl  p-3 flex-shrink-0 h-full ${prop.class}`} >
            {prop.children}
        </div>
    )
}