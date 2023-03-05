import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavBar(){

  const cartValue =useSelector(state=> state.numberCart)


    return(
        <>

       <nav class="navbar navbar-expand-lg bg-dark">
  <div clas="container-fluid">
    <a class="navbar-brand" href="#">ShopStar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/products">Product</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/register" >Register</Link>
        </li>
        
      </ul>
      <h2  id="cart-item">Cart:{ 0} </h2>
    </div>
  </div>
</nav>
        </>
    )
}
export default NavBar;
