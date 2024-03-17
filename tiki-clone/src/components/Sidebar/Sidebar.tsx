import { PropsWithChildren } from "react";

export default function Sidebar({children}: PropsWithChildren){
    return(
        <div>
            This is the sidebar
            {children}
        </div>
    )
}