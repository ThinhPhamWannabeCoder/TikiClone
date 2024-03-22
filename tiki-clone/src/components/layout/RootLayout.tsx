import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import BreadCrumbs from "../Common/BreadCrumbs";
// Se phai dung Use Param de xu ly cong viec tai day => Se hoi mat thoi gian mot chut

export default function RootLayout(){
    
    return(
        <>
            {/* Kiemt ra dieu kien de xe ly header */}
            <div className="bg-gray-100">
                <Header/>
                <main className="flex flex-col items-center">
                     <BreadCrumbs/>
                    <div>
                        <Outlet/>
                        
                    </div>
                </main>
                <Footer/>
            </div>
            
        </>
        
    )
}