import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function NavBar()
{
  


  let navigate=useNavigate()

  function SelectPage(e)
  {
    e.preventDefault();
    
    if(e.target.value=="login"){
      navigate("/login",true);
    }
    else if(e.target.value=="signup"){
      navigate("/register",true);
    }
    else if(e.target.value=="fav"){
      navigate("/favourite",true);
    }else if(e.target.value=="cart"){
      navigate("/cart",true);
    }
  }
  
    return(
        <>

       <nav class="navbar navbar-expand-lg bg-dark" id="nav-bar">
  <div clas="container-fluid">
    <a class="navbar-brand" href="#" id="logo">SHOPSTAR</a>
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
      
  <Link to={"/cart"} id="cart-item">     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>0  </Link>
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg>        <select onChange={SelectPage}     className="dropdown">
                     <label>Login Or Signup</label>
                        
                        <option  value={"login or sign up"  } disabled selected>Login Or Signup </option>
                        <option value={"login"}  >Log in</option>
                        
                        <option  value={"signup"}>Sign up</option>
                        <option value={"cart"} >Cart</option>
                        <option value={"fav"}>Favourite </option>
                        </select>
                         
    </div>
  </div>
</nav>
        </>
    )
}
export default NavBar;
