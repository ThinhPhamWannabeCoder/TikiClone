
import LoginForm from "../../modules/Auth/Login/LoginForm";

import AuthBox from "../../components/Auth/AuthBox";
import Login from "../../modules/Auth/Login";


export default function LoginPage(){
    // const context = useAuthContext();
    // console.log(context?.test);
    return(
        <AuthBox>
            <Login/>  
        </AuthBox>
    )
}

