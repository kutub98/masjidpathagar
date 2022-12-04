
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Component/Home/Home';

const Router = () => {
   const router = createBrowserRouter(
   [
    {path: '/', element: <Home></Home>},
    {path: '/home', element: <Home></Home>}
   ]
   )

    
    return (
        <div>
          <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Router;