import axios from "axios"

const handleExiosError = (error: unknown) =>{
    if(axios.isAxiosError(error)){
        console.log('Something gone wrong')
    }
    else{
        console.log('Please contact to admin')
    }
}
export default handleExiosError