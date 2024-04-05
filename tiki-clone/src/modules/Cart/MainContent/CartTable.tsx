import { DeviceTabletIcon, TrashIcon } from "@heroicons/react/24/outline";
import ContentBox from "../../../components/Common/ContentBox";
import CartCard from "./StoreCart/CartCard";
import { useEffect, useState } from "react";
import OrderStoreCard from "../../../components/Order/OrderStoreCard";
import StoreCart from "./StoreCart";

export default function CartTable(){
    // TO-DO
    // GEN DU LIEU TAI DAY




    // const hanldeDeleteAll = () =>{
    //     // TO-DO
    //     console.log("Delete All")
    // }
    // const handleDeleteProduct = () =>{
    //     // TO-DO
    //     console.log("Delete one Product")
    // }
    
    // const handleSelectAll = ()=>{
    //     // TO-DO
    //     console.log("Select All")
    // }
    // const handleSelectProduct = ()=>{
    //     // TO-DO
    //     console.log("Select Product")
    // }
    
    //   return (
    //     <>
    //         <TrashIcon className="w-5 h-5" onClick={hanldeDeleteAll}/>
    //         <TrashIcon className="w-10 h10" onClick={handleDeleteProduct}/>
    //     </>
    //   );
    // const products = [
    //     { id: 1, name: 'Sản phẩm A', price: 100, quantity: 5, store: 'Cửa hàng 1' },
    //     { id: 2, name: 'Sản phẩm B', price: 200, quantity: 3, store: 'Cửa hàng 2' },
    //     { id: 3, name: 'Sản phẩm C', price: 150, quantity: 8, store: 'Cửa hàng 1' },
    //     { id: 4, name: 'Sản phẩm D', price: 120, quantity: 2, store: 'Cửa hàng 2' },
    //     // Thêm sản phẩm khác nếu cần
    // ];

    // // Lọc và phân nhóm sản phẩm theo cửa hàng
    // const stores = {};
    // products.forEach(product => {
    //     if (!stores[product.store]) {
    //         stores[product.store] = [];
    //     }
    //     stores[product.store].push(product);
    // });

    // // State cho việc lưu trữ sản phẩm được chọn
    // const [selectedProducts, setSelectedProducts] = useState([]);

    // // Hàm để xử lý khi người dùng chọn hoặc bỏ chọn sản phẩm
    // const handleCheckboxChange = (productId) => {
    //     const isSelected = selectedProducts.includes(productId);
    //     if (isSelected) {
    //         setSelectedProducts(selectedProducts.filter(id => id !== productId));
    //     } else {
    //         setSelectedProducts([...selectedProducts, productId]);
    //     }
    // };

    return (
    //    <CartCard

    // <>
    //     <StoreCart/>
    // </>
        <>
            {
                data.map(item=>{
                    return(
                        // <CartCard prop={item}/>
                        <StoreCart 
                            store_id={item.store_id} 
                            name={item.name}
                            product={item.product}
                        
                        />
                    )
                })
            }
        </>
   
       
    );
   
}


interface cartByStore{
    store_id: number,
    name: string,
    product:
        {
            id: number,
            name: string,
            quantity: number,
            price: number
        }[]
    
}

const data:cartByStore[]=[
    {
        store_id: 1,
        name: "Apple",
        product:[
            {
            id:1,
            name: "iphone",
            quantity: 200,
            price: 340.000,
            },
            {
                id:2,
                name: "ipad",
                quantity: 300,
                price: 340.000,
            },
        ]
    },
    {
        store_id: 2,
        name: "Samsung",
        product:[
            {
                id:3,
                name: "Samsung A52",
                quantity: 150,
                price: 340.000,
            },
            {
                id:4,
                name: "Samsung A40",
                quantity: 180,
                price: 340.000,
            },
        ]
    }
]