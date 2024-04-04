import {  ReactNode } from "react";
interface classProps{
    class?: string
    children: ReactNode
}

export default function OrderProductFirstSection(prop: classProps){
    return(
        <div className={`col-span-3 ${prop.class}` }>
            {prop.children}
        </div>
        
    )
}