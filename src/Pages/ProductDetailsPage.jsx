import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { addToCart, decrease_quantity, deleteCart } from "../reduxComponents/actions/cart_actions";
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

    dispatch(decrease_quantity(products))
        
    
}

const deleteProduct=()=>{
    dispatch(deleteCart(products))
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
               
               <span><svg onClick={deleteProduct}  style={{ marginLeft:"10px", color:"red", cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg></span>

                
             </div>   
        </div>



     </div>

</>


    )
}

export default ProductDetailsPage;