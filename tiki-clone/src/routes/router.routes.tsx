import { RouterProvider } from "react-router-dom";
import { useAuthContext } from "../modules/Auth/AuthProvider";
import protectedRoutes from "./protected.routes";
import publicRoutes from "./public.routes";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

// const router = () =>{
//     // const context = useAuthContext();
//     return publicRoutes;
// }
// export default router
export default function AuthProvider(){
    const user = useSelector((state: RootState)=> state.auth.user)

    if(user===undefined){
        return (<RouterProvider router={publicRoutes}/>)

    }
    return (<RouterProvider router={protectedRoutes}/>)

}