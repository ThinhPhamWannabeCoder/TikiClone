import axios  from "axios";
import { redirect } from "react-router-dom";
import { loginUrl } from "../config";
import Cookies from 'js-cookie';




export const login = async ({request}) =>{
    console.log(loginUrl);
    const data = await request.formData();
    const submission = {
        identifier: data.get('email'),
        password: data.get('password')
    }
    try {
      const response = await axios.post(loginUrl, submission);
      // Set cookie
      // return { data: response.data, status: 200, message: 'hi' };
      Cookies.set('jwt', response.data.jwt);
      return(redirect('/'))
  } catch (error) {
      // console.log(typeof error.request.status);
      if (error.request.status === 400) {
          return { data: null, status: 400, error: 'error' };
      }
      // console.log(error.message)
      return { data: null, status: 500, error: 'error' };
      
  }
    // // try{
    //    await axios
    //    .post('http://localhost:1337/api/auth/local', submission)
    //    .then(response => {
    //       console.log('User profile', response.data.user);
    //       console.log('User token', response.data.jwt);
    //     })
    //     .catch(error => {
    //       console.log('An error occurred:', error.response);
    //     });
     
    // // catch(err){
    // //     console.error('Error:', err);
    // // }
    // console.log(submission)
    // return redirect('/')
    // return 'hi'
}

export const register = async ({request}) =>{
    const data = await request.formData();
    // Hanlde tai day -> Roi lam tiep
    const submisstion = {

    }
    await axios
}