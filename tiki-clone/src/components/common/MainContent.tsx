import { ReactNode } from "react";

interface myProps{
    class?: string,
    children: ReactNode
}
export default function MainContent(props: myProps){
    return(
        <div className={`w-5/6 flex gap - 3 ${props.class}`}>
            {props.children}
        </div>
    )
}