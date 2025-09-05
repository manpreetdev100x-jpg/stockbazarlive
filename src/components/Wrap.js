import Footer from "./Footor";
import Nav from "./Nav";
import SectionFifth from "./SectionFifth";
import SectionFirst from "./SectionFirst";
import SectionForth from "./SectionForth";
import SectionSecond from "./SectionSecond";
import SectionThird from "./SectionThird";


function Wrap() {
  return (
    <div className="h-auto w-full bg-themeblack ">
      <div className=" relative z-30 bg-themeblack">

        <SectionFirst />

        <SectionSecond />
        <SectionThird />
        <SectionForth />
        <SectionFifth />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default Wrap;
