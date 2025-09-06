import logo from "./images/greenlogo2.jpg"


import logo1 from "./images/greenlogo1.jpg"
function Screenloading() {
  return (
    <div className="w-screen h-screen bg-themeblack flex justify-center  items-center ">
      <img className="animate-pulse hidden md:block w-5/6 animate-glow " src={logo}></img>
       <img className="animate-pulse  md:hidden w-5/6 animate-glow   " src={logo1}></img>
    </div>
  );
}


export default Screenloading;
