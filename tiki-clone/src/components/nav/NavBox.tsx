import { PropsWithChildren} from "react";

export default function NavBox({children}: PropsWithChildren){
    return(
        <div className=" w-1/6 bg-white rounded-xl  p-3 flex-shrink-0">
            {children}
        </div>
    )
}