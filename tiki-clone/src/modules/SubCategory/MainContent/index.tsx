import { useEffect } from "react";
import MainContent from "../../../components/Common/MainContent";
import Title from "../../Category/MainContent/Title";
import SubCategoryProductList from "./SubCategoryProductList";

export default function SubCategoryMainContent(){
    // Get path variable
    
    useEffect(()=>{
        // axios, axios 
    
    },[])
    return(
        <MainContent>
            <Title >
                <h1 className="text-xl font-semibold">Tên cua no</h1>
            </Title>
            {/* Pass props to fetch data  */}
            <SubCategoryProductList/>
        </MainContent>
    )
}