import "./style.css"

function Segments({logo,title, dis}) {
    return (
        
     <div className=" md:w-5/12  lg:w-3/12 h-auto border-0 z-40 abovez rounded-xl bg-themegreen md:glow-hover glass-green p-5">
       
        <div className="flex h-16 gap-3 font-sans font-bold items-center md:text-xl lg:text-2xl" >
           <div className="w-12 h-12 rounded-full bg-blue-600 flex justify-center items-center"> <img className="w-6 h-6" src={logo}></img></div>
            <h1 className=" text-2xl md:font-bold  font-light text-textwhite">{title}</h1>
        </div>
        <div>
            <p className="p-2 text-textwhite">
                {dis}
            </p>
        </div>
     </div>  
    );
  }
  
  export default Segments;
  