
import StoreCart from "./StoreCart";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export default function CartTable(){
    
    const carts = useSelector((state:RootState)=>state.cart.view)
    return (

        <>
            {
               carts.map(item=>{
                    return(
                        <StoreCart 
                            key={item.store.id} 
                            storeId={item.store.id} 
                            storeName={item.store.name}
                            data={item.cart}
                        />
                    )
                })
            }
        </>
   
       
    );
   
}

