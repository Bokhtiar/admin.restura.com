import { Login } from '../Pages/Auth/Login'
import { Dashboard } from '../Pages/Dashboard'

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
        ],
    },
];

export default routesConfig