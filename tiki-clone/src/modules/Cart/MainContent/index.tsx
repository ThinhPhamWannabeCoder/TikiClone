import PrimaryTitle from "../../../components/Title/PrimaryTitle";
import CartMainHeader from "./Header/CartMainHeader";
import CartTable from "./CartTable";
// interface : selectedId
interface propsType{
    hanldeDeleteAll: ()=> void,
    handleDeleteStore: (storeId: number) => void,
    handleDeleteCart: (cartId: number) => void,
    //carts: object[],
}
export default function CartMainContent(prop: propsType){
    return(
        <div className="flex flex-col gap-3 w-4/5">
            <CartMainHeader 
                hanldeDeleteAll={prop.hanldeDeleteAll}
            />
            {/* HandleStoreOnchange, Handle Delete Store */}
            <CartTable
                handleDeleteStore={prop.handleDeleteStore}
                handleDeleteCart={prop.handleDeleteCart}
            />
        </div>
    )
}