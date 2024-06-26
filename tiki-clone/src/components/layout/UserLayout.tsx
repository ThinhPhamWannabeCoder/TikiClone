import { Outlet } from "react-router-dom";
import UserNav from "../User/UserNav";

export default function UserLayout(){
    return(
        <div className="grid grid-cols-4 gap-x-3 w-5/6 min-h-screen">
                <UserNav/>
                <div className="col-span-3">
                    <Outlet/>
                </div>
        </div>
    )
}