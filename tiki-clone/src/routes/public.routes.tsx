import { Navigate, Route, createBrowserRouter, createRoutesFromElements, useNavigate } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import Login  from "../pages/Auth/Login";
import User from "../pages/User/User";
import Register from "../pages/Auth/Register";
import UserInfo  from "../pages/User/UserInfo";
import UserNoti from "../pages/User/UserNoti";
import BuyerOrder from "../pages/User/BuyerOrder";
import UserAddress from "../pages/User/UserAddress";
import NotFound from "../components/common/NotFound";
import UserError from "../components/error/UserError";
import Layout from "../components/layout/Layout";
import UserLayout from "../components/layout/UserLayout";
import FileUpload from "../pages/Test/File";
import PreviewAvatar from "../pages/Test/PreviewAvatar";
import GraphQl from "../pages/Test/GraphQl";

const publicRoutes = createBrowserRouter(
    createRoutesFromElements(
      <Route  element={<Layout/>}>
        <Route path='/' element= {<RootLayout/>}>
          {/* <Route path='auth'></Route> */}
          <Route path='login' element={<Login/>}></Route>
          <Route path='register' element= 
          {<Register/>}
        >

          </Route>
          {/* <Route path="test" element={<FileUpload/>}></Route> */}
          <Route path="preview" element={<PreviewAvatar/>}></Route>
          <Route path="graph" element={<GraphQl/>}></Route>
          <Route path='user' element={
              // <User/
              // <UserLayout/>
              <Navigate to="/login" replace></Navigate>

          
          } errorElement={<UserError/>}>
            
            {/* <Route path='info' element={<UserInfo/>} action={updateUserInfo}></Route>
            <Route path='noti' element={<UserNoti/>}></Route>
            <Route path='order' element={<BuyerOrder/>}></Route>
            <Route path='address' element={<UserAddress/>}></Route> */}
          </Route>
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Route>
    )
  )
  export default publicRoutes