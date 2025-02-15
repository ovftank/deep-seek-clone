import React from 'react';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';
import FixedContact from '@/components/fixed-contact';
import BackgroundBubbles from '@/components/background-bubbles';

const AdminLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <head>
        <title>DeepSeek Admin</title>
        <link rel="shortcut icon" href="/icon.ico" type="image/x-icon" />
      </head>
      <BackgroundBubbles />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#ffffff',
            color: '#000000',
            border: '1px solid #000000',
          },
          success: {
            iconTheme: {
              primary: '#000000',
              secondary: '#ffffff',
            },
          },
          error: {
            iconTheme: {
              primary: '#000000',
              secondary: '#ffffff',
            },
          },
        }}
      />
      <Outlet />
      <FixedContact />
    </div>
  );
};

export default AdminLayout;
