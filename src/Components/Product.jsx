import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFav } from "../reduxComponents/actions/cart_actions";
import { ActionTypes } from "../reduxComponents/constants/action_type";
import { addToCart, deleteCart } from "../reduxComponents/actions/cart_actions";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function Product(props){
    const {id,title,price, description,image}=props.data
    const [products,setProducts]=useState([])

const dispatch=useDispatch()

const [changeButton,setChangeButton]=useState(false)

 
function productAdd(){
  console.log(addToCart(props.data))
dispatch(addToCart(props.data))
setChangeButton(!changeButton)

}

function removeCart(){
  setChangeButton(!changeButton)

  dispatch({type:ActionTypes.DELETE_CART,
  payload:props.data })

}

function addFav(){

  dispatch({
    type:ActionTypes.ADD_FAVOURITE,
    payload:props.data
  })
  setChangeButton(!changeButton)
}

function removeFav(){

  setChangeButton(!changeButton)

}

    return(
        <>
           
  <div class="col-sm-3 card-margin">
    <div class="card">
{changeButton==false ? (      <svg onClick={addFav} id="svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>):
(      <svg onClick={removeFav} style={{color:"red"}} id="svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>)}


   <Link to={"/products/details/"+id}> <img src={image} class="card-img-top" alt="..."/></Link>
      <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <h5 class="card-title"style={{"color":"red"}} > $ {price}</h5>

      </div>
      
        
{ changeButton==false? ( 
      <button onClick={productAdd} className="btn btn-primary btn-block">Add To Cart</button>

): (<button onClick={removeCart} className="btn btn-primary btn-danger btn-block">Remove from Cart</button>)

}
      
      {/* <button onClick={()=> {style:{display:"none"}}}>Remove From Cart</button> */}


      {/* {!hidden &&
                   <button onClick={() => setHidden(true)}>Remove from Cart</button>} */}


    </div>
   
   
</div>  
        </>
    )
}

export default Product;