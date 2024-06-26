import PrimaryTitle from "../../../components/Title/PrimaryTitle";
import CartMainHeader from "./Header/CartMainHeader";
import CartTable from "./CartTable";

export default function CartMainContent(){
    return(
        <div className="flex flex-col gap-3 w-3/4">
            <CartMainHeader />
            <CartTable/>
        </div>
    )
}