// import { Login } from "../Pages/Auth/Login";
// import { Dashboard } from "../Pages/Dashboard";

import { DashboardLayout } from "../Layouts/DashboardLayout";

// /* category */
// import { CategoryList } from "../Pages/Category/index";
// import { CategoryCreate } from "../Pages/Category/create";

// /* product */
// import { ProductList } from "../Pages/Product";

// /* layouts */
// import { MainLayout } from "../Layouts/MainLayout";
// import { ProductCreate } from "../Pages/Product/create";
// import { VariantList } from "../Pages/variant";
// import { VariantCreate } from "../Pages/variant/create";
// import { OrderList } from "../Pages/Order";

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
import { CategoryList } from "../Pages/Category";
import { getToken } from "../utils/helper";

const appRoutes = [
  { 
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "*", element: <Navigate to="/404" /> },
      { path: "", element: <Dashboard /> },
      { path: "category", element: <CategoryList /> },
      // { path: "resume", element: <ResumrIndex /> },
      // { path: "jobs", element: <JobIndex /> },
      // { path: "jobs/create", element: <JobCreate /> },
      // { path: "jobs/show/:id", element: <JobShow /> },
      // { path: "jobs/applicants/:id", element: <ApplicantsIndex /> },
      // { path: "jobs/applicants/profile/:id", element: <ApplicantProfile /> },
      // { path: "applications", element: <ApplicationIndex /> },
      // { path: "applications/:id", element: <ApplicationShow /> },
      // { path: "change-password", element: <ChangePassword /> },
    ],
  },
];

/* Generate permitted routes */
export const permittedRoutes = () => {
  const token = getToken();
  if (token) {
    return appRoutes;
  }

  return [];
};
