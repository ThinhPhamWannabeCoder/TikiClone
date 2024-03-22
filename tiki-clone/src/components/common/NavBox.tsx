import { ReactNode } from "react";
import ContentBox from "./ContentBox";

interface myProps{
    class?: string,
    children: ReactNode
}
export default function NavBox(props: myProps){
    return(
        <ContentBox class={`w-1/6 flex flex-col h-full flex-shrink-0 ${props.class}`}>
            {props.children}
        </ContentBox>
    )
}