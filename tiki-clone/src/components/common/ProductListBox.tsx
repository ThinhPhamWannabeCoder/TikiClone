import {  ReactNode } from "react";
import ContentBox from "./ContentBox";
interface classProps{
    class?: string
    children: ReactNode
}
export default function ProductListBox(props: classProps){
    return(
        <ContentBox class={`grid grid-cols-6 gap-1 ${props.class}`}>
            {props.children}
        </ContentBox>
    )
}