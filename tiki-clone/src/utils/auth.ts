import axios from "axios";
import { redirect } from "react-router-dom";
import { loginUrl } from "../config";
import Cookies from 'js-cookie';


interface LoginProps{
  identifier: string;
  password: string
}
// : Promise<LoginResponse>
export const sendLogin = async (data:LoginProps) => {
    const response = await axios.post(loginUrl, data);
    return response
};
