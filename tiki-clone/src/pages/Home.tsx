import OuterContainer from "../components/Common/OuterContent";
import Home from "../modules/Home";

export default function HomePage(){
    // Khong fetch tai day
    return(
        <OuterContainer class="flex gap-4 mt-4" >
            <Home/>
        </OuterContainer>

    )
}