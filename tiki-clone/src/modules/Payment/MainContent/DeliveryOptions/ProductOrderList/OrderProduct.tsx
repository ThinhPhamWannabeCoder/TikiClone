const ASSET_API = import.meta.env.VITE_ASSETS_URL

interface propType{
    product:{
        id: number,
        name: string,
        price: number,
        primaryImage: string
    },
    quantity: number,
    
}
export default function OrderProduct(props: propType){
    return(
        <div className="flex text-slate-600 items-center">
            <img src={`${ASSET_API}${props.product.primaryImage}`} alt="" className="object-cover mr-3 w-12 h-12" />
            <div className="w-full"> 
                <div>{props.product.name}</div>
                <div className="flex justify-between">
                    <div>
                        <span>SL: {props.quantity}</span>
                    </div>
                    <div>
                        <span className="font-bold">{props.product.price} ₫</span>    
                    </div>      
                </div>
            </div>
        </div>
    )
}