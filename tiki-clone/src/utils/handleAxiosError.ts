import axios from "axios"

const handleExiosError = (error: unknown) =>{
    if(axios.isAxiosError(error)){
        console.log('Axios error:', error.message);
        console.log('Request config:', error.config);
        if (error.response) {
            console.log('Response status:', error.response.status);
            console.log('Response data:', error.response.data);
          }
    }
    else{
        console.log('Please contact to admin')
    }
}
export default handleExiosError