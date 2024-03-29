import {  ReactNode } from "react";
interface classProps{
    class?: string
    children: ReactNode
}
export default function ProductListBox(props: classProps){
    return(
        <div className={`grid grid-cols-6 gap-1 ${props.class}`}>
            {props.children}
        </div>
    )
}