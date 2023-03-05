import React, { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
 


function RegisterPage()
{

    const [user,setUser]=useState({
        name:"Steffan",
        email:"s@gmail.com",
        mobile: "",
        password:""
    });


function handleChange(e){
    e.preventDefault();
        console.log(e.target.value)
        setUser({
                ...user,
            [e.target.name]:e.target.value

        }
        )

}


function handleSubmit(e){
e.preventDefault();
axios.post("",user)
.then(response=>console.log(response.data))
.catch(error=>console.log(error))

}
    return(
        <>
        <div className="container">
            <div className="row">
            <div className="col-lg-3"></div>
         <div className="col-lg-6">
                        <div className="wrapper">
                            <form action="" onSubmit={handleSubmit}>
                            <h1>Register Page</h1>
                            <h2>Welcome   </h2>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" value={user.name} className="form-control" onChange={handleChange} />
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" value={user.email} className="form-control" onChange={handleChange} />
                                    <label htmlFor="mobile" >Mobile</label>
                                    <input type="number" name="mobile" id="mobile" value={user.mobile} className="form-control" onChange={handleChange} />
                                    <label htmlFor="password">Password</label>
                                    <input type="password"id="password" name="password" value={user.password} className="form-control" onChange={handleChange} />


                                    </div>
                                     
                                        <input type="submit" value="Register" className="input btn btn-primary btn-block" />
                                    
                            </form>
                                <p className="text-center">
                                    Already have an account ?<Link to="/Login">Click here</Link> to Login
                                </p>
                            
                </div></div>
            <div className="col-lg-3"></div>
            </div>
        </div>
            
        </>
    )
}


export default RegisterPage;