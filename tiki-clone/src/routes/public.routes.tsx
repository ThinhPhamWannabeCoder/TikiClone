import { Navigate, Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import LoginPage  from "../pages/Auth/Login";
import RegisterPage from "../pages/Auth/Register";
import NotFound from "../components/common/NotFound";
import UserError from "../components/error/UserError";
import Layout from "../components/layout/Layout";
import PreviewAvatar from "../pages/Test/PreviewAvatar";
import GraphQl from "../pages/Test/GraphQl";
import HomePage from "../pages/Home";
import SubCategory from "../components/Product/Category/SubCategory/SubCategoryPage";
import UserTest from "../pages/Test/UserTest";

const publicRoutes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout/>}>
        <Route path='/' element= {<RootLayout/>}>
          {/* <Route path='auth'></Route> */}
          <Route index element={<HomePage/>}>
              {/* Category 
                    SubCategory
                      Product*/}
              
          </Route>
          <Route path=":subCategory" element={<SubCategory/>}></Route>
          <Route path='login' element={<LoginPage/>}></Route>
          <Route path='register' element= {<RegisterPage/>}></Route>
          <Route path="preview" element={<PreviewAvatar/>}></Route>
          <Route path="graph" element={<GraphQl/>}></Route>
          <Route path="usertest" element={<UserTest/>}></Route>
          <Route path='user/*' element={<Navigate to="/login" replace></Navigate>} errorElement={<UserError/>}>
          </Route>
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Route>
    )
  )
  export default publicRoutes