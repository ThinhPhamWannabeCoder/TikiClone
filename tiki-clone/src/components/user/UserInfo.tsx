import { useEffect, useState } from "react";
import { User } from "../../types/user";
import getUserData from "../../utils/userData";


export default function UserInfo(){
    // throw Error('ehehe')

    const [userData, setUserData] = useState<User>({
        name: '',
        nickname: '',
        birthDate: '',
        gender: '',
        phone: '',
        email: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await getUserData();
            setUserData(data);
            setLoading(false);
        } catch (error) {
            setLoading(true);
        }
        };
        fetchData();
    }, []);
    if(loading){
        return <p>Loading...</p>;
    }
    return(
        <div>
            this is User Info
            <div> name: {userData.name}</div>
            <div> nickname: {userData.nickname}</div>
            <div> birthdate: {userData.birthDate}</div>
            <div> gender: {userData.gender}</div>
            <div> phone: {userData.phone}</div>
            <div> email: {userData.email}</div>
        </div>
    )
}