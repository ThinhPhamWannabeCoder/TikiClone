import { Outlet } from "react-router-dom";
import CategoryNav from "../Product/Category/CategoryNav";

export default function CategoryLayout(){
    return(
        <>
            <CategoryNav/>
            <Outlet/>
        </>
    )
}