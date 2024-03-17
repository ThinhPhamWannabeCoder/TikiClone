import { PropsWithChildren } from "react";

export default function AuthBox({children}: PropsWithChildren){
    return(
        <div className="w-full max-w-xs bg-white  shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {children}
        </div>
    )
}