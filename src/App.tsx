// import routesConfig from '../src/routes/index'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// const router = createBrowserRouter(routesConfig);

// const App = () => {
//   return <RouterProvider router={router} />;
// };

// export default App; 

import { Navigate, useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { MainLayout } from "./Layouts/MainLayout";
import { Four0Four } from "./Pages/404";
import { Login } from "./Pages/Auth/Login";
import { Register } from "./Pages/Auth/Register";
import { permittedRoutes } from "./routes";


const App = () => {
  const mainRoutes = {
    path: "/",  
    element: <MainLayout />,
    children: [
      { path: "*", element: <Navigate to="/404" /> },
      { path: "", element: <h2>Home page</h2>},
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "404", element: <Four0Four /> },
    ], 
  };

  const routing = useRoutes([mainRoutes, ...permittedRoutes()]);

  return (
    <>
      {routing}
      <ToastContainer />
    </>
  );
};

export default App