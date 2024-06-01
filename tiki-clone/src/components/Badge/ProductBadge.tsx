import { useNavigate } from "react-router-dom"

interface propType{
    id: number
    product_url: string,
    name: string,
    price: number,
}
export default function ProductBagde(props : propType){
    const navigate = useNavigate()
    const handleClick = (id: number) => {
        navigate(`product/${id}`)
    }
    return( 
        <div className="rounded-lg  border-solid border-2 border-slate-300  overflow-hidden hover:shadow-xl cursor-pointer" onClick={()=>{handleClick(props.id)}}>
            <img src={`http://localhost:1337${props.product_url}`} alt="Primary Image"  className="object-cover w-48 h-48 flex-shrink-0"/>
            <div className="px-3 flex flex-col gap-3">
                <p className="text-sm">{props.name.length > 50 ? `${props.name.slice(0, 50)}...` : props.name}</p>
                <p className="font-semibold">{props.price}</p>
            </div>
        </div>
    )
}