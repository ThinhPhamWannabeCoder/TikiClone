import PrimaryTitle from "../../../components/Title/PrimaryTitle";
import CartMainHeader from "./Header/CartMainHeader";
import CartTable from "./CartTable";
// interface : selectedId
interface propsType{
    handleSelectedCart: (cartdId: number) => void,
    handleSelectedStore: (storeId: number) => void,
    handleSelectAll: () => void,
    hanldeDeleteAll: ()=> void,
    handleDeleteStore: (storeId: number) => void,
    handleDeleteCart: (cartId: number) => void,

    selectedCarts: number[]
    allState: boolean,
    selectedStores: number[],
    data: object[],
    //carts: object[],
}
export default function CartMainContent(prop: propsType){
    // FETCH DU LIEU TAI DAY
    // SET STATE
    

    // 
    

    // CREATE FUNCTION  
    // TO-DO 1
    // FETCH ALL CART -> PROCESS TAI API

    // 
    // Khi quantity thay doi -> update len table cart
    // Check xem co duoc update khong -> Neu khong thi thong bao

    return(
        <div className="flex flex-col gap-3 w-4/5">
            <CartMainHeader 
                handleSelectAll={prop.handleSelectAll} 
                allState={prop.allState}
                hanldeDeleteAll={prop.hanldeDeleteAll}
            />
            {/* HandleStoreOnchange, Handle Delete Store */}
            <CartTable
                handleSelectedCart={prop.handleSelectedCart}
                handleSelectedStore={prop.handleSelectedStore}
                selectedStores={prop.selectedStores}
                data={prop.data}
                selectedCarts={prop.selectedCarts}
                handleDeleteStore={prop.handleDeleteStore}
                handleDeleteCart={prop.handleDeleteCart}
            />
        </div>
    )
}