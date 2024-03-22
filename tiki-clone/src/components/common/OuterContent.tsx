import { ReactNode } from "react";

interface myProps{
    class?: string,
    children: ReactNode
}
export default function OuterContainer(props:myProps){
    // Ti qua nha Trung chi chinh sua roi cho vao
    return(
        <div className={`w-full ${props.class}`}>
            {props.children}
        </div>
    )
}