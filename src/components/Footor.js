import { useNavigate } from "react-router";
// import logo from "./images/stocklogo.png"
function Footer() {
   const navigate = useNavigate();

    const navcourse = ()=>{
        navigate("/courses")
    }
    return (
        <div className="w-full h-64 md:h-64 ">

            <div className="w-screen  flex md:justify-center px-10 md:items-center  h-64  max-h-full md:h-64  fixed   bottom-0 z-0 bg-footercolor text-white">
                {/* mobile */}
                <div className=" md:hidden   flex flex-col items-center justify-center md:w-1/4">
                    <img className=" w-64 h-16 md:w-full md:h-24 " src="/images/stocklogo.png" />
                    <h2 className="font-serif text-xs  w-32 md:w-24  md:text-lg pt-3  text-center">Empowering your financial journey with innovative solutions and unparalleled service.</h2>
                </div>
                {/* desktop */}
                <div className=" flex md:flex w-full h-full md:justify-evenly md:items-center  px-5 md:px-20">
                    <div className=" hidden md:inline-block  md:w-1/4">
                        <img className=" w-40 h-12  md:w-full md:h-24 px-5" src="/images/stocklogo.png" />
                        <h2 className="font-serif text-xs w-auto  md:text-lg pt-3 text-center">Empowering your financial journey with innovative solutions and unparalleled service.</h2>
                    </div>
                    <div className=" md:w-1/4 hidden   h-full md:flex  flex-col justify-evenly items-center">
                        <div className="text-xl " >
                            <h1 className="font-sans text-xs md:text-xl font-semibold pb-1">Quick Links</h1>
                            <h3 className="text-lg" >About us</h3>
                            <h3 className="text-lg">Contact us </h3>
                        </div>
                        <div className="text-xl ">
                            <div className="font-sans  text-xs md:text-xl font-semibold pb-1" onClick={navcourse} >Courses</div>
                            <div className="text-lg"   onClick={navcourse}>Online Courses</div>
                            <div className="text-lg"  onClick={navcourse}>Offline Courses</div>

                        </div>

                    </div>
                    <div className="  text-xs md:text-xl md:w-1/4 flex flex-col justify-center  ">
                        <h1>Address</h1>
                        <h3>SCF122 Phase 1, Gole Market, Jamalpur, Ludhiana</h3>
                        <h3>+91 87289 71355</h3>
                        <h3>+91 98882 24036</h3>
                        <h3>stockbazarjamalpur@gmail.com</h3>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Footer;
