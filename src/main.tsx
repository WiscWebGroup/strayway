import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Profile from './pages/profile';
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core';
import Navbar from './components/navbar';
import './global.css';
import Report from './pages/report';
import Donate from './pages/donate';
import Offer from './pages/offer';
import Index from './pages';
import { Errorpage } from './pages/errorPage';

function Main() {
  const router = createBrowserRouter([
    {
      element: <Navbar />,
      children: [
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path: '/report',
          element: <Report />,
        },
        {
          path: '/donate',
          element: <Donate />,
        },
        {
          path: '/offer',
          element: <Offer />,
        },
      ],
      errorElement: <Errorpage />,
    },
    {
      path: '/index',
      element: <Index />,
    },
  ]);

  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
