import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root';
import Home from './components/home/Home';
import Pages from './components/pages/Pages';
// import Jobs from './components/jobs/Jobs';
import FeaturedJobs from './components/featuredJobs/FeaturedJobs';
import AppliedJobs from './components/appliedJobs/AppliedJobs';
import ViewDetails from './components/viewDetails/ViewDetails';


const router = createBrowserRouter([
  {
    path : '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/pages',
        element: <Pages></Pages>
      },
      {
        path: '/jobs',
        element: <FeaturedJobs></FeaturedJobs>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/details',
        element: <ViewDetails></ViewDetails>
      }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
