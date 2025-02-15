import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from '@/layouts/root-layout';
import AdminLayout from '@/layouts/admin-layout';
import Home from '@/pages/home';
import Login from '@/pages/login';
import Admin from '@/pages/admin';
const NotFound = React.lazy(() => import('@/pages/not-found'));
const SignIn = React.lazy(() => import('@/pages/sign-in'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: '*',
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <NotFound />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Admin />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
