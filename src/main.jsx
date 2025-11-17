import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Router } from 'react-router';
import Root from './Router/Root.jsx';
import Banner from './component/Banner/Banner.jsx';
import Card from './component/Card/Card.jsx';
import Title from './component/Title/Title.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path:"",
        Component: Banner,
      },
      {
       path: "",
       Component: Card,
      },
      {
        path: "title",
        Component: Title,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
