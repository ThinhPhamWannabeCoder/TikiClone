import { useQuery } from "@apollo/client"
import { GET_USER_NOTIFICATION } from "../../services/graphql.queries";
import { useEffect } from "react";


export default function GraphQl(){
    const {loading, error, data, refetch} = useQuery(GET_USER_NOTIFICATION,{
        variables: {id: 1, page: 1, pageSize: 10}
    });
    // if (loading) return (<p>Loading</p>)
    // if(error) console.log(error.message)
    // console.log(data?.notificationUsers.data)
    // // console.log(data?.notificationUsers?.data[0].attributes)
    // console.log(data?.notificationUsers?.meta?.pagination)
    // console.log()
    refetch({ id: 1, page: 1, pageSize: 10 })

    useEffect(()=>{
        if(data?.notificationUsers.data.length>0){
            // console.log(data?.notificationUsers.data[0].attributes)
            // console.log(data?.notificationUsers.data[0].attributes.Title)
            // console.log(data?.notificationUsers.data[0].attributes.message)
            // console.log(typeof data?.notificationUsers.data[0].attributes.createdAt)
            // data?.notificationUsers.data.map(x=>{
            //     console.log(x.attributes.Title)
            //     console.log(x.attributes.message)
            // })
            const notification = data?.notificationUsers.data.map(x=>{
                return{
                    id: x.id,
                    title: x.attributes.Title,
                    message: x.attributes.message,
                    date:  x.attributes.createdAt.slice(0, 10)
                }
            })
            console.log(notification)
        }

        console.log(data?.notificationUsers?.meta?.pagination.total)
       
    },[data])
    return(
        <div>this is graph</div>
    )
}