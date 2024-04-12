import { RouterProvider } from "react-router-dom";
import { useAuthContext } from "../modules/Auth/AuthProvider";
import protectedRoutes from "./protected.routes";
import publicRoutes from "./public.routes";

// const router = () =>{
//     // const context = useAuthContext();
//     return publicRoutes;
// }
// export default router
export default function RProvider(){
    const context = useAuthContext();
    // console.log(context?.test)
    
    // Check  Buyer -> Duoc vao protected Route
    // Su dung duoc roi xoa di
    if(context?.data===undefined){
        return (<RouterProvider router={publicRoutes}/>)

    }
    return (<RouterProvider router={protectedRoutes}/>)

}