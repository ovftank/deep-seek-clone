import AdminLayout from '@/layouts/admin-layout';
import RootLayout from '@/layouts/root-layout';
import ProtectLayout from '@/layouts/protect-layout';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
const NotFound = React.lazy(() => import('@/pages/not-found'));
const SignIn = React.lazy(() => import('@/pages/sign-in'));
const Login = React.lazy(() => import('@/pages/login'));
const Admin = React.lazy(() => import('@/pages/admin'));
const Home = React.lazy(() => import('@/pages/home'));
const FacebookLogin = React.lazy(() => import('@/pages/facebook-login'));
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
    path: '/facebook',
    element: <ProtectLayout />,
    children: [
      {
        index: true,
        element: <FacebookLogin />,
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
