import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Login from "./pages/Auth/Login";
import {login} from "./utils/Auth"

// Sap xep route trong nay buoc 1, buoc sau la de router ben ngoai
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path='login' element={<Login/>} action={login}></Route>
    </Route>
  )
)
function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
