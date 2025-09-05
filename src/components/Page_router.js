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
import Screenloading from "./Screenloading";
import { useState, useEffect } from "react";



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
  


function Page_router(){
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 5000);

    return () => clearTimeout(timer); // cleanup
  }, []);


    return(
       <div>
         {loading ? <Screenloading/> : <RouterProvider router={router}></RouterProvider>}
         
       </div>
    )
}

export default Page_router;