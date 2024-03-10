import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
// Se phai dung Use Param de xu ly cong viec tai day => Se hoi mat thoi gian mot chut

export default function RootLayout(){
    
    return(
        <>
            {/* Kiemt ra dieu kien de xe ly header */}
            <Header/>

            <div>
                This is root Layout
            </div>
            <main className="flex flex-col items-center">
                <Outlet/>
            </main>
            <div>
                <Footer/>
            </div>
        </>
        
    )
}