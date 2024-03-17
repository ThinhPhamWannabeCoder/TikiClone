
interface myProps{
    title:string,
    message: string
    date: string
}
export default function PrivateNotifcation( prop: myProps){
    return(
        <div className="p-4 bg-gray-300 rounded-xl my-2">
            <div className="flex justify-between">
                <h1 className="font-bold text-lg">{prop.title}</h1>
                <p>{prop.date}</p>
            </div>
            <p>{prop.message}</p>
        </div>
    )
}