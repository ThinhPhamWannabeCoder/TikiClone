import { useEffect, useState } from "react";
import PrimaryTitle from "../../components/Title/PrimaryTitle";
import CartMainContent from "./MainContent";
import SideBar from "./SideBar";
import productApi from "../../services/buyer.services";
import { useDispatch, useSelector } from "react-redux";
import { CartType } from "../../types/user.types";
import { add, remove } from "../../redux/cart/cartSlice";
import { RootState } from "../../redux/store";

export default function Cart(){
    const carts = useSelector((state:RootState)=>state.cart)
    const dispatch = useDispatch();
    const handleAddActiveCart=()=>{
        dispatch(
            add(sampleData)
        )
    }
    const handleCheckcart=()=>{
        console.log(carts)
    }
    const handleRemoveCart=(cartId: number)=>{
        dispatch(
            remove(cartId)
        )
    }
    // for calculating price
    const [allState, setAllState] = useState<boolean>(false);
    const [selectedCarts, setSelectedCarts] = useState<number[]>([])
    const [selectedStores, setSelectedStores] = useState<number[]>([])
    const [allCart, setAllCart] = useState<object[]>([])


    // // State  Selected ID -> het
    // const [CartQ]
    // State Quantity

    // 
    useEffect(()=>{

        setAllCart(processCart(sampleData))
    },[])
    const handleSelectedCart = (CartId : number) =>{
        if(selectedCarts.includes(CartId)){
            const updateCarts = selectedCarts.filter(id => id !== CartId);
            setSelectedCarts(updateCarts)
        }
        else{
            setSelectedCarts([...selectedCarts, CartId])
        }
    }
    const handleSelectedStore = (storeId: number)=>{
        if(selectedStores.includes(storeId)){
            console.log("test1")

            const updateStores = selectedStores.filter(id => id !== storeId);
            setSelectedStores(updateStores)

            const filteredCartItems = allCart.filter(item => item.store.id === storeId);

            const updateCart =  filteredCartItems.flatMap(item =>
                item.cart.map(cartItem => cartItem.id)
              );
              const currentCart = selectedCarts.filter(item=>!updateCart.includes(item))
            setSelectedCarts(currentCart)
            // UNSELECT ALL Cart
        }
        else{

            setSelectedStores([...selectedStores, storeId])
            const filteredCartItems = allCart.filter(item => item.store.id === storeId);
            // const currentCart = selectedCarts.filter(item=>item!===)
            const updateCart =  filteredCartItems.flatMap(item =>
                item.cart.map(cartItem => cartItem.id)
              );
              const currentCart = selectedCarts.filter(item=>!updateCart.includes(item))
            setSelectedCarts([...currentCart, ...updateCart])
        }
    }
    const handleSelectAll = ()=>{
        // CAP NHAT STORE 
        // sampleData.map(cart =>)
        // CAP NHAT Cart
        if(allState){
            setAllState(false);
            setSelectedCarts([]);
            setSelectedStores([]);
        }
        else{
            setAllState(true)
            const allStoreId = allCart.map(item => item.store.id);
            const carts = allCart.map(item => item.cart)
            const flatCarts = carts.reduce((acc,cur)=> acc.concat(cur));
            const allCartsId = flatCarts.map(item => item.id);

            setSelectedStores([...allStoreId])
            setSelectedCarts([...allCartsId])
        }
        
    }
    const handleDeleteCart = (cartId: number)=>{
        // API DELETE CART
        // UPDATE STATE
        console.log(`delete cart ${cartId}`)

    }
    const handleDeleteStore = (storeId: number)=>{
        console.log(`delete store ${storeId}`)
    }
    const hanldeDeleteAll = ()=>{
        console.log("Delete All");
        // API 
        // UDPATE STATE
        // UPDATE REDUX
    }
    const handleQuantity = (data:{cartId: number, quantity: number})=>{
        // API UPDATE CART
    }
    useEffect(()=>{
        // TO-DO: API FETCH Cart IN CATCH
        // console.log(selectedCarts)
        if(selectedCarts.length!=0){
            // console.log(selectedCarts)
            const carts = allCart.map(item => item.cart.map(cart => cart.id))

            const indexes = carts.reduce((acc, arr, index)=>{
                if(arr.every(val=>selectedCarts.includes(val))){
                    // console.log(val)
                    acc.push(index)
                }
                return acc
            },[])
            if(indexes.length===allCart.length){
                // handleSelectAll();
                const updateStore = indexes.map(i => (allCart[i].store.id))
                setSelectedStores([...updateStore])
                setAllState(true)

            }
            else if(indexes.length>0){
                const updateStore = indexes.map(i => (allCart[i].store.id))
                setSelectedStores([...updateStore])
                setAllState(false)
            }
            else{
                setSelectedStores([])
                setAllState(false)

            }
        }
        
    },[selectedCarts])
    const processCart = (data:object[])=>{
        const groupedData = data.reduce((acc, item) => {
            const { store, ...rest } = item;
            const key = store.id; // Group by store id
          
            if (!acc[key]) {
              acc[key] = { store, cart: [] };
            }
          
            acc[key].cart.push(rest);
            return acc;
          }, {});
          
          // Convert object back to array format
        //   console.log(Object.values(groupedData))
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
                    handleSelectedStore={handleSelectedStore}
                    handleSelectedCart={handleSelectedCart}
                    handleSelectAll={handleSelectAll}
                    allState={allState}
                    selectedStores={selectedStores}
                    data={allCart}
                    selectedCarts={selectedCarts}
                    hanldeDeleteAll={hanldeDeleteAll}
                    handleDeleteStore={handleDeleteStore}
                    handleDeleteCart={handleDeleteCart}

                />
                {/* Cart */}
                {/* Calculating price */}
                <SideBar
                    data={sampleData}
                    selectedCarts={selectedCarts}
                />
            </div>
            <button type="button" className="p-3 bg-red-500" onClick={()=>handleAddActiveCart()}>Test Add Cart</button>
            <button type="button" className="p-3 bg-green-500" onClick={()=>handleCheckcart()}>Test check Cart</button>
            <button type="button" className="p-3 bg-green-500" onClick={()=>handleRemoveCart(2)}>Test check Cart</button>
        </div>
    )
}
// PHAI PROCESS LAI DU LIEU CHO DE LAM VIEC ? 
const sampleData:CartType[] = [
    {
        id: 1,
        store:{
            id:1,
            name: "Apple",
        },
        product:{
            id:1,
            name: "Iphone",
            price: 555954445,
            primaryImage: "",
        },
        quantity: 1
    },
    {
        id: 2,
        store:{
            id:1,
            name: "Apple",
        },
        product:{
            id:3,
            name: "Ipad",
            price: 555945,
            primaryImage: "",
        },
        quantity: 100
    },
    {
        id: 3,
        store:{
            id:2,
            name: "Samsung",
        },
        product:{
            id:4,
            name: "Tablet",
            price: 887654,
            primaryImage: "",
        },
        quantity: 200
    },
    {
        id: 4,
        store:{
            id:2,
            name: "Samsung",
        },
        product:{
            id:4,
            name: "Tablet",
            price: 887654,
            primaryImage: "",
        },
        quantity: 200
    }
]