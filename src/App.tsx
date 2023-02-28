import routesConfig from '../src/routes/index'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter(routesConfig);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;