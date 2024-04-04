import {  ReactNode } from "react";
interface classProps{
    class?: string
    children: ReactNode
}

export default function OrderProductFinalSection(prop: classProps){
    return(
        <div className={`col-span-2 ${prop.class}` }>
            {prop.children}
        </div>
        
    )
}