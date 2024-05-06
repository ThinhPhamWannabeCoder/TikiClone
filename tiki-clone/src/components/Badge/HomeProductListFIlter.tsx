import { FireIcon, UserCircleIcon } from "@heroicons/react/24/outline"

interface props{
    best?: () => void,
    all?: () => void,
    state: string,
}
export default function HomeProductListFilter(data: props){
    return(
        <div className="grid grid-cols-6 gap-1 p-0">
            
                        <div
                            onClick={data.all} 
                            className={`h-full flex flex-col justify-center items-center rounded-md cursor-pointer
                                ${data.state === "false" ? 'bg-blue-200 hover:bg-blue-300' : 'hover:bg-slate-200' }
                            `}

                        >
                            <UserCircleIcon className="w-10 h-10 text-blue-700"/>
                            <h3>Dành cho bạn</h3>
                        </div>
                        <div
                            onClick={data.best} 
                            className={`h-full  flex flex-col justify-center items-center rounded-md cursor-pointer
                             ${data.state === "true" ? 'bg-blue-200 hover:bcursor-pointerg-blue-300' : 'hover:bg-slate-200' }

                            `}
                        >
                            <FireIcon className="w-10 h-10 text-red-500"/>
                            <h3>Top Deal bán chạy</h3>
                        </div>

            
        </div>
    )
}
