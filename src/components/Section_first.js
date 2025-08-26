import { useNavigate } from "react-router";

function Section_first() {
    const navgat = useNavigate();
    
    return (
     <div className="w-full h-screen bg-primarytext">
        <div>
            <h2 className=" font-sans font-l primarytext">TradEdge<span>Institute</span></h2>
            <p>Empowering traders with knowledge, strategy, and confidence.</p>
        </div>
        <div>
            <img src="" />
        </div>
     </div>
    );
  }
  
  export default Section_first;
  