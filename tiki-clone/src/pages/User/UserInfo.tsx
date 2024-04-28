
import ContentBox from "../../components/Common/ContentBox";
import UserBox from "../../components/User/UserBox";
import UserInformation from "../../modules/User/Information/UserInformation";


export default function UserInfo(){

    return(
        <ContentBox class="flex p-5">
            <UserInformation/>      
        </ContentBox>

    )
}
