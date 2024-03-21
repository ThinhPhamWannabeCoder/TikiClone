import { PropsWithChildren } from "react";

export default function MainContent({children}: PropsWithChildren){
    return(
        <div className="w-5/6 bg-white rounded-xl flex-shrink-0  p-3">
            {children}

            <div className="h-screen">
                hi
            </div>
            <div className="h-screen">
                hi
            </div>
            <div className="h-screen">
                hi
            </div>
            
        </div>
    )
}