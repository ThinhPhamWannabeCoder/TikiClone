import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider, useRoutes, BrowserRouter } from "react-router-dom";

import AuthProvider from "./components/auth/AuthProvider";
import router from "./routes/router.routes";
import protectedRoutes from "./routes/protected.routes";
// import routes from "./routes/router.routes";
import Provider from "./routes/router.routes";
// const routes = router()
function App() {

  return (
      <AuthProvider>
        {/* <RouterProvider router={routes}/> */}
          <Provider/>
      </AuthProvider>
    

  )
}

export default App
