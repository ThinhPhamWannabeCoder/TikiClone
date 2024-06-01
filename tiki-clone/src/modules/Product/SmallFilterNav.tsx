import {  ReactNode } from "react";
interface classProps{
    class?: string
    children: ReactNode
}
export default function SmallFilterNav(props: classProps){
    return(
        <div className={props.class + " cursor-pointer"}>
              {props.children}
        </div>
    )
}