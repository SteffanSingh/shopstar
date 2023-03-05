import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";
 import Product from "./Product";
import { useSelector } from "react-redux";

function ProductList(){
 
    const [products,setProducts]=useState([]);
 
    useEffect(()=>{
       fetchData()
    },[])

function fetchData(){
axios.get("https://fakestoreapi.com/products")
.then(response=>{
     console.log(response.data);
      setProducts(response.data)
     
}).catch(error=>console.log(error))


}

 


    return(
        <>
               
             {/* <h1 className="text-center">All Products</h1>

                 <h1>{products.length} </h1> */}
                 
                 <div className="row">
                {products.map((product)=> <Product data={product} />)}
                

                </div>
                 
        </>
    )
}

export default ProductList;