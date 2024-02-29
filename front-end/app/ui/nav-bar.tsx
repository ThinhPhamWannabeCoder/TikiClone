import Link from "next/link";

const links =[
    {name: "O To", href:'/oto'},
    {name: "Xe May", href:'/xe-may'},
    {name: "Suc Khoe", href:'/suc-khoe'},
    {name: "Sac Dep", href:'/sac-dep'},
];

export default function NavWrapper(){
    
    return(
        <>
            <div className="flex flex-row p-4">
                {links.map(link=>{
                        return(
                        <Link
                            key={link.name}
                            href={link.href}
                            className='mr-4'

                        >
                            <h3>{link.name}</h3>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}