// import { Login } from "../Pages/Auth/Login";
// import { Dashboard } from "../Pages/Dashboard";

import { DashboardLayout } from "../Layouts/DashboardLayout";

// /* category */
import { CategoryList } from "../Pages/Category/index";
import { CategoryCreate } from "../Pages/Category/create";

// /* product */
import { ProductList } from "../Pages/Product";

// /* layouts */
import { MainLayout } from "../Layouts/MainLayout";
import { ProductCreate } from "../Pages/Product/create";
import { VariantList } from "../Pages/variant";
import { VariantCreate } from "../Pages/variant/create";
import { OrderList } from "../Pages/Order";

// const routesConfig = [
//   // {
//   //   path: "*",
//   //   element: <For0For />,
//   // },
//   {
//     path: "/login",
//     element: <Login />,
//   },

//   /* layouts */
//   {
//     element: <MainLayout />,
//     children: [
//       {
//         path: "/dashboard",
//         element: <Dashboard />,
//       },
//       /* category */
//       {
//         path: "/category",
//         element: <CategoryList />,
//       },
//       {
//         path: "/category/create",
//         element: <CategoryCreate />,
//       },
//       /* product */
//       {
//         path: "/product",
//         element: <ProductList />,
//       },
//       {
//         path: "/product/create",
//         element: <ProductCreate />,
//       },
//       {
//         path: "/product/variant",
//         element: <VariantList />,
//       },
//       {
//         path: "/product/variant/create",
//         element: <VariantCreate />,
//       },
//       /* order */
//       {
//         path: "/order",
//         element: <OrderList />,
//       },
//     ],
//   },
// ];

// export default routesConfig;
import { Navigate, useRoutes } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard";
import { getToken } from "../utils/helper";
import { Four0Four } from "../Pages/404";
import { Login } from "../Pages/Auth/Login";
import { Ingredient } from "../Pages/Ingredient";

const appRoutes = [
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <Four0Four /> },
      { path: "", element: <Dashboard /> },

      /* category */
      { path: "category", element: <CategoryList /> },
      { path: "category/create", element: <CategoryCreate /> },
      { path: "category/edit/:id", element: <CategoryCreate /> },
      
      /* ingredient */
      { path: "ingredient", element: <Ingredient /> },

      /* product */
      { path: "product", element: <ProductList /> },
      { path: "product/create", element: <ProductCreate /> },
      { path: "product/edit/:id", element: <ProductCreate /> },
      { path: "product/variant", element: <VariantList /> },
      { path: "product/variant/create", element: <VariantCreate /> },
      { path: "product/variant/edit/:id", element: <VariantCreate /> },
      
      /* order */
      { path: "order", element: <OrderList /> },
    ],
  },
];

/* Generate permitted routes */
export const permittedRoutes = () => {
  const token = getToken();
  if (token) {
    return appRoutes;
  }else{
    return [{ path: "login", element: <Login /> }]
  }
  
  // return [];
};
