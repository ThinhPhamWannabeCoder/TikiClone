import { ReactNode } from "react";

interface myProps{
    class?: string,
    children: ReactNode
}
export default function OuterContene(props:myProps){
    // Ti qua nha Trung chi chinh sua roi cho vao
    return(
        <div className={`w-full mx-5${props.class}`}>
            {props.children}
        </div>
    )
}