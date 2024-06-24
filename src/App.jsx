import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Ichha from './Ichha';

import Dashboard from './pages/Dashboard';


const router = createBrowserRouter([
  { path: '/', element: <Ichha /> },
{ path: '/Dashboard', element: <Dashboard /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}