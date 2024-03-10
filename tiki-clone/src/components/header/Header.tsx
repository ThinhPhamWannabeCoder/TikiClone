import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <header className="bg-black text-white flex justify-between py-2">
            <div className="flex"id="logo">
                <NavLink to="/">Logo</NavLink>
                <div className="ml-4">Menu</div>
            </div>
            <nav>
                {/* <NavLink></NavLink> */}
                <NavLink to="login">Login</NavLink>
                {/* Home */}
                {/* Edu */}
            </nav>
        </header>
    )
}