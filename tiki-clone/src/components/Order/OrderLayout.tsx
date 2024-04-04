import {  ReactNode } from "react";
import ContentBox from "../Common/ContentBox";
interface classProps{
    class?: string
    children: ReactNode
}

export default function OrderLayout(prop: classProps) {
    return(
        <ContentBox class={`grid grid-cols-9 ${prop.class}`}>
            {prop.children}
        </ContentBox>
    )
}