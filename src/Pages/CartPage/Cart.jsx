import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Components/NavBar";
import { ActionTypes } from "../../reduxComponents/constants/action_type";
import { Link } from "react-router-dom";
import { useState } from "react";
import { addToCart, decrease_quantity } from "../../reduxComponents/actions/cart_actions";

function Cart() {
  const dispatch = useDispatch()

  const { carts, numberCart } = useSelector(state => state)

  const increment = (item) => {
     dispatch(addToCart(item))
  }

  const decrement = (item) => {

    dispatch(decrease_quantity(item))
  }

  const deleteProduct = () => {


  }

  let total = 0;


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
            <h2 className="text-center">Your Cart (<b style={{ color: "red" }} >{carts.length} </b>items)</h2>
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
                      <Link to={"/products/details/" + item.id} >
                        <img
                          src={item.image}
                          alt=""
                          className="img-thumbnail"
                          style={{ width: "120px", height: "120PX" }}
                        /></Link>
                    </td>

                    <td>


                      <p>{item.title.substring(0, 25)}</p>
                    </td>
                    <td>
                      <h5>
                        <span> <b>$</b> </span>
                        {item.price}
                      </h5>

                    </td>

                    <td>
                      <span><h4> <button onClick={increment(item)} className="btn btn-success">+</button>
                        {item.quantity}
                        <button onClick={decrement(item)} className="btn btn-warning">-</button>
                      </h4>  </span>





                    </td>
                    <td>
                      <h2>
                        <h5 ><span><b>$ </b></span>
                          {(item.price * item.quantity).toFixed(2)}
                          <span><svg onClick={deleteProduct} style={{ marginLeft: "10px", color: "red", cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                          </svg></span>
                        </h5>


                        <span><h6 style={{ display: "none" }} >    {total = total + (item.price * item.quantity)}
                        </h6></span>


                      </h2>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
          <div className="container" style={{ marginLeft: "700px" }}>

            <h5 style={{
              "color": "red", backgroundColor: "rgb(191, 214, 157", height: "250px", width: "400px",
              "border-radius": "5px", paddingTop: "20px"
            }}><h3>Order Summary  </h3>
              <h3>({carts.length} items)</h3>


              <h3>Total Amount to Pay   :</h3>
              <h2 style={{ color: "magenta" }}>$ {total.toFixed(2)} </h2>
              <button className="btn btn-primary">Checkout</button> </h5>
          </div>





        </>)
  )
}


export default Cart;
