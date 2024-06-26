import { Navigate, Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import RootLayout from "../components/Layout/RootLayout";
import LoginPage from "../pages/Auth/Login";
import RegisterPage from "../pages/Auth/Register";
import UserInfo from "../pages/User/UserInfo";
import UserNoti from "../pages/User/UserNoti";
import BuyerOrder from "../pages/User/BuyerOrder";
import UserAddress from "../pages/User/UserAddress";
import NotFound from "../components/Common/NotFound";
import UserError from "../pages/Error/UserError";

import Layout from "../components/Layout/Layout";
import UserLayout from "../components/Layout/UserLayout";
import HomePage from "../pages/Home";
import CommingSoon from "../pages/CommingSoon";
import CartPage from "../pages/Checkout/Cart";
import Order from "../pages/Checkout/Order";
import CategoryPage from "../pages/Buyer/CategoryPage";
import SubCategoryPage from "../pages/Buyer/SubCategoryPage";
import ProductPage from "../pages/Buyer/ProductPage";

const publicRoutes = createBrowserRouter(
    createRoutesFromElements(
      <Route  element={<Layout/>}>
        <Route path='/' element= {<RootLayout/>}>
        <Route index element={<HomePage/>}>
              {/* Category 
                    SubCategory
                      Product*/}
          </Route>
          <Route path='checkout/payment' element={<Order/>}></Route>
          <Route path='checkout/cart' element={<CartPage/>}></Route>
          <Route path='checkout/paymnent' element={<Order/>}></Route>
          <Route path=':category' element={<CategoryPage/>}></Route>
          {/* <Route path=':category/:subcategory' element={<SubCategoryPage/>}></Route> */}
          {/* <Route path=':category/:subcategory/:product' element={<ProductPage/>}></Route> */}
          <Route path='product/:productId' element={<ProductPage/>}></Route>

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