import PaymentMainContent from "./MainContent";
import PaymentSideBar from "./SideBar";

export default function Payment(){
    //Lay thong tin van chuyen trong nay
    return(
        <div className="flex gap-3">
            <PaymentMainContent/>
            <PaymentSideBar/>
        </div>
            
            
    )
}