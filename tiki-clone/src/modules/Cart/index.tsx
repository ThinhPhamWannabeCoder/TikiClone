import { useEffect, useState } from "react";
import PrimaryTitle from "../../components/Title/PrimaryTitle";
import CartMainContent from "./MainContent";
import SideBar from "./SideBar";
import productApi from "../../services/buyer.services";
import { useDispatch, useSelector } from "react-redux";
import { CartType, ProcessedCarts } from "../../types/user.types";
import { init, update } from "../../redux/cart/cartSlice";
import { RootState } from "../../redux/store";

export default function Cart(){
    // for calculating price
    const [allState, setAllState] = useState<boolean>(false);
    const [selectedCarts, setSelectedCarts] = useState<number[]>([])
    const [allCart, setAllCart] = useState<object[]>([])
    const [unProcessedCart, setUnProcessedCart] = useState<object[]>([])
    const user = useSelector((state:RootState) => state.auth.user)
    const dispatch = useDispatch();
    const handleAddActiveCart=(data: CartType[])=>{
        dispatch(
            init(data)
        )
    }

    
    useEffect(()=>{
        // GET CART HERE
        productApi.getUserCart({userId:user?.id as number})
            .then(response =>{
                setAllCart(processCart(response.data))
                // console.log(response.data)
                setUnProcessedCart(response.data)
                handleAddActiveCart(response.data)
            })
            .catch(error => {
                console.log(error.message)
            })
    },[])


    
    const handleDeleteCart = (cartId: number)=>{

        setAllCart(processCart(unProcessedCart.filter(item=>item.id != cartId)))
        setUnProcessedCart(unProcessedCart.filter(item=>item.id != cartId))
        productApi.deleteByIds({ids: [cartId]})
            .then(res=>{
                if(res.data.status === 200){
                    console.log("good bro")
                }
            })
            .catch(err =>{
                console.log(err.message)
            })
        // DELETE
    }
    const handleDeleteStore = (storeId: number)=>{
        setAllCart(processCart(unProcessedCart.filter(item=>item.store.id != storeId)))
        setUnProcessedCart(unProcessedCart.filter(item=>item.store.id != storeId))
        // const cartIds = unProcessedCart.map(item => {
        //     if(item.store.id == storeId) return item.id
        // })
        const cartIds = unProcessedCart.reduce((acc, item)=>{
            if(item.store.id == storeId) acc.push(item.id)
            return acc
        },[])
        productApi.deleteByIds({ids: [...cartIds]})
        .then(res=>{
            if(res.data.status === 200){
                console.log("good bro")
            }
        })
        .catch(err =>{
            console.log(err.message)
        })
        // console.log(`delete store ${storeId}`)
    }
    const hanldeDeleteAll = ()=>{
        // set
        // console.log("Delete All");
        setAllCart([])
        setUnProcessedCart([])
        const cartIds = unProcessedCart.map(item => item.id)
        productApi.deleteByIds({ids: [...cartIds]})
        .then(res=>{
            if(res.data.status === 200){
                console.log("good bro")
            }
        })
        .catch(err =>{
            console.log(err.message)
        })
      
        // UPDATE REDUX
    }


    const processCart = (data:CartType[]):ProcessedCarts[]=>{
        const groupedData = data.reduce((acc, item) => {
            const { store, ...rest } = item;
            const key = store.id; // Group by store id
          
            if (!acc[key]) {
              acc[key] = { store, cart: [] };
            }
          
            acc[key].cart.push(rest);
            return acc;
          }, {});
          
          return Object.values(groupedData);
          
    }
// Khu vuc lam viec chinh
    return (
        <div className="w-full flex flex-col gap-3">
            <PrimaryTitle name="GIỎ HÀNG" />
            <div className="w-full flex gap-3">
                {/* Handle selecting */}
                {/* Cart */}
                <CartMainContent
                    hanldeDeleteAll={hanldeDeleteAll}
                    handleDeleteStore={handleDeleteStore}
                    handleDeleteCart={handleDeleteCart}

                />
                {/* Cart */}
                {/* Calculating price */}
                <SideBar
                    data={unProcessedCart}
                    selectedCarts={selectedCarts}
                />
            </div>
            
        </div>
    )
}
// PHAI PROCESS LAI DU LIEU CHO DE LAM VIEC ? 
  