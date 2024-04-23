import { useEffect, useState } from "react";


import userApi from "../../../services/user.services";
import ContactForm from "./ContactForm";
import ImageInput from "./UserForm/ImageInput";
import NameInput from "./UserForm/NameInput";
import BirthDateInput from "./UserForm/BirthDateInput";
import GenderInput from "./UserForm/GenderInput";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { AuthState } from "../../../types/user.types";
import { logout } from "../../../redux/authentication/authSlice";


export default function UserInformation(){
        // throw Error('ehehe')
        const user = useSelector((state:RootState)=>state.auth.user)
        const dispatch = useDispatch();
        const handleLogout = ()=>{
            dispatch(
                logout()
            )
            location.reload();
        }
        const [data, setUpdateChecker] = useState(null);
        // If null -> strapi will delete it
        if(user===undefined){
            return "chet may ne"
        }
        // const [userData, setUserData] = useState<User | null>(null)
        const [name, setName] = useState<string>(user?.name);
        const [nickName, setNickname] = useState<string | null>(user?.nickname);
        const [phone, setPhone] = useState<string>(user?.phone);
        const [avatarUrl, setAvatarUrl] = useState<string>(user?.avatar?.url)
        const [birthdate, setBirthdate] = useState<string>(user?.dob);
        const [gender, setGender] = useState<string | null>(user?.gender);
        const [email, setEmail] = useState<string>(user?.email)
        const [avatarChange, setAvatarChange] = useState(false)
        const [avatarId, setAvatarId] = useState<number>(user?.avatar?.id)


        const handleSubmit = async (e)=>{
            e.preventDefault();
            let tempId:number = avatarId;
            try {
                if(avatarChange){
    
                    const imageUpload = new FormData();
                    imageUpload.append('files',avatarChange)
                    
                    const uploadResponse = await userApi.uploadFile(imageUpload);
                    setAvatarUrl(uploadResponse.data[0].url);
                    if(avatarId) await userApi.deleteFie(avatarId) 
                    setAvatarId(uploadResponse.data[0].id);
                    tempId=uploadResponse.data[0].id
                } 
                await userApi.put_user(user.id,{
                    "username": name
                })
                
                // console.log(context?.data?.information_id)
                await userApi.put_info_user(user.infomationId,{
                    "data": {
                        "Nickname": nickName,
                        "birthdate": birthdate,
                        "avatar": tempId,
                        "gender": gender
                    }
                })
                setUpdateChecker({
                    status: 200
                })
    
            } catch (err) {
                console.log(err.message)
            }
            
        }
        return(
            <>
                <div className="border-r-2 pr-4 w-3/5" >
                    <h1 className="text-xl">Thông tin cá nhân</h1>
                    <div id="content ">
                        <form onSubmit={handleSubmit}>
                            <div className="flex  items-center py-8">
                                    <ImageInput url={avatarUrl} setUrl={setAvatarUrl} setAvatarChange={setAvatarChange}/>
                                    <NameInput name={name} nickname={nickName} setName={setName} setNickname={setNickname}/>
                                </div>        
                                <BirthDateInput birthdate={birthdate} setBirthdate={setBirthdate}/>
                                <GenderInput gender={gender} setGender={setGender}/>
                                <div className="flex justify-between items-center">
                                    <button type="submit" className="px-5 py-2 bg-blue-500 rounded-lg text-white font-semibold shadow-lg active:bg-blue-600 ">Lưu thay đổi</button>
                                        {data && (data.status === 200 ? 
                                        ( <p className="text-blue-500 font-semibold">Updated sucessfully</p>) :
                                        ( <p className="text-red-500">Unable to update</p>))
                                        }
                                    <button type="button" className="bg-red-500 p-4" onClick={()=>handleLogout()}>Test logout</button>
                                </div>
                        </form>
                            

                    </div>
                </div>
                <ContactForm email={email} phone={phone} />

            </>
        )
    
}