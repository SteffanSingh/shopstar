import React from "react";
import Cart from "./Cart";
import OrderSummary from "./OrderSummary";
import NavBar from "../../Components/NavBar";

const CartPage = () => {
    return (
      <>
        <NavBar />
        <br />
         
          <div className="row">
            <div className="col-md-12">
              <Cart/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8"></div>
            <div className="col-md-4">
               
            </div>
           
        </div>
      </>
    );
  };
  export default CartPage;
  