import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Components/NavBar";
import { ActionTypes } from "../../reduxComponents/constants/action_type";
import { Link } from "react-router-dom";
import { useState } from "react";

function Cart(){
const dispatch=useDispatch()

const {carts,numberCart}=useSelector(state=>state)


let total= 0 ;
 

    return (
      carts.length === 0 ? (
      <div class=" mt-80">
          

        <div class="row">

          <div class="col-md-10">

            <div class="">

              <div class="card-body cart">
                <div class="col-sm-12 empty-cart-cls text-center">
                  <img src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg"
                    width="130" height="130" class="  mb-4 mr-3" alt="" />
                  <h3><strong>Your Cart is Empty</strong></h3>
                 
                  <Link to="/" class="btn btn-primary cart-btn-transform m-3" data-abc="true">continue shopping</Link>


                </div>
              </div>
            </div>


          </div>

        </div>
         

      </div>
    ) :
     (
        <>
              
                    

                    <div style={{ backgroundColor: "rgb(232, 232, 232", padding: "20px" }}>
      <h2 className="text-center">Your Cart (<b style={{color:"red"}} >{carts.length} </b>items)</h2>
      <table className="table">
        <thead>
          <tr>
            <th colSpan="2">Item</th>

            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>

          {carts.map((item, index) =>
           (
            <tr key={index}>
              <td>
                <Link to={"/products/details/"+item.id} > 
                <img
                  src={ item.image}
                  alt=""
                  className="img-thumbnail"
                  style={{ width: "120px", height:"120PX" }}
                /></Link>
              </td>
              <td>
               

                <p>{item.title.substring(0,25)}</p>
              </td>
              <td>
                 <h5>
                  <span><b>$</b> </span>
                  {item.price}
                  </h5>
                 
              </td>
              <td> 
                <span><h4>{item.quantity}</h4> </span>
                 
                
                
              </td>
              <td>
                <h2>
                  <h5><span><b>$ </b></span>
                  { (item.price*item.quantity).toFixed(2)} </h5>
                  

                  <h6 style={{display:"none"}} >    {total=total+(item.price*item.quantity)} </h6>

                  
                  
                </h2>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
                <div className="container" style={{marginLeft:"700px"}}>
                  
                <h5 style={{"color":"red", backgroundColor:"rgb(191, 214, 157", height:"250px",width:"400px" ,
                        "border-radius":"5px", paddingTop:"20px"
                        }}><h3>Order Summary  </h3> 
                          <h3>({carts.length} items)</h3>
                        
                          
                        <h3>Total Amount to Pay   :</h3> 
                        <h2 style={{color:"magenta"}}>$ {total.toFixed(2)} </h2>
                       <button className="btn btn-primary">Checkout</button> </h5>
                </div>
               
              
                 
              
        
        </>)
    )
}


export default Cart;
