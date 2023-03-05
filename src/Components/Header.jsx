import React from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <>
        <div className="jumbotron">
  <h1 className="display-4" >
   </h1>
   <Link to={"/products"} id="shop" > <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg> SHOP<a href="#" id="star">STAR</a></Link>
  <h2 id="shop">E-commerce Website</h2>
  <p className="lead">This is a simple E-commerce website,where you can purchase the products like clothing
  , jewelery, electronics online and get your products delivered at your home without any rush.</p>
  <hr className="my-4"/>
  <p>It saves your time ,energy and resources and get the products at very affordable expense.</p>
  <Link to="products" className="btn btn-primary btn-lg" href="#" role="button">Start Shopping</Link>
</div>
        
        </>
    )
}

export default Header;