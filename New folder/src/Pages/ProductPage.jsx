import React from "react";
import NavBar from "../Components/NavBar";
import ProductList from "../Components/ProductList";


function ProductPage(){
    return(
        <>
            <NavBar/>
            <div className="container">
                <ProductList/>
            </div>


        </>
    )
}

export default ProductPage;