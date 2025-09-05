
import logo from "./images/stockbazar.png"
function SectionThird() {
    return (
        <div className="w-full h-auto  py-8">
            <div className="flex flex-col md:flex-row md:items-center mx-10 md:mx-20">
                <div className=" mt-10 md:mt-0 w-full h-full md:h-full md:w-1/2 md:flex md:justify-center md:items-center ">
                    <img className=" w-full lg:h-full md:w-full p-8 mix-blend-multiply abovez" src={logo} />
                </div>
                <div className="w-full mt-5 md:mt-0 abovez md:w-1/2">
                    <h1 className=" font-sans font-bold text-xl text-themegreen md:text-5xl">Why Choose Us ?</h1>
                    <h3 className="font-sans font-bold text-2xl text-themegreen md:text-3xl">We Simplify Trading</h3>
                    <p className=" lg:w-3/3 font-sans lg:font-medium md:font-light text-textwhite text-lg md:text-base lg:text-xl pt-2 "> Over time, Stock Bazar has evolved into a premier institution, empowering individuals with no prior market experience or knowledge to become consistent traders, capable of transforming their financial growth with confidence and expertise. Through our comprehensive training programs, cutting-edge market insights, and hands-on mentorship, we equip aspiring traders with the skills and strategies needed to navigate the complexities of the financial markets.</p>
                    <div className="pt-5 flex justify-center md:justify-start">
                        <button className="w-auto glow-hover glass-green2_button h-auto py-2 px-4 border-0 rounded-xl  font-sans bg-themegreen text-white">ENROLL NOW</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionThird;
