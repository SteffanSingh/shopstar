import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { addToCart, deleteCart } from "../reduxComponents/actions/cart_actions";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Components/NavBar";
import { ActionTypes } from "../reduxComponents/constants/action_type";


function ProductDetailsPage(){

    const {carts,numberCart,totalPrice,totalQuantity}=useSelector(state=>state)
console.log(carts[1])
    const [products,setProducts]=useState([])

    const [changeButton,setChangeButton]=useState(false)

let dispatch=useDispatch();

    let {pid}=useParams();
        console.log({pid})

   function fetchData(){
    axios.get("https://fakestoreapi.com/products/"+ pid)
    .then(response=>{
        console.log(response.data)
        setProducts(response.data)
    }).catch(error=>
        console.log(error))
   }

   useEffect(()=>{
        fetchData()
   },[pid])

function productAdd(){
    console.log(addToCart(products))
 dispatch(addToCart(products))

 setChangeButton(!changeButton)


}

function removeCart(){
    setChangeButton(!changeButton)
    dispatch({
        type:ActionTypes.DELETE_CART,
        payload:products
    })
    

}


const increment=()=>{
    dispatch(addToCart(products))
}

const decrement=()=>{
    dispatch({
        type:ActionTypes.DECREASE_QUANTITY,
    payload:products
})

}



    return(
<>

<NavBar/>

     <div className="container">
       <div className="row">
            <div className="col-lg-6">
                <img src={products.image} width="300px" height="400px"  />
             </div>

                <div className="col-lg-6">

                <h4>{products.title}</h4>

                <h2><span> </span>$ {products.price} </h2>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="45" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg></span>

                <p>{products.description} </p><br />
                
                <span><button className="btn btn-success" onClick={increment}>+</button></span>
                 {/*  {console.log(  carts.find((item,index)=> 

                {
                    return item.id==products.id 
                
                     
                       
                     }
                       
                        
                      
                     
                )[index].quantity ) } */ }  
               <span>  {products.qantity} </span>
                <span><button className="btn btn-warning" onClick={decrement}>-</button></span>
             {changeButton==false ? 
             ( <button onClick={productAdd} className="btn btn-primary">Add to Cart</button>):
             (<button onClick={removeCart} className="btn btn-warning">Remove From Cart</button>)}   
               
                

                
             </div>   
        </div>



     </div>

</>


    )
}

export default ProductDetailsPage;