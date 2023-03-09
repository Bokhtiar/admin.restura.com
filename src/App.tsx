// import routesConfig from '../src/routes/index'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// const router = createBrowserRouter(routesConfig);

// const App = () => {
//   return <RouterProvider router={router} />;
// };

// export default App; 

import { Navigate, useRoutes } from "react-router-dom";
import {BrowserRouter as Router} from 'react-router-dom';
import { MainLayout } from "./Layouts/MainLayout";
import { Four0Four } from "./Pages/404";
import { Login } from "./Pages/Auth/Login";
import { OrderList } from "./Pages/Order";
import { permittedRoutes } from "./routes";


const App = () => {
  const mainRoutes = {
    path: "/",  
    element: <MainLayout />,
    children: [
      { path: "*", element: <Navigate to="/404" /> },
      { path: "", element: <h2>Home page</h2>},
      { path: "login", element: <Login /> },
      { path: "404", element: <Four0Four /> },
    ], 
  };

  const routing = useRoutes([mainRoutes, ...permittedRoutes()]);

  return (
    <>
      {routing}
    </>
  );
};

export default App