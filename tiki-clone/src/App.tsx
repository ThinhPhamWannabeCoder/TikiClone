import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Login, { login } from "./pages/Auth/Login";
import User from "./pages/User/User";
import Register from "./pages/Auth/Register";
import UserInfo, { checkData } from "./pages/User/UserInfo";
import UserNoti from "./pages/User/UserNoti";
import BuyerOrder from "./pages/User/BuyerOrder";
import UserAddress from "./pages/User/UserAddress";
import NotFound from "./components/common/NotFound";
import UserError from "./components/error/UserError";
import Layout from "./components/layout/Layout";
import UserLayout from "./components/layout/UserLayout";
import AuthProvider from "./components/auth/AuthProvider";


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
            // <User/>
            <UserLayout/>
        
        } errorElement={<UserError/>}>
          <Route path='info' element={<UserInfo/>} action={checkData}></Route>
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
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>

  )
}

export default App
