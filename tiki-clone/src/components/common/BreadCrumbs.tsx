import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";

export default function BreadCrumbs() {
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    
    if (pathArray[1] === '') {
        return null; // Return null or any other component you prefer when the path is empty
    }
    
    let currentPath = '';
    const crumbs = pathArray
        .filter(crumb => crumb !== '')
        .map((crumb, index) => {
            currentPath += `/${crumb}`;
            const linkTo = {
                pathname: currentPath,
                search: location.search // Include current query string
            };
            return (
                <div key={crumb}>
                    <Link to={linkTo} className="flex items-center text-gray-700 py-3 hover:underline">
                        {crumb}
                        {index < pathArray.length - 2 && <ChevronRightIcon className="w-3" />}
                    </Link>
                </div>
            );
        });

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
    );
}
