
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './Router/Root.jsx';
import Banner from './component/Banner/Banner.jsx';
import Title from './component/Title/Title.jsx';
import Card from './component/Card/Card.jsx';
import Home from './component/Home.jsx/Home.jsx';
import ErrorPage from './component/ErrorPage/ErrorPage.jsx';
import Login from './component/Login.jsx/Login.jsx';
import Dashboard from './component/Dashboard/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,       
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />    
      },
      {
        path: "banner",
        element: <Banner />   
      },
      {
        path: "title",
        element: <Title />    
      },
      {
        path: "card",
        element: <Card />     
      },
      {
        path: "Login",
        element: <Login />
      },
      {
        path: "Dashboard",
        element: <Dashboard />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

