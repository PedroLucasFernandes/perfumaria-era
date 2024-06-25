import './index.css'
import App from './App'
import React from 'react';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import EditProfile from './views/EditProfile/EditProfile';
import Contact from './views/Contact/Contact';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/edit-profile",
        element: <EditProfile />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
]);

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);