// import logo from "/images/greenlogo2.png"
// import logo2 from "/images/greenlogo1.png"

function Screenloading() {
  return (
    <div className="w-screen h-screen bg-themeblack flex justify-center  items-center ">
      <img className="animate-pulse hidden md:block w-5/6 animate-glow " src="/images/greenlogo2.png"></img>
       <img className="animate-pulse  md:hidden w-5/6 animate-glow   " src="/images/greenlogo1.png"></img>
    </div>
  );
}


export default Screenloading;
