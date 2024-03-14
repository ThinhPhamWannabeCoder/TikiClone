import Pagination from "../../components/common/Pagination"
import PrivateNotifcation from "../../components/user/Notification/PrivateNotification"

const mockDate = [
    {
        title: 'NO_REPLY',
        message: 'First Message',
        date: '2024-03-03'
    },
    {
        title: 'NO_REPLY',
        message: '2 Message',
        date: '2024-03-03'

    },
    {
        title: 'NO_REPLY',
        message: '3 Message',
        date: '2024-03-03'

    },
    {
        title: 'NO_REPLY',
        message: '4 Message',
        date: '2024-03-03'

    },
    {
        title: 'NO_REPLY',
        message: '5 Message',
        date: '2024-03-03'

    },
    {
        title: 'NO_REPLY',
        message: '6 Message',
        date: '2024-03-03'

    },
    {
        title: 'NO_REPLY',
        message: '6 Message',
        date: '2024-03-03'

    },
    {
        title: 'NO_REPLY',
        message: '6 Message',
        date: '2024-03-03'

    },
    

]

export default function UserNoti(){
    const paginationHandle = () => {

    }
    // handle request
    
    return(
        <div className=" p-5 bg-white w-full rounded-lg flex flex-col">
            <h1 className="text-xl">Thông báo của tôi</h1>
            <div className="  flex flex-col">
                {
                    mockDate.map(data=>(
                        <PrivateNotifcation title={data.title} message={data.message} date={data.date}/>
                    ))
                }
            </div>
            <Pagination/>
        </div>
    )
}