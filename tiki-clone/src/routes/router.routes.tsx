import { RouterProvider } from "react-router-dom";
import { useAuthContext } from "../components/auth/AuthProvider";
import protectedRoutes from "./protected.routes";
import publicRoutes from "./public.routes";

// const router = () =>{
//     // const context = useAuthContext();
//     return publicRoutes;
// }
// export default router
export default function Provider(){
    const context = useAuthContext();
    // console.log(context?.test)
    
    // Check  Buyer -> Duoc vao protected Route

    // Con khong thi se phai tra ve Public only

    //  DAng nhap xong thi cap nhat lai

    // 
    return (<RouterProvider router={publicRoutes}/>)

}