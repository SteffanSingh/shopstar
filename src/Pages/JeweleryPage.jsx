import React from "react";
import Jewelery from "../Components/Jewelery";
import NavBar from "../Components/NavBar";
import ProductList from "../Components/ProductList";


function JeweleryPage(){
    return(
        <>
            <NavBar/>
            <div className="container">
                <Jewelery/>
            </div>


        </>
    )
}

export default JeweleryPage;