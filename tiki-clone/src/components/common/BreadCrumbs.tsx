import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom"

export default function BreadCrumbs(){
    // Hanlde lai phan nay -> is last -> disable
    const location = useLocation();
    const pathArray = location.pathname.split('/')
    if(pathArray[1]===''){
        return (<></>)
    }
    let currentLink = '';
    const crumbs = pathArray
        .filter(crumb => crumb !=='')
        .map((crumb, index)=>{
            currentLink += `/${crumb}`
            return (
                <div key={crumb}>
                    <Link to={currentLink} className="flex items-center text-gray-700 py-3 hover:underline"> 
                        {crumb}
                        {index < pathArray.length-2 && <ChevronRightIcon className="w-3"/>  }
                    </Link>
                </div>
            )
        })
    return (
        <div className="flex self-start">
            <div>
                <Link to="/" className="flex items-center text-gray-700 py-3 hover:underline">
                    Trang chủ
                    <ChevronRightIcon className="w-3"/>
                </Link>
            </div>
            {crumbs}
        </div>
    )
}