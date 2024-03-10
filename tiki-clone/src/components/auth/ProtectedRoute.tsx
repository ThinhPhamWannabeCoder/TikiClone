import { PropsWithChildren, useEffect } from "react"
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({children}: ProtectedRouteProps){
    const data = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        console.log(data)
        if(data.user===null){
            // Ngan user from pressing back
            navigate('/login', {replace: true});
        }
    },[navigate, data.user])

    return children;
}