import { useEffect, useState } from "react";
import ContentBox from "../../../components/Common/ContentBox";
import Form from "./Form";
import OrderOption from "./OrderOption";
import StoreOrderBadge from "./StoreOrderBadge";
import productApi from "../../../services/buyer.services";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { init } from "../../../redux/order/orderSlice";

interface propsType{
    store:{
        id: number,
        name: string
    },
    product:{
        id: number,
        name: string,
        price: number,
        primaryImage: string,
    },
    // quantity: number,
}
interface storeType{
    storeId: number,
    name: string,
    orderNumber: number
}
export default function OrderForm(prop: propsType){
    // STORE_ID
    // console.log(prop)
    const [storeShort, setStoreShort] = useState<storeType|undefined>(undefined);
    const [quantity, setQuantity] = useState <number>(1)
    const {productId} = useParams()
    const dispatch = useDispatch()
    const user = useSelector((state:RootState) => state.auth.user)
    const navigate = useNavigate();
    const buyNowHandler = () =>{
        console.log("Buy now")
        
        dispatch(init( {
            data:{
                userId: user?.id as number,
                carts: [{
                    store:{
                        id: prop.store.id,
                        name: prop.store.name,
                    },
                    product:{
                        id: prop.product.id,
                        name: prop.product.name,
                        price: prop.product.price,
                        primaryImage: prop.product.primaryImage,
                    },
                    quantity: quantity
                }],
                
            } 
            
        }))
        navigate("/checkout/payment")

    }
    const addToCartHandler = () =>{
        console.log("Add to cart now")
        const data = {
            userId: user?.id as number,
            productId: prop.product.id,
            quantity: quantity
        }
        productApi.addToCart(data)
            .then( res =>{
                console.log(res.data)
                console.log("fine")
                alert("Them hang vao gio thanh cong")
            })
            .catch(err => {
                console.log(err.message)
                alert("That bai vui long lien he toi admin")
            })
        // productApi and etc
    }
    const buyFirstPayLayterHandler = () =>{
        alert("Comming soon")
    }


    // STORE ORDER

    // STATE ORDER
    // NUMBER
    // 

    return(
        <>
            <ContentBox class="w-3/12 h-full sticky top-2">
                <StoreOrderBadge storeId={prop.store.id}/>

                <OrderOption price={prop.product.price} setOrderNumber={setQuantity} quantity={quantity}/>

                <Form 
                    buyFirstPayLayterHandler={buyFirstPayLayterHandler}
                    buyNowHandler={buyNowHandler}
                    addToCartHandler={addToCartHandler}
                />
            </ContentBox>
            
        </>
    )
}