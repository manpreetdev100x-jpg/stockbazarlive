import blog_poster from "./poster/priceaction.jpg"
function Blog_card(){
    return(
        <div  className="w-full h-auto  bg-themegreen glow-hover glass-green2_button overflow-hidden text-white" >
            <div className="w-40 h-40">
                <img src={blog_poster}/>
            </div>
            <div>
            <h1>heading</h1>
                <h3>discription</h3>
            </div>
        </div>
       
    )
}

export default Blog_card;