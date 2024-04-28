import ContentBox from "../../Common/ContentBox";
import UserAddressItem from "./UserAddressItem";

export default function UserAddressModule(){
    return(
        <div className="flex flex-col gap-3 ">
            <ContentBox class="p-5 text-center rounded-none hover:bg-slate-400 cursor-pointer hover:text-white">
                THÊM ĐỊA CHỈ
            </ContentBox>
            <ContentBox class="p-5">
                <UserAddressItem/>
            </ContentBox>
        </div>
    )
}