import { useEffect, useState } from "react";
import PrimaryTitle from "../../components/Title/PrimaryTitle";
import CartMainContent from "./MainContent";
import SideBar from "./SideBar";
import productApi from "../../services/buyer.services";
import { useDispatch, useSelector } from "react-redux";
import { CartType } from "../../types/user.types";
import { init } from "../../redux/cart/cartSlice";
import { RootState } from "../../redux/store";

export default function Cart(){
    // for calculating price

    const user = useSelector((state:RootState) => state.auth.user)
    const dispatch = useDispatch();
   
    useEffect(()=>{
        // GET CART HERE
        productApi.getUserCart({userId:user?.id as number})
            .then(response =>{

                dispatch(
                    init(response.data)
                )
            })
            .catch(error => {
                console.log(error.message)
            })
    },[])



 
// Khu vuc lam viec chinh
    return (
        <div className="w-full flex flex-col gap-3">
            <PrimaryTitle name="GIỎ HÀNG" />
            <div className="w-full flex gap-3">
                <CartMainContent/>
                <SideBar/>
            </div>
            
        </div>
    )
}
// PHAI PROCESS LAI DU LIEU CHO DE LAM VIEC ? 
  