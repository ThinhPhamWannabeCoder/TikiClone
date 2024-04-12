import { useDispatch, useSelector } from "react-redux"
// import productApi from "../../services/buyer.services"
import { login, logout, test } from "../../redux/authentication/authSlice";
import { RootState } from "../../redux/store";




export default function Test(){
    const dispatch = useDispatch();
    const user =useSelector((state:RootState)=> state.auth.user);
    const token = useSelector((state: RootState) => state.auth.token);
    console.log(user)
    const handleLogin = () => {
        dispatch(
          login({
            user: { name: 'John Doe', role: 'admin' },
            token: 'yourAuthTokenHere',
          })
        );
    }
    const handleLogout = () => {
        dispatch(logout());
      };
    
      const handleTest = () => {
        dispatch(test());
      };
    return(
        // <button onClick={()=> {
        //     productApi.getCategoryBestProductBySubCategory({subcategory_id:9,limit:50,current_page:1})
        //         .then(x => console.log(x))
        //         .catch(err => console.log(err.message))
        // }} className=" p-5 bg-green-500">
        //     An tai day de lam viec
        // </button>
        <>
            <div>
                <h1>User Info</h1>
                <p>Name: {user.name}</p>
                <p>Role: {user.role}</p>
                <p>Token: {token}</p>
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleLogout}>Logout</button>
                <button onClick={handleTest}>Test</button>
            </div>
        </>
    )
}