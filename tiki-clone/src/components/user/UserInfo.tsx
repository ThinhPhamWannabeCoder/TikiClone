import { useEffect, useState } from "react";
import { User } from "../../types/user";
import getUserData from "../../utils/userData";
import { Form, Link, useActionData } from "react-router-dom";
import { EnvelopeIcon, PhoneArrowDownLeftIcon } from "@heroicons/react/24/outline";
import {thinh_avatar} from '../../assets/images/image'

const mockData = {
    name: "Phạm Tiến Thịnh",
    nickname: "",
    birthdate: '2023-09-04',
    gender: 'Nam',
    // country: '',
    phone: '0971933424',
    email: 'thinhbinhthuong@gmail.com'

}

export default function UserInfo(){
    // throw Error('ehehe')
    const data = useActionData();
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
            <div className="personinfo border-r-2" >
                <h1>Thông tin cá nhân</h1>
                <div id="content">
                    <Form method="post" action="/user/info">
                        <div className="pr-3 flex">
                            <div className="flex-shrink-0">
                                <label htmlFor="" id="image">
                                    <img src={thinh_avatar} alt="" className="object-cover w-24 h-24 rounded-full flex-shrink-0"/>
                                </label>
                            </div>
                            <div id="name">
                                <label>
                                    <span>Họ & Tên</span>
                                    <input type="text" name="full_name"
                                        className="hover:border-slate-400 transition duration-200 focus:border-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </label>
                                <label >
                                    <span> Nickname</span>
                                    <input type="text" name="nick_name"  
                                        className="hover:border-slate-400 transition duration-200 focus:border-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </label>
                            </div>
                        </div>
                        <div id="birthday">
                            <label >
                                <select name="day" id=""
                                    // value={day}
                                >
                                    <option value="">Day</option>
                                {Array.from({ length: 31 }, (_, index) => (
                                    <option key={index + 1} value={index + 1}>
                                    {index + 1}
                                    </option>))}
                                </select>
                            </label>
                            <label>
                                <select name="month"
                                    // value={month}
                                >
                                    <option value="">Month</option>

                                    {Array.from({length: 12},(_, index)=>(
                                        <option key={index+1} value={index+1}>
                                            {index+1}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <label>
                                <select
                                    name="year"
                                    // value={year}
                                    // onChange={(e) => setYear(e.target.value)}
                                    >
                                    <option value="" disabled>Year</option>
                                    {Array.from({ length: 100 }, (_, index) => {
                                        const currentYear = new Date().getFullYear();
                                        return (
                                        <option key={currentYear - index} value={currentYear - index}>
                                            {currentYear - index}
                                        </option>
                                        );
                                    })}
                                </select>
                            </label>
                        </div>

                        <label>
                            <input
                            type="checkbox"
                            name="gender"
                            value="male"
                            checked={true}
                            />
                            Male
                        </label>
                        <label>
                            <input
                            type="checkbox"
                            name="gender"
                            value="female"
                            />
                            Female
                        </label>

                        <label>
                            <input
                            type="checkbox"
                            name="gender"
                            value="male"
                            
                            />
                            Other
                        </label>
                        <button type="submit" className="px-5 py-2 bg-blue-600 rounded-lg">Lưu thay đổi</button>
                    </Form>
                </div>
            </div>
            <div>
                <div className="flex-shrink-0">
                    <h1 className="flex-shrink-0 pl-3">Số điện thoại và Email </h1>
                    <div>
                        <PhoneArrowDownLeftIcon className="w-6"/>
                        <div>
                            <p>Số điện thoại</p>
                            <p>{mockData.phone}</p>
                        </div>
                        <Link to="/" className="px-3 py-2 bg-blue-300"> Cập nhật</Link>
                    </div>
                    <div>
                        <EnvelopeIcon className="w-6"/>
                        <div>
                            <p>Địa chỉ email</p>
                            <p>{mockData.email}</p>
                        </div>
                        <Link to="/" className="px-3 py-2 bg-blue-300"> Cập nhật</Link>
                    </div>
                </div>
                
            </div>

        </div>
    )
}
export const checkData = async ({request})=>{
    const data = await request.formData();
    console.log(data);
    return(1)
}