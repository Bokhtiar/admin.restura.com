import { Login } from '../Pages/Auth/Login'
import { Dashboard } from '../Pages/Dashboard'
import { CategoryList } from '../Pages/Category/index'

/* layouts */
import { MainLayout } from '../Layouts/MainLayout'


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
        ],
    },
];

export default routesConfig