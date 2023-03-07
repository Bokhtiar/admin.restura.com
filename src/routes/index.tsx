import { Login } from "../Pages/Auth/Login";
import { Dashboard } from "../Pages/Dashboard";

/* category */
import { CategoryList } from "../Pages/Category/index";
import { CategoryCreate } from "../Pages/Category/create";

/* product */
import { ProductList } from "../Pages/Product";

/* layouts */
import { MainLayout } from "../Layouts/MainLayout";
import { ProductCreate } from "../Pages/Product/create";
import { VariantList } from "../Pages/variant";
import { VariantCreate } from "../Pages/variant/create";
import { OrderList } from "../Pages/Order";

const routesConfig = [
  // {
  //   path: "*",
  //   element: <For0For />,
  // },
  {
    path: "/login",
    element: <Login />,
  },

  /* layouts */
  {
    element: <MainLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      /* category */
      {
        path: "/category",
        element: <CategoryList />,
      },
      {
        path: "/category/create",
        element: <CategoryCreate />,
      },
      /* product */
      {
        path: "/product",
        element: <ProductList />,
      },
      {
        path: "/product/create",
        element: <ProductCreate />,
      },
      {
        path: "/product/variant",
        element: <VariantList />,
      },
      {
        path: "/product/variant/create",
        element: <VariantCreate />,
      },
      /* order */
      {
        path: "/order",
        element: <OrderList />,
      },
    ],
  },
];

export default routesConfig;
