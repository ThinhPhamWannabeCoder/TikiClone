import { Outlet } from "react-router-dom";
import UserNav from "../user/UserNav";
import BreadCrumbs from "../common/BreadCrumbs";

export default function UserLayout(){
    return(
        <div className="grid grid-cols-4 gap-x-3 w-2/3 h-screen">
            {/* <div id="user_main"> */}
                <UserNav/>
                <div className="col-span-3">
                    <Outlet/>
                </div>
            {/* </div> */}
            
        </div>
    )
}