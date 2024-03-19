import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import { login, logout } from "../../redux/authentication/authSlice"

export default function UserTest(){
    const data = useSelector((state: RootState)=> state.auth.user)
    const dispatch = useDispatch<AppDispatch>()
    // console.log(data)
    return(
        <>
            This is Auth
            <div>
                <h1>Name</h1>
                <p>{data.name}</p>
            </div>
            <div>
                <h1>Role</h1>
                <p>{data.role}</p>
            </div>
            <div>
                <button onClick={()=>dispatch(login(
                    {
                        user:{
                            name:'thinh dep trai',
                            role: 'ngu'
                        },
                        token: ''
                    })
                )}>Login</button>
                <button onClick={()=>dispatch(logout())}>Logout</button>
            </div>
        </>
    )
}