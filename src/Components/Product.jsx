import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Product(props){
    const {id,title,price, description,image}=props.data


    return(
        <>
           
  <div class="col-sm-3 card-margin">
    <div class="card">
    <img src={image} class="card-img-top" alt="..."/>
      <div class="card-body">

      </div>
      <h5 class="card-title">{title}</h5>

      <h5 class="card-title"> $ {price}</h5>

      <Link to={"/products/details/"+id} class="btn btn-primary btn-block" > Show Details</Link>


    </div>
   
   
</div>  
        </>
    )
}

export default Product;