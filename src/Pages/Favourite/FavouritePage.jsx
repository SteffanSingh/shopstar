import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ActionTypes } from "../../reduxComponents/constants/action_type";
import NavBar from "../../Components/NavBar";
import { addToCart, deleteCart, removeFavourite } from "../../reduxComponents/actions/cart_actions";

const FavouritePage=(props)=>{

  const {id,title,price,rating,image}=props.data

    const {numberFav,favourite}=useSelector(state=>state)
     const [changeButton,setChangeButton]=useState(false)

     const dispatch=useDispatch()

     function productAdd(){
        dispatch(addToCart(props.data))
      setChangeButton(!changeButton)
      dispatch(deleteCart(props.data))
      
      }

      
      
      function removeCart(){
        setChangeButton(!changeButton)
        
      
        
      
      }
       function addFav(){
        setChangeButton(!changeButton)
       }
      
      function removeFav(){
      
        setChangeButton(!changeButton)
        dispatch(removeFavourite(props.data))
        } 
       
      
       

    return(


       
         
                <> 
                
                
                    

                        
                             <div class="col-sm-3 card-margin">
    <div class="card" >




   <Link to={"/products/details/"+id}> <img src={image} class="card-img-top" alt="..."/></Link>
      <div class="card-body">
           
      </div>
      <h5 class="card-title">{ title}</h5>
        
      <h5 class="card-title"style={{"color":"red"}} > $ { price}</h5>
  
      <button onClick={productAdd} className="btn btn-primary btn-block">Add To Cart</button>

 
  <button onClick={removeCart} className="btn btn-primary btn-danger btn-block">Remove from Favourite</button> 

 
      
      


    </div>
   
   
</div>   
                            
                            

                      
                          

                


                </>
        )
        
     
}

export default FavouritePage