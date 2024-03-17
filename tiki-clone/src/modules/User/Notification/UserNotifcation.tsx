import { useEffect, useState } from "react";
import { useAuthContext } from "../../../components/Auth/AuthProvider";
import { UserNotification } from "../../../types/user.types";
import { GET_USER_NOTIFICATION } from "../../../services/graphql.queries";
import { useQuery } from "@apollo/client";
import PrivateNotifcation from "../../../components/User/Notification/PrivateNotification";
import Pagination from "../../../components/common/Pagination";

export default function UserNotifcation(){
    const context =  useAuthContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [notifications, setnotifications] = useState<UserNotification[]>([])
    const [totalPage, setTotaPage] = useState<number>(0)
    
    const {loading, error, data, refetch} = useQuery(GET_USER_NOTIFICATION,{
        variables: {id: context?.data?.user_id, page: 1, pageSize: 10}
    });
    useEffect(()=>{
        if(!loading && data){

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
            }
            else{
                setnotifications([])
            }
            setTotaPage(data?.notificationUsers?.meta?.pagination.total)
            

        }
    },[loading, data])

    useEffect(()=>{
        refetch({ id: context?.data?.user_id, page: currentPage, pageSize: 10 })
    },[currentPage])

    const paginationHandle = (input:number) =>{
        setCurrentPage(input)
    }

    if(loading){
        return(<p>Loading</p>)
    }
    if(error){
        return(<p>Something went wrong</p>)
    }
    return(
        <div  className=" min-h-60 flex flex-col">
            <h1 className="text-xl">Thông báo của tôi</h1>
            <div className=" min-h-60 flex flex-col">
                {
                    notifications.map(noti=>(
                        <PrivateNotifcation key={noti.id} title={noti.title} message={noti.message} date={noti.date}/>
                    ))
                }
            </div>
            <Pagination currentPage={currentPage} paginationHandle={paginationHandle} totalPage={totalPage}/>
        </div>
    )
}