import { useEffect, useState } from "react";
import PrimaryTitle from "../../components/Title/PrimaryTitle";
import CartMainContent from "./MainContent";
import SideBar from "./SideBar";

export default function Cart(){
    // for calculating price
    const [selectedProducts, setSelectedProducts] = useState<number[]>([])
    // For ordering
    const [selectedStores, setSelectedStores] = useState<number[]>([])
    const [carts, setCarts] = useState([]);

    // // State  Selected ID -> het
    // const [productQ]
    // State Quantity

    // 
    const handleSelectedProduct = (productId : number) =>{
        // THEM SELECT
        // NEU NHU TOAN BO HANH TRONG STORE DUOC CHON (TOAN BO CHILREN)
        // CAP NHAT SELECTED STORE
        // selectedStores()
    }
    const handleSelectStore = (storeId: number)=>{
        // CAP NHAT STORE
        // CAP NHAT PRODUCT
    }
    const handleSelectedAll = (storeId: number)=>{
        // CAP NHAT STORE 
        // CAP NHAT PRODUCT
    }
    const handleDeleteCart = (cartId: number)=>{

    }
    const handleDeleteStore = (storeId: number)=>{

    }
    const hanldeDeleteAll = ()=>{}
    const handleQuanlity = ()=>{
        // API UPDATE CART
    }
    useEffect(()=>{
        // TO-DO: API FETCH PRODUCT IN CATCH
    },[])
    
// Khu vuc lam viec chinh
    return (
        <div className="w-full flex flex-col gap-3">
            <PrimaryTitle name="GIỎ HÀNG" />
            <div className="w-full flex gap-3">
                {/* Handle selecting */}
                {/* PRODUCT */}
                <CartMainContent/>
                {/* PRODUCT */}
                {/* Calculating price */}
                <SideBar/>
            </div>
            
        </div>
    )
}