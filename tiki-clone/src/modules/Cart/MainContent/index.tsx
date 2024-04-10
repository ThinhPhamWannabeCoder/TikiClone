import PrimaryTitle from "../../../components/Title/PrimaryTitle";
import CartMainHeader from "./Header/CartMainHeader";
import CartTable from "./CartTable";
// interface : selectedId

export default function CartMainContent(){
    // FETCH DU LIEU TAI DAY
    // SET STATE
    

    // 
    const handleSelectAll = ()=>{
        // setState
    }
    const handleSelect = ()=>{
        // setState
    }

    // CREATE FUNCTION  
    // TO-DO 1
    // FETCH ALL CART -> PROCESS TAI API

    // 
    // Khi quantity thay doi -> update len table cart
    // Check xem co duoc update khong -> Neu khong thi thong bao

    return(
        <div className="flex flex-col gap-3 w-4/5">
            {/* Handle tick all, handle delete All */}
            <CartMainHeader/>
            {/* HandleStoreOnchange, Handle Delete Store */}
            <CartTable/>
        </div>
    )
}