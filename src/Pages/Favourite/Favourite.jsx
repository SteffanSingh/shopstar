import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../../Components/NavBar";
import FavouritePage from "./FavouritePage";

const Favourite=()=>{

    const {numberFav,favourite}=useSelector(state=>state)

    return(
        <div><NavBar/>
        
       { numberFav === 0 ? 
         (
        <div> 
        <h1 >    <br /> No Favourite item</h1>
 
        <svg id="fav" xmlns="http://www.w3.org/2000/svg" width="80" height="90" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
        

        </div> ) 
        :(
            <>   
            <div style={{ backgroundColor: "rgb(232, 232, 232", padding: "20px" }}>
              
      <h2 className="text-center">Your Favourite(<b style={{color:"red"}} >{favourite.length} </b>items)</h2> 
            
           <div className="container">

        <div className="row">
            {
                 favourite.map((item,index)=>
        <FavouritePage data={item} />
        ) }
  </div> </div></div> </>  )
}</div>
    )
}


export default Favourite;
