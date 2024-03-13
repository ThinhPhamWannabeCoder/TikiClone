import { gender } from "./enum/user.enum";


export  interface User { 
    user_id: number,
    name: string;
    email: string;
    information_id: number;
    nickname: string;
    birthdate: string;
    gender: string;
    phone: string;
    role: string;
}
