import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store";
import { order } from "../../redux/cart/cartSlice";




export default function TestX(){
    const dispatch = useDispatch();
    
    const quantity = useSelector((state: RootState)=> state.cart.quantity)
    const productId = useSelector((state: RootState)=> state.cart.productId)
    const handleOrder = () => {
        dispatch(
          order()
        );
        // hanlde here
    }
    
    return(
        // <button onClick={()=> {
        //     productApi.getCategoryBestProductBySubCategory({subcategory_id:9,limit:50,current_page:1})
        //         .then(x => console.log(x))
        //         .catch(err => console.log(err.message))
        // }} className=" p-5 bg-green-500">
        //     An tai day de lam viec
        // </button>
        <>
            <div>
              
                <button onClick={handleOrder}>handleOrder</button>
                {quantity}
                <br />
                {productId}
            </div>
        </>
    )
}