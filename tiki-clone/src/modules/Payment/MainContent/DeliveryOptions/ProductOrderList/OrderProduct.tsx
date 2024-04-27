export default function OrderProduct(){
    return(
        <div className="flex text-slate-600">
            <img src="https://placehold.co/50x50/png" alt="" className="object-cover pr-3" />
            <div className="w-full"> 
                <div>Name</div>
                <div className="flex justify-between">
                    <div>
                        <span>SL X</span>
                    </div>
                    <div>
                        <span className="text-bold"> Price</span>    
                    </div>      
                </div>
            </div>
        </div>
    )
}