import { gender } from "./enum/user.enum";


export  interface User { 
    user_id: number,
    name: string;
    email: string;
    information_id: number;
    nickname: string | null;
    birthdate: string | null;
    gender: string | null;
    phone: string ;
    role: string ;
    avatarUrl: string | null;
    avatarId: number | null;
}
export interface UserTrue{
    id: number,
    infomationId: number,
    avatar: {
        id: number,
        url: string,
    } | undefined,
    name: string,
    nickname: string | undefined,
    dob: string | undefined,
    gender: string | undefined,
    phone: string,
    email: string,
    jwtToken: string,
}
export interface AuthState{
    user: UserTrue|undefined,
}
export interface UserNotification{
    id: number,
    title: string,
    message: string,
    date: string,
}
export interface CartType{
    id: number,
    store:{
        id: number,
        name: string,
    },
    product:{
        id: number,
        name: string,
        price: number,
        primaryImage: string,
    },
    quantity: number,
}