import { useEffect, useState } from "react"
import Pagination from "../../components/common/Pagination"
import PrivateNotifcation from "../../components/user/Notification/PrivateNotification"
import { UserNotification } from "../../types/user.types";
import { useQuery } from "@apollo/client";
import { GET_USER_NOTIFICATION } from "../../services/graphql.queries";
import { useAuthContext } from "../../components/auth/AuthProvider";

const mockDate = [
    {
        id: 1,
        title: 'NO_REPLY',
        message: 'First Message',
        date: '2024-03-03'
    },
    {
        id: 2,
        title: 'NO_REPLY',
        message: '2 Message',
        date: '2024-03-03'

    },
    {
        id: 3,
        title: 'NO_REPLY',
        message: '3 Message',
        date: '2024-03-03'

    },
    {
        id: 4,
        title: 'NO_REPLY',
        message: '4 Message',
        date: '2024-03-03'

    },
    {
        id: 5,
        title: 'NO_REPLY',
        message: '5 Message',
        date: '2024-03-03'

    },
    {
        id: 6,
        title: 'NO_REPLY',
        message: '6 Message',
        date: '2024-03-03'

    },
    {
        id: 7,
        title: 'NO_REPLY',
        message: '6 Message',
        date: '2024-03-03'

    },
    {
        id: 8,
        title: 'NO_REPLY',
        message: '6 Message',
        date: '2024-03-03'

    },
    

]

export default function UserNoti(){
    const context =  useAuthContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [notifications, setnotifications] = useState<UserNotification[]>([])
    const [totalPage, setTotaPage] = useState<number>(0)
    
    const {loading, error, data, refetch} = useQuery(GET_USER_NOTIFICATION,{
        variables: {id: context?.data?.user_id, page: 1, pageSize: 10}
    });
    // handle request
    useEffect(()=>{
        if(!loading && data){
            // Constsruct lai truoc khi vao bai
            console.log(data.notificationUsers.meta.pagination)

            if(data?.notificationUsers.data.length>0){
                const notification = data?.notificationUsers.data.map(x=>{
                    return{
                        id: x.id,
                        title: x.attributes.Title,
                        message: x.attributes.message,
                        date:  x.attributes.createdAt.slice(0, 10)
                    }
                })
                setnotifications(notification)
                // setCurrentPage(data?.notificationUsers?.meta?.pagination.page)
            }
            else{
                setnotifications([])
            }
            setTotaPage(data?.notificationUsers?.meta?.pagination.total)
            

        }
    },[loading, data])

    useEffect(()=>{
        console.log("hello")
        refetch({ id: context?.data?.user_id, page: currentPage, pageSize: 10 })
        // console.group(data)
    },[currentPage])

    const paginationHandle = (input:number) =>{
        // console.log(event.target.value)
        console.log(input)
        setCurrentPage(input)
    }

    if(loading){
        return(<p>Loading</p>)
    }
    if(error){
        return(<p>Something went wrong</p>)
    }
    return(
        <div className=" p-5 bg-white w-full rounded-lg flex flex-col">
            <h1 className="text-xl">Thông báo của tôi</h1>
            <div className=" min-h-60 flex flex-col">
                {
                    notifications.map(noti=>(
                        <PrivateNotifcation key={noti.id} title={noti.title} message={noti.message} date={noti.date}/>
                    ))
                }
            </div>
            {/* Page */}
            <Pagination currentPage={currentPage} paginationHandle={paginationHandle} totalPage={totalPage}/>
        </div>
    )
}