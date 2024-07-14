import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Homepage from './homepage';
import Cart from './cart';
import Products from './games';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
        {
            index: true, // This sets the default child route to Homepage
            element: <Homepage />,
          },
      {
        path: 'homepage',
        element: <Homepage />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'products',
        element: <Products />,
      },
    ],
  },
]);

function AppRoutes() {
  return <RouterProvider router={routes} />;
}

export default AppRoutes;
