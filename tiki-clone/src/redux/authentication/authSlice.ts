import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import {  AuthState } from "../../types/user.types";




const initialState: AuthState = {
    user: undefined
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action:PayloadAction<AuthState>)=>{
            state.user = action.payload.user;
        },
        logout: (state)=>{
            state.user = undefined;
            
        },
        update: (state, action:PayloadAction<AuthState>) => {
            state.user = action.payload.user;
        }
    }
})
export const {login, logout, update} = authSlice.actions;
export default authSlice.reducer;

