import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Login from "./pages/Auth/Login";
import {login} from "./utils/auth"
import User from "./pages/User/User";
import Register from "./pages/Auth/Register";
import UserInfo from "./components/user/UserInfo";
import UserNoti from "./components/user/UserNoti";
import BuyerOrder from "./components/user/BuyerOrder";
import UserAddress from "./components/user/UserAddress";
import NotFound from "./components/common/NotFound";
import UserError from "./components/error/UserError";
import Layout from "./components/layout/Layout";


// Sap xep route trong nay buoc 1, buoc sau la de router ben ngoai
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  element={<Layout/>}>
      <Route path='/' element={<RootLayout/>}>
        {/* <Route path='auth'></Route> */}
        <Route path='login' element={<Login/>} action={login}></Route>
        <Route path='register' element={<Register/>}></Route>
        {/* Route use nay dang ra nen la phan layout */}
        
        <Route path='user' element={
            <User/>
        
        } errorElement={<UserError/>}>
          <Route path='info' element={<UserInfo/>}></Route>
          <Route path='noti' element={<UserNoti/>}></Route>
          <Route path='order' element={<BuyerOrder/>}></Route>
          <Route path='address' element={<UserAddress/>}></Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Route>

    
  )
)
function App() {

  return (
     <RouterProvider router={router}/>

  )
}

export default App
