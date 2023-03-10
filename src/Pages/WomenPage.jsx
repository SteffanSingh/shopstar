import React from "react";
import NavBar from "../Components/NavBar";
import ProductList from "../Components/ProductList";
import Women from "../Components/Women";


function WomenPage(){
    return(
        <>
            <NavBar/>
            <div className="container">
                <Women/>
            </div>


        </>
    )
}

export default WomenPage;