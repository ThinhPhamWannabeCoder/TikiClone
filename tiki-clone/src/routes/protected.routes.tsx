import { Navigate, Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import LoginPage from "../pages/Auth/Login";
import RegisterPage from "../pages/Auth/Register";
import UserInfo from "../pages/User/UserInfo";
import UserNoti from "../pages/User/UserNoti";
import BuyerOrder from "../pages/User/BuyerOrder";
import UserAddress from "../pages/User/UserAddress";
import NotFound from "../components/common/NotFound";
import UserError from "../components/error/UserError";
import Layout from "../components/layout/Layout";
import UserLayout from "../components/layout/UserLayout";
import HomePage from "../pages/Home";

const publicRoutes = createBrowserRouter(
    createRoutesFromElements(
      <Route  element={<Layout/>}>
        <Route path='/' element= {<RootLayout/>}>
        <Route index element={<HomePage/>}>
              {/* Category 
                    SubCategory
                      Product*/}
          </Route>
          <Route path='login' element={<LoginPage/>} ></Route>
          <Route path='register' element= {<RegisterPage/>}></Route>
          <Route path='user' element={<UserLayout/>} errorElement={<UserError/>}>
            <Route index element={<Navigate to='info'></Navigate>}></Route>
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
  export default publicRoutes