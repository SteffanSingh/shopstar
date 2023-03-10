import React from "react";
import NavBar from "../Components/NavBar";
import ProductList from "../Components/ProductList";
import Men from "../Components/Men";

function MenPage(){
    return(
        <>
            <NavBar/>
            <div className="container">
                <Men/>
            </div>


        </>
    )
}

export default MenPage;