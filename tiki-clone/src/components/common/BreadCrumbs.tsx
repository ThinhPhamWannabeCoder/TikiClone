import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom"

export default function BreadCrumbs(){
    const location = useLocation();
    let currentLink = '';
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !=='')
        .map(crumb=>{
            currentLink += `/${crumb}`
            return (
                <div key={crumb}>
                    <Link to={currentLink} className="flex items-center text-gray-700 py-3 hover:underline"> 
                        {crumb}
                        <ChevronRightIcon className="w-3"/>
                    </Link>
                </div>
            )
        })
    return (
        <div className="flex w-2/3">
            {crumbs}
        </div>
    )
}