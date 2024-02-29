import Link from "next/link";
const homeLink = {name: "Home", href:'/'};

export function HomeLogo(){
    return(
        <Link
            href={homeLink.href}
            className="p-4"
        >
            <h3>{homeLink.name}</h3>
        </Link>
    )
}