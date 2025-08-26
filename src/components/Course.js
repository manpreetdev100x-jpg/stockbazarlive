import Footer from "./Footor";
import "./style.css"
import Cards from "./Blog_card"
import Card_soon from "./Card_soon";

function Course() {
  const courses = [
    "SMC Concepts",
    "Market Structure & Price Readings",
    "Candlestick Patterns",
    "Technical Analysis",
    "Fundamental Analysis"
  ];
  const option_selling = [
    "Options Greeks for sellers ",
    "Margin, leverage & pledging ",
    "Entry, Exit & adjustment rules",
    "Event & expiry-day management",
    "Backtesting, journaling & performance tracking",
  ];
  return (
    <div>
      <div className="w-full h-auto gap-10 bg-themeblack pt-20 md:pt-40 px-10 md:px-20 pb-20  relative flex flex-col justify-center z-30 ">
        <div className="  flex gap-10 flex-col md:flex-row md:justify-center">
          <div className=" w-auto md:w-2/5 h-auto  bg-themegreen glow-hover glass-green2_button overflow-hidden text-white md:py-8  flex flex-col items-center pb-4">
            <h1 className=" font-serif text-6xl">Price action</h1>

            <ul className=" pt-6  space-y-3 w-11/12 lg:w-3/3 font-sans  lg:font-medium md:font-light text-textwhite text-lg md:text-xl ">
              {courses.map((course) => (
                <li className=" text-textwhite">
                  {course}
                </li>
              ))}
            </ul>

            <h2 className="font-sans font-bold md:pt-5 text-2xl text-themegreen md:text-3xl">
              Price: 15,000 /-
            </h2>

          </div>

          {/* selling */}

          <div className=" w-full p-4 md:p-0 md:w-2/5 h-auto  bg-themegreen glow-hover glass-green2_button overflow-hidden text-white md:py-8  flex flex-col items-center">
            <h1 className=" font-serif text-6xl">Option Selling</h1>

            <ul className=" pt-6 space-y-3 lg:w-3/3 font-sans lg:font-medium md:font-light text-textwhite text-lg md:text-xl ">
              {option_selling.map((keypoint) => (
                <li className=" text-textwhite">
                  {keypoint}
                </li>
              ))}
            </ul>

            <h2 className="font-sans font-bold text-2xl md:pt-5 text-themegreen md:text-3xl">
              Price: 25,000 /-
            </h2>

          </div>

        </div>
        <div>
           {/* data science */}
         <div className="w-full h-auto  bg-themegreen glow-hover glass-green2_button overflow-hidden text-white pb-5 md:pb-8 ">
          <h1 className=" font-serif text-6xl">Trading with Data Science</h1>
          
          <h2 className=" text-  p-6 pb-2 px-8 space-y-3 lg:w-3/3 font-sans lg:font-medium md:font-light text-textwhite text-lg md:text-xl ">
            The Trading With Data Science Program aims to help you learn and apply the knowledge and skills of a professional trader, with the potential for profitable outcomes. It encompasses numerous strategies and price action techniques suitable for various financial markets and trading styles, including Indian stocks, futures & options, the foreign exchange market, and commodities, covering intraday and swing trading.
          </h2>

          <h2 className="font-sans font-bold text-2xl md:pt-5 text-themegreen md:text-3xl">
            Price: 45,000 /-
          </h2>
         
        </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Course;
