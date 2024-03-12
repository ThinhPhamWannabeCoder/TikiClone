// login

import axiosPublic from "../config/axios.public";

// Register
interface LoginProps{
    identifier: string;
    password: string
  }

const authApi ={
    login: async (data:LoginProps) => await axiosPublic.post('/auth/local', data),
}
export default authApi