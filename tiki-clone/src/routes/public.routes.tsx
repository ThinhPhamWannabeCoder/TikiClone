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
import UserTest from "../pages/Test/UserTest";

import CategoryPage from "../pages/Buyer/CategoryPage";
import SubCategoryPage from "../pages/Buyer/SubCategoryPage";
import ProductPage from "../pages/Buyer/ProductPage";
import Test from "../pages/Test/test";

const publicRoutes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout/>}>
        <Route path='/' element= {<RootLayout/>}>

          <Route index element={<HomePage/>}></Route>
          
          <Route path='category/:category' element={<CategoryPage/>}></Route>
          <Route path='category/:category/subcategory/:subcategory' element={<SubCategoryPage/>}></Route>
          <Route path='category/:category/subcategory/:subcategory/product/:product' element={<ProductPage/>}></Route>
          <Route path='login' element={<LoginPage/>}></Route>
          <Route path='register' element= {<RegisterPage/>}></Route>
          <Route path="preview" element={<PreviewAvatar/>}></Route>
          <Route path="graph" element={<GraphQl/>}></Route>
          <Route path="test" element={<Test/>}></Route>
          <Route path='user/*' element={<Navigate to="/login" replace></Navigate>} errorElement={<UserError/>}></Route>
          <Route path='product' element={<ProductPage/>}></Route>
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Route>
    )
  )
  export default publicRoutes