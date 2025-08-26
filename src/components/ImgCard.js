import price from"./images/priceaction.jpg"
function ImgCard({poster}) {
  console.log(poster); 
    return (
 
      <div className="md:w-3/12 h-auto border-2 rounded-2xl border-themegreen glow-hover p-3 ">
       <img className="w-full h-full" src={poster}></img>
      </div>
    );
  }
  
  export default ImgCard;
  