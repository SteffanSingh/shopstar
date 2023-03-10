import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const OrderSummary = () => {
  const { carts,numberCart } = useSelector(state=>state);

 const totalPrice=useSelector(state=>state.totalPrice)
const totalQuantity=useSelector(state=>state.totalQuantity)

  return (
    <div className="order-summary"
       
    >
      <h4>Order Summary ({numberCart} items) </h4>
      <table className="table">
        <tr>
          <td>Subtotal: </td>
          <td>{totalPrice} </td>
        </tr>
                 
        <tr>
          <td>To Pay</td>
          <td>{totalPrice}</td>
        </tr>
      </table>
      <Link to="/products" ><button className="btn btn-primary btn-block">Checkout</button></Link>
    </div>
  );
};
export default OrderSummary;
