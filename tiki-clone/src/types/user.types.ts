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

export interface UserNotification{
    id: number,
    title: string,
    message: string,
    date: string,
}