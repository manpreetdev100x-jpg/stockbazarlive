
import finalpng from "./images/crypto2.png"


import "./style.css"
import { useNavigate } from "react-router";


function SectionFirst() {
    const navgat = useNavigate();
    return (
        <div className=" w-full h-screen  bg-themeblack overflow-hidden  md:w-full md:h-full pt-20  md:pt-10  lg:pt-24 md:pb-10 bg-cover bg-center  " > 

            <div className="  w-full h-full " >
                <div className="  bg-themegreen absolute translate-x-20 translate-y-40 blure "></div>
            <div className=" flex flex-col  md:pt-0 md:flex-row  md:mx-20 lg:mx-32 ">

                <div className=" w-full h-full flex justify-center  md:hidden ">
                    <div className="w-5/6 flex justify-center"> <img className="w-full" src={finalpng} /></div>
                </div>

                <div className="md:w-7/12 lg:w-full flex flex-col pt-8  items-center justify-center  md:items-start">
                    <h2 className="text-center font-sans  text-5xl px-2 font-l text-themegreen md:hidden ">Stock Bazar Trading Institute</h2>
                    <h2 className=" font-sans md:text-4xl  lg:text-6xl font-bold text-themegreen hidden md:block">Stock Bazar Trading Institute</h2>
                    <p className=" text-base md:text-sm   px-10 md:text lg:text-xl flex justify-center text-textwhite text-center md:px-1 md:text-left">Empowering traders with knowledge, strategy, and confidence.</p>
                    <div className="pt-4" >
                        <button className=" w-auto glow-hover glass-green2_button h-auto py-2 px-6 rounded-xl text-xl  md:text-lg lg:text-xl  font-sans bg-themegreen text-white   shadow-lg transition-all duration-300 hover:shadow-blue-500 hover:shadow-md hover:scale-105" onClick={()=>{navgat('/contact')}} type="button">ENROLL NOW</button>
                    </div>
                </div>
                
                <div className=" w-6/12  h-auto md:pt-10  flex   items-center ">
                    <div className=" md:w-5/6 lg:w-full   hidden   items-start md:block "> <img className=" lg:max-w-xl " src={finalpng} /></div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default SectionFirst;
