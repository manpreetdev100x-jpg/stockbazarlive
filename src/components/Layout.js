
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
function Layout(){
    return(
       <div className="min-h-screen bg-themeblack ">
         <Nav/>
        <Outlet />
       </div>
    )
}

export default Layout;