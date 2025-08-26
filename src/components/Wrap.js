import Footer from "./Footor";
import Live from "./Live";
import Nav from "./Nav";
import SectionFifth from "./SectionFifth";
import SectionFirst from "./SectionFirst";
import SectionForth from "./SectionForth";
import SectionSecond from "./SectionSecond";
import SectionThird from "./SectionThird";


function Wrap() {
  return (
    <div className="h-screen w-full bg-black ">
    <div className=" relative z-30 bg-themeblack">
   
    <SectionFirst/>
    
    <SectionSecond/>
    <SectionThird/>
    <SectionForth/>
    <SectionFifth/>
    </div>
    <div className="">
      <Footer/>
    </div>
    </div>
  );
}

export default Wrap;
