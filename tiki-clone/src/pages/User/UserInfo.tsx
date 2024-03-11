import { useEffect, useState } from "react";
import { User } from "../../types/user";
import getUserData, { updateUserData } from "../../utils/userData";
import { Form, Link, useActionData } from "react-router-dom";
import { EnvelopeIcon, PhoneArrowDownLeftIcon } from "@heroicons/react/24/outline";
import {thinh_avatar} from '../../assets/images/image'
import ImageInput from "../../components/user/Form/ImageInput";
import NameInput from "../../components/user/Form/NameInput";
import BirthDateInput from "../../components/user/Form/BirthDateInput";
import GenderInput from "../../components/user/Form/GenderInput";

const mockData = {
    name: "Phạm Tiến Thịnh",
    nickname: "",
    birthdate: '2003-12-04',
    gender: 'male',
    // country: '',
    phone: '0971933424',
    email: 'thinhbinhthuong@gmail.com'

}

export default function UserInfo(){
    // throw Error('ehehe')
    const data = useActionData();
    const [year, month, day] = mockData.birthdate.split('-');
    // const [userData, setUserData] = useState<User>({
    //     name: '',
    //     nickname: '',
    //     birthDate: '',
    //     gender: '',
    //     phone: '',
    //     email: ''
    // });
    // const [loading, setLoading] = useState(true);
    // const [day, setDay] = useState('')
    // const [month, setMonth] = useState('')
    // const [year, setYear] = useState('')
    // useEffect(() => {
    //     const fetchData = async () => {
    //     try {
    //         const data = await getUserData();
    //         setUserData(data);
    //         setLoading(false);
    //     } catch (error) {
    //         setLoading(true);
    //     }
    //     };
    //     fetchData();
    // }, []);
    // if(loading){
    //     return <p>Loading...</p>;
    // }

    // const dayOption =
    useEffect(()=>{
        console.log(data)
    },[data])
    return(
        <div className=" p-5 bg-white w-full rounded-lg flex">
            <div className="personinfo border-r-2 pr-4" >
                <h1 className="text-xl">Thông tin cá nhân</h1>
                <div id="content">
                    <Form method="post" action="/user/info" className="text-sm">
                        <div className="flex  items-center py-8">
                            <ImageInput/>
                            <NameInput name={mockData.name} nickname={mockData.nickname}/>
                        </div>        
                        <BirthDateInput year={year} month={parseInt(month, 10).toString()} day={parseInt(day, 10).toString()}/>
                        <GenderInput gender={mockData.gender}/>

                        <button type="submit" className="px-5 py-2 bg-blue-500 rounded-lg text-white font-semibold shadow-lg active:bg-blue-600">Lưu thay đổi</button>
                    </Form>
                </div>
            </div>
            <div className="w-2/5 ml-4 ">
                <div className="flex-shrink-0 text-sm">
                    <h1 className="flex-shrink-0 text-xl ">Số điện thoại và Email </h1>
                    <div className="flex py-8 justify-between">
                        <div className="flex">
                            <PhoneArrowDownLeftIcon className="w-6 mr-4"/>
                            <div className="flex-shrink-0 ">
                                <p>Số điện thoại</p>
                                <p>{mockData.phone}</p>
                            </div>
                        </div>
                        
                        <Link to="/" className="px-3 py-2 border-blue-300 border-solid border-2 rounded-lg  flex-shrink-0 "> Cập nhật</Link>
                    </div>
                    <div className="flex py-8 justify-between">
                        <div className="flex">
                            <EnvelopeIcon className="w-6 mr-4"/>
                            <div className="flex-shrink-0 ">
                                <p>Địa chỉ email</p>
                                <p>{mockData.email}</p>
                            </div>
                        </div>

                        <Link to="/" className="px-3 py-2 border-blue-300 border-solid border-2 rounded-lg flex-shrink-0"> Cập nhật</Link>
                    </div>
                </div>
                
            </div>

        </div>
    )
}
export const checkData = async ({request})=>{
    try {
        const data = await request.formData();
        // const response = await updateUserData(data);
        // console.log(response.data);
        console.log(data);
        return(1)
    } catch (error) {
        return error
    }
    
}
