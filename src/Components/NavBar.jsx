import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function NavBar()
{
  
  const count=useSelector(state=>state.numberCart)
  
 const numberFav=useSelector(state=>state.numberFav)
 

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

       <nav className="navbar navbar-expand-lg bg-info" id="nav-bar">
  <div clas="container-fluid">
  <Link to={"/products"}>  <a className="navbar-brand" href="#" id="logo"  ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="35" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>SHOP<a href="#" id="star">STAR</a></a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <b>  <ul className="navbar-nav">
        <li className="nav-item">
          <Link id="navs" className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link id="navs" className="nav-link" to="/products">All Products</Link>
        </li>
        
        <li className="nav-item">
          <Link id="navs" className="nav-link" to="/electronics" activeClassName="selected" >Electronics</Link>
        </li>
        <li className="nav-item">
          <Link id="navs" className="nav-link" to="/jewelery" >Jewelery</Link>
        </li>
        <li className="nav-item">
          <Link id="navs" className="nav-link" to="/men" >Men </Link>
        </li>
        <li className="nav-item">
          <Link id="navs" className="nav-link" to="/women" >Women </Link>
        </li>
      </ul></b>

      <Link to={"/Favourite"} id="cart-item"> 
       <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg> 
                   {numberFav} </Link>

  <Link to={"/cart"} id="cart-item">     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg> {count} </Link>

<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg>       <select onChange={SelectPage}     className="dropdown">
                     
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
