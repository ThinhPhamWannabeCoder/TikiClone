// apiUtils.ts

import axios from 'axios';
import Cookies from 'js-cookie';
import { userUrl } from "../config";
import { userInfoUrl } from "../config";
import { User } from "../types/user";


// const getUserData = 
async function getUserData (): Promise<User>{
  try {
    const response1 = await axios.get(userUrl, {
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      },
    });

    if (response1.status !== 200) {
      throw new Error('Failed to fetch first user Data');
    }

    const { id, username, ...rest } = response1.data;

    const response2 = await axios.get(userInfoUrl + `/${id}`, {
      headers: {
        Authorization: 'Bearer ' + Cookies.get('jwt'),
      },
    });

    if (response2.status !== 200) {
      throw new Error('Failed to fetch last user Data');
    }

    const { Nickname, birthdate, ...rest2 } = response2.data.data.attributes;

    return {
      name: username,
      birthDate: birthdate,
      nickname: Nickname,
      gender: '', // You can set default values for other properties if needed
      phone: '',
      email: '',
      ...rest,
      ...rest2,
    };
  } catch (err) {
    console.error(err);
    throw err; // Re-throw the error to handle it in the component
  }
}

async function updateUserData(data:any){
  try {
    // const response = await axios.put(userUrl, {
    //   headers: {
    //     Authorization: `Bearer ${Cookies.get('jwt')}`,
    //   },
    //   data: data
    // });
    const response = await axios({
      method: 'put',
      url: userUrl,
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      },
      data: data
    });
    
    return response
  } catch (err) {
    return err; 
  }
}

export {getUserData, updateUserData};
