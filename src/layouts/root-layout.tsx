import React from 'react';
import { Outlet } from 'react-router';

const RootLayout: React.FC = () => {
  return (
    <>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>DeepSeek</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
