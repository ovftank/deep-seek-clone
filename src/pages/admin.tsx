import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Admin: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin/login');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-6 text-3xl font-bold text-black">Admin Dashboard</h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-black p-6">
            <h2 className="mb-2 text-xl font-semibold text-black">Users</h2>
            <p className="text-black">Manage your users here</p>
          </div>

          <div className="rounded-lg border border-black p-6">
            <h2 className="mb-2 text-xl font-semibold text-black">Content</h2>
            <p className="text-black">Manage your content here</p>
          </div>

          <div className="rounded-lg border border-black p-6">
            <h2 className="mb-2 text-xl font-semibold text-black">Settings</h2>
            <p className="text-black">Manage your settings here</p>
          </div>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem('isLoggedIn');
            navigate('/admin/login');
          }}
          className="mt-6 rounded bg-black px-4 py-2 text-white transition-colors hover:bg-gray-800"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Admin;
