import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
  
  import React from "react";
  import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import Wrap from "./Wrap";
import Course from "./Course";
import ContactForm from "./ContactForm"
import About_us from "./About_us";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {path:"/",
            element:<Wrap/>
        },
        {path:"/courses",
            element:<Course/>
        },
        {path:"/course",
            element:<Wrap/>
        },
        {path:"/about_us",
            element:<About_us/>
        },
        {path:"/contact",
            element:<ContactForm/>
        },

      ]
    },
  ]);
  
//   const root = document.getElementById("root");
  
//   ReactDOM.createRoot(root).render(
//     <RouterProvider router={router} />
//   );

function Page_router(){
    return(
        <RouterProvider router={router}></RouterProvider>
    )
}

export default Page_router;