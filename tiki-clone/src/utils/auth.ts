import axios from "axios";
import { redirect } from "react-router-dom";
import { loginUrl } from "../config";
import Cookies from 'js-cookie';

interface LoginResponse {
  status?: number;
  error?: string; // Make error field optional
}

export const login = async ({ request }: { request: any }): Promise<LoginResponse> => {

  try {
    const data = await request.formData();
    const submission = {
      identifier: data.get('email'),
      password: data.get('password')
    };

    const response = await axios.post(loginUrl, submission);
    
    // Set cookie
    Cookies.set('jwt', response.data.jwt);

    // Redirect the user
    // return(redirect('/user'))
    return { status: 200 };
  } catch (error: any) {
    if (error.response && error.response.status === 400) {
      // Handle 400 Bad Request errors
      return { status: 400, error: 'Invalid credentials' };
    } else {
      // Handle other errors
      console.error(error);
      return { status: 500, error: 'Internal server error' };
    }
  }
};
