import PriceRange from "./PriceRange";
//import Rates from "./Rates";
import SecondaryTitle from "../../components/Title/SecondaryTitle";
import Shipping from "./Shipping";
import PrimaryButton from "../../components/Button/PrimaryButton";

export default function NavFilter(){
    // ALL STATES


    // ALL HANDLE FUNCTION ? 
    return(
        <>
            <SecondaryTitle name="Lọc"/>
            <Shipping/>
            <PriceRange/>
            <PrimaryButton
                name="Lọc"
                fnc={()=>{console.log("xin chao ")}}
                class="my-2"
            />
        </>
    )
}