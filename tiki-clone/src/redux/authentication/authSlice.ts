import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface User{
    name: string,
    role: string
}
interface authState{
    user: User,
    token: string
}
const initialState: authState = {
    user: {
        name: '',
        role: '',
    },
    token: ''
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action:PayloadAction<authState>)=>{
            state.user = action.payload.user;
            state.token = action.payload.token
        },
        logout: (state)=>{
            state.user =  {
                    name: '',
                    role: '',
                },
            state.token= ''
            
        },
        test: (state)=>{
            console.log("test redux")
            console.log(state.user)
        }
    }
})
export const {login, logout, test} = authSlice.actions;
export default authSlice.reducer;