import { PropsWithChildren } from "react";

export default function AuthBox({children}: PropsWithChildren){
    return(
        <div>
            This is Auth Box
            {children}
        </div>
    )
}