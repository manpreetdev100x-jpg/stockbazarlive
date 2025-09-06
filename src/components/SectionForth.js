import ImgCard from "./ImgCard";

import pricesction from "./poster/priceaction.jpg"
import Option from "./poster/optionselling.png"
import datascience from "./poster/datascience.jpg"
function SectionForth() {
    return (
      <div className=" relative">
          <div className="md:lastblur absolute bg-themegreen overflow-hidden"></div>
       <div className="mx-10 md:mx-20"> 
       <div className="flex flex-col items-center">
            <h1 className="font-sans font-bold text-4xl  text-themegreen  md:text-5xl lg:text-6xl">Courses We Offer</h1>
            <h3 className="font-sans font-normal text-center text-textwhite text-lg ">Transform knowledge into profitable trading decisions.</h3>
       </div>
       <div className="flex flex-col md:flex-row gap-8 md:justify-evenly py-6"> 
            <ImgCard poster={pricesction}/>
            <ImgCard poster={Option}/> 
            <ImgCard poster={datascience}/> </div>
       </div>
      </div>
    );
  }
  
  export default SectionForth;
  