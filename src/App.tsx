import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Create from './Create';
import Encrypt from './Encrypt';
import './index.css';
import AppLayout from './AppLayout';
import Home from './Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/create',
        element: <Create />,
      },
      {
        path: '/encrypt',
        element: <Encrypt />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
