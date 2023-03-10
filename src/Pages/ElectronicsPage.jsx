import React from "react";
import Electronics from "../Components/Electronics";
import NavBar from "../Components/NavBar";
import ProductList from "../Components/ProductList";


function ElectronicsPage(){
    return(
        <>
            <NavBar/>
            <div className="container">
                <Electronics/>
            </div>


        </>
    )
}

export default ElectronicsPage;