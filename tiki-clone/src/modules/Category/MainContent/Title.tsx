import ContentBox from "../../../components/Common/ContentBox";

import {  ReactNode } from "react";
interface classProps{
    class?: string
    children: ReactNode
}
export default function Title(prop: classProps){
    return (
        <ContentBox class={`${prop.class}`}>
            {prop.children}
        </ContentBox>
    )
}