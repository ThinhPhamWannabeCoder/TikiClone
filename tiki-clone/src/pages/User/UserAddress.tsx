import ContentBox from "../../components/Common/ContentBox";
import PrimaryTitle from "../../components/Title/PrimaryTitle";
import UserAddressModule from "../../components/User/Address";
import UserBox from "../../components/User/UserBox";

export default function UserAddress(){
    return(
        <>
            {/* <PrimaryTitle name="Sổ địa chỉ" />
             */}
             <h1 className="text-2xl text-slate-600 mb-4">Sổ địa chỉ</h1>
            <UserAddressModule/>
        </>
        
    )
}