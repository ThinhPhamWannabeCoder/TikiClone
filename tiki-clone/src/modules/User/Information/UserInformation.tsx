import { useEffect, useState } from "react";
import { useAuthContext } from "../../../components/Auth/AuthProvider";
import ImageInput from "../../../components/User/Form/ImageInput";
import NameInput from "../../../components/User/Form/NameInput";
import BirthDateInput from "../../../components/User/Form/BirthDateInput";
import GenderInput from "../../../components/User/Form/GenderInput";
import { EnvelopeIcon, PhoneArrowDownLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import userApi from "../../../services/user.services";


export default function UserInformation(){
        // throw Error('ehehe')
        const [data, setUpdateChecker] = useState(null);
        const context = useAuthContext();
        // If null -> strapi will delete it
        const [userData, setUserData] = useState<User | null>(null)
        const [name, setName] = useState<string>(userData?.name);
        const [nickName, setNickname] = useState<string | null>(userData?.nickname);
        const [phone, setPhone] = useState<string>(userData?.phone);
        const [avatarUrl, setAvatarUrl] = useState<string>(userData?.avatarUrl)
        const [birthdate, setBirthdate] = useState<string>(userData?.birthdate);
        const [gender, setGender] = useState<string | null>(userData?.gender);
        const [email, setEmail] = useState<string>(userData?.email)
        const [avatarChange, setAvatarChange] = useState(false)
        const [avatarId, setAvatarId] = useState<number>(userData?.avatarId)
    
    
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
                await userApi.put_user(context?.data?.user_id,{
                    "username": name
                })
                
                // console.log(context?.data?.information_id)
                await userApi.put_info_user(context?.data?.information_id,{
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
        // console.log(context?.number1)
        useEffect(()=>{
            setName(context?.data.name);
            setNickname(context?.data.nickname);
            setGender(context?.data.gender);
            setPhone(context?.data.phone);
            setBirthdate(context?.data?.birthdate);
            setAvatarUrl(context?.data?.avatarUrl)
            // console.log(context?.data?.avatarUrl)
            setEmail(context?.data?.email);
            setAvatarId(context?.data?.avatarId);
            setUserData(context?.data);
            // console.log(avatarUrl)
    
        },[context])
    
        if(!userData){
            return <div>Loading...</div>;
        }
        return(
            <>
                <div className="personinfo border-r-2 pr-4" >
                <h1 className="text-xl">Thông tin cá nhân</h1>
                <div id="content ">

                    {/* <Form method="post" action="/user/info" className="text-sm ">
                     */}
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
                            </div>
                    </form>
                        
                    {/* </Form> */}

                </div>
                </div>
                <div className="w-2/5 ml-4 ">
                    <div className="flex-shrink-0 text-sm border-b-2">
                        <h1 className="flex-shrink-0 text-xl ">Số điện thoại và Email </h1>
                        <div className="flex py-8 justify-between">
                            <div className="flex">
                                <PhoneArrowDownLeftIcon className="w-6 mr-4"/>
                                <div className="flex-shrink-0 ">
                                    <p>Số điện thoại</p>
                                    {phone ? (<p>{phone}</p>) : (<p>Please enter phone number</p>)}
                                </div>
                            </div>
                            
                            <Link to="/" className="px-3 py-2 border-blue-300 border-solid border-2 rounded-lg  flex-shrink-0 "> Cập nhật</Link>
                        </div>
                        <div className="flex py-8 justify-between">
                            <div className="flex">
                                <EnvelopeIcon className="w-6 mr-4"/>
                                <div className="flex-shrink-0 ">
                                    <p>Địa chỉ email</p>
                                    <p>{email}</p>
                                </div>
                            </div>

                            <Link to="/" className="px-3 py-2 border-blue-300 border-solid border-2 rounded-lg flex-shrink-0"> Cập nhật</Link>
                        </div>
                    </div>
                    
                </div>                        
            {/* </div> */}
            </>
        )
    
}