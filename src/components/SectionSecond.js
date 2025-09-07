import Segments from "./Segments";
// import imgurl from "./images/I-5.png"

import buying from "./segment_logo/I-1.jpg"
import selling from "./segment_logo/I-2.jpg"
import forex from "./segment_logo/I-3.jpg"
import short_investing from "./segment_logo/I-6.jpg"
import intradday from "./segment_logo/I-7.jpg"
import swingtrading from "./segment_logo/I-5.jpg"
import "./style.css"


const buyingtext= "We teach you all about buying options for both indexes and individual stocks, starting from the basics and moving to advanced levels. Each type of trading needs a different mindset, and psychology and we help you get good at both. Our training gives you the knowledge and skills to handle the challenges of option buying, so you can succeed in both markets.";
const sellingtext= "We teach all types of option strategies which are available  in the market and we include few  more special strategies which are specially designed by Stock Homes  which helps you to earn consistent Return  with Minimum Time and with Proper Risk Management. Our Sukha Paisa Strategy is one of them and few others as well";
const forextext= "Discover strategies to enhance your trading across all markets. The Forex and Commodity markets provide you with the flexibility to trade anytime, fitting your schedule which will help you to Unlock the full potential of Forex and Commodity markets and achieve success with tailored trading strategies";
const short_investingtext= "Stock Market Offers Best Platform to create Wealth.In Stock Market , Build a Strong Portfolio with Good Fundamental Stocks that have potential to become Multibagger.";
const intraddaytext= " Master To Capture Big Market Trend/Moves and get  high returns in Mid Cap and Small Cap Stocks with our specialized Swing Trading Strategies.";
const swingtradingtext= "Equity is the safest way to begin your trading journey, enabling you to learn with minimal capital and perfect your technical analysis skills. Equity trading provides a secure foundation to launch your trading career";


function SectionSecond() {
    return (
        <div className="  mx-10 h-auto pb-16 bg-themeblack md:mx-20 overflow-hidden ">
            <div className=" hidden md:visible lg:blure bg-themegreen section2 absolute"></div>
            <div className=" flex flex-col items-center">
                <h1 className="font-hedaingfont text-4xl text-themegreen md:text-5xl lg:text-6xl font-bold">Segments</h1>
                <h4 className="md:text-xl lg:text-2xl text-xl text-textwhite font-normal pt-0">Journey to Become Master</h4>
            </div>
            <div  className=" flex  flex-row flex-wrap gap-x-3 gap-y-8 pt-5 justify-evenly">
                <Segments logo={buying} title={'Option Buying'} dis={buyingtext}/>
                <Segments logo={selling} title={'Option Selling'} dis={sellingtext} />
                <Segments logo={forex} title={'Forex & Commodity'} dis={forextext}/>
                <Segments logo={short_investing} title={'Investing'} dis={short_investingtext}/>
                <Segments logo={intradday} title={'Swing Trading'} dis={intraddaytext}/>
                <Segments logo={swingtrading} title={'Intrady Equity'} dis={swingtradingtext}/>

            </div>
        </div>
    );
}

export default SectionSecond;
