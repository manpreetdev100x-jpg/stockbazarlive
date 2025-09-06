
import { useState } from "react";
import "./style.css"
// import { NavLink } from "react-router";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Nav() {

  const [show, showhandler] = useState(false);
  const navHandler = () => {
    if (show == false) {
      showhandler(true);
    }
    if (show == true) {
      showhandler(false);
    }
  }
  const navg = useNavigate();

  return (
    <div className=" relative flex justify-center   bg-themeblack z-50 ">

     <div className="w-full bg-black flex justify-center z-50">
       <div className=" relative h-16  lg:h-20 bg-themeblack glass-green2 flex justify-center  items-center  z-50 lg:fixed mt-4">
        <div className="  flex  flex-row w-full px-0 md:mx-4">


          <div className=" w-4/6 md:w-1/3 md:p-3  flex items-center" onClick={() => { navg("/") }}>
            <img className=" w-5/6 h-auto md:w-2/3" src="/public/images/stocklogo.png" />
          </div>




          <div className="  w-2/6 flex items-center justify-end px-3 md:hidden ">
            <img className=" w-10" onClick={navHandler} src="/images/nav-icon.png" />

          </div>


       <div className="w-2/3 md:flex flex-row justify-end items-center md:gap-10 lg:gap-20 px-10 text-textwhite font-semibold hidden  ">
            <Link to="/courses"> <div className=" flex items-center lg:text-xl">Courses</div></Link>
            {/* <Link to="/blog"><div className=" flex items-center text-xl" >Performance</div></Link> */}
            <Link to="/about_us"><div className=" flex items-center lg:text-xl">About us</div></Link>

            <Link to="/contact"> <div className=" flex items-center lg:text-xl">Contact us</div></Link>
          </div>


        </div>
      </div>
     </div>
      <div className={`w-full h-auto absolute ${show ? " mt-20" : "-mt-48"}  mt-20 mx-3  transition-all duration-700  text-white  font-bold font-sans flex flex-col items-center  lg:hidden`}>
        <div className="bg-themegreen  bg-opacity-50 w-5/6 p-5 mx-5 flex flex-col items-center border border-transparent rounded-b-xl z-40">
           <Link to="/courses"> <div className=" flex items-center text-op text-xl text-white ">Courses</div></Link>
            {/* <Link to="/blog"><div className=" flex items-center text-xl" >Performance</div></Link> -mt-40"  */}
            <Link to="/about_us"><div className=" flex items-center text-xl">About us</div></Link>

            <Link to="/contact"> <div className=" flex items-center text-xl">Contact us</div></Link>
      </div>
        </div>
    </div>
  );
}

export default Nav;


   