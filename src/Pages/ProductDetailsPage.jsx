import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { addToCart } from "../reduxComponents/actions/cart_actions";
import { useDispatch } from "react-redux";
import NavBar from "../Components/NavBar";


function ProductDetailsPage(){

    const [products,setProducts]=useState([])

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

}
    return(
<>

<NavBar/>

     <div className="container">
       <div className="row">
            <div className="col-lg-6">
                <img src={products.image} className="img-fluid" />
             </div>

                <div className="col-lg-6">

                <h4>{products.title}</h4>

                <h2><span> </span>$ {products.price} </h2>


                <p>{products.description} </p><br />
            
                <button onClick={productAdd} className="btn btn-primary">Add to Cart</button>
    

             </div>
        </div>



     </div>

</>


    )
}

export default ProductDetailsPage;