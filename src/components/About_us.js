import Card_soon from "./Card_soon";
import Footer from "./Footor";
import aboutimage from "./poster/aboutimage.jpg"

function About_us() {
    return (
        <div>
            <div className="w-full h-full md:h-screen gap-5  bg-themeblack  lg:pt-32 px-10  lg:px-20 relative flex flex-col z-30">

                <div className="w-full  md:px-0 lg:px-20 flex flex-col md:flex-row items-center justify-evenly p-8">
                    <div  className=" md:w-2/5 flex items-center justify-center " >
                        <img className=" w-9/12 md:w-full border rounded-md" src={aboutimage} />
                    </div>
                    <div className=" md:w-3/5 flex md:justify-end pt-5 ">
                        <div className=" w-64 md:w-full text-textwhite   md:p-10 text-lg  ">
                            <h1 className="font-hedaingfont font-bold  text-themegreen text-center md:text-left text-4xl md:text-5xl md:font-semibold lg:text-6xl">
                                Stock Bazar
                            </h1>
                             <h1 className="font-sans font-semibold text-center md:text-left   text-themegreen  text-lg md:text-2xl">
                                 Turning knowledge into wealth with proven strategies.
                            </h1>
                            <h2 className="lg:w-3/3 font-sans lg:font-normal md:font-light m text-justify text-textwhite text-base md:text-lg pt-2">
                                Welcome to Stock Bazar, a trusted trading institute founded by a market expert with 7+ years of experience in equities, derivatives, and market analysis. Our mission is to simplify trading and guide individuals toward true wealth creation.

                                We specialize in Options Trading, Buying & Selling Strategies, and Wealth Creation Mindset, helping both beginners and experienced traders achieve consistent growth.

                                With structured, step-by-step programs, Stock Bazar empowers students, professionals, and entrepreneurs to trade with clarity, confidence, and discipline.
                            </h2>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default About_us;