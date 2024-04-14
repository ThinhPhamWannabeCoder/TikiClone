import { Navigate, Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import RootLayout from "../components/Layout/RootLayout";
import LoginPage  from "../pages/Auth/Login";
import RegisterPage from "../pages/Auth/Register";
import NotFound from "../components/Common/NotFound";
import UserError from "../components/Error/UserError";
import Layout from "../components/Layout/Layout";
import PreviewAvatar from "../pages/Test/PreviewAvatar";
import GraphQl from "../pages/Test/GraphQl";
import HomePage from "../pages/Home";

import CategoryPage from "../pages/Buyer/CategoryPage";
import SubCategoryPage from "../pages/Buyer/SubCategoryPage";
import ProductPage from "../pages/Buyer/ProductPage";
import CommingSoon from "../pages/CommingSoon";
import CartPage from "../pages/Checkout/Cart";
import Order from "../pages/Checkout/Order";

const publicRoutes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout/>}>
        <Route path='/' element= {<RootLayout/>}>

          <Route index element={<HomePage/>}></Route>

          <Route path='checkout/payment' element={<CommingSoon/>}></Route>
          <Route path='checkout/cart' element={<CartPage/>}></Route>
          <Route path='checkout/paymnent' element={<Order/>}></Route>

          <Route path=':category' element={<CategoryPage/>}></Route>
          <Route path=':category/:subcategory' element={<SubCategoryPage/>}></Route>
          <Route path=':category/:subcategory/:product' element={<ProductPage/>}></Route>
        
          <Route path='login' element={<LoginPage/>}></Route>
          <Route path='register' element= {<RegisterPage/>}></Route>
          <Route path="preview" element={<PreviewAvatar/>}></Route>
          <Route path="graph" element={<GraphQl/>}></Route>
          <Route path='user/*' element={<Navigate to="/login" replace></Navigate>} errorElement={<UserError/>}></Route>
          <Route path='product' element={<ProductPage/>}></Route>
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Route>
    )
  )
  export default publicRoutes