import React from "react";
import { Link, useNavigate } from "react-router-dom";
import loginDetails from "./loginDetails.json"
import { useState } from "react";

import {useFormik} from "formik";
import * as Yup from "yup";
import NavBar from "../Components/NavBar";


function LoginPage(){
const navigate=useNavigate();
const [formData,setFormData]=useState({
    email:"",
    password:""
})

const {email,password}=formData;
function handleChange(e){
    e.preventDefault();
    const {name,value}=e.target;
    setFormData({...formData,[name]:value});
    console.log(formData);

}
    //initial values
    const initialValues={
        email:"",
        password:""
    }
//onsubmmit
const onSubmit=(values)=>{
    console.log(values)
}

const validationSchema=Yup.object({
    email:Yup.string().required("email is required").email("email address is invalid"),
    password:Yup.string().required("password is required").min(6,"password must be 6 characters long")
})

const formik=useFormik({
    initialValues,
    onSubmit,
    validationSchema
    
})

//validationSchema
function Shopping(e){
    e.preventDefault();
   if(loginDetails.email==email && loginDetails.password==password)
                navigate("/products")
      
}

    return(

        <>
        <NavBar/>

        <div className="container">
            <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
                    <div className="wrapper">
                        <h2>LogIn</h2>
                        <hr />
                        <form   onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                        <label htmlFor="email">Email</label>
                                    <input type="text" name="email" id="email"   
                                    className="form-control"
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email} 
                                    onChange={formik.handleChange}  />

                                    {formik.touched.email && formik.errors.email ?
                                    (<small className="text-danger">{formik.errors.email} </small>):null }
                                        <br />
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password"    id="password"  className="form-control"
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password} 
                                    onChange={formik.handleChange}  />
                                    {formik.touched.password && formik.errors.password ?
                                    (<small className="text-danger">{formik.errors.password} </small>):null } 

                                        <br />

                        </div>
                        <input type="submit" value="Login"  className="btn btn-primary btn-block" />
                        </form>
                            <p className="text-center">
                                <Link to="/register" >New user? Click here</Link>
                            </p>
                    </div>
            </div>

            <div className="col-lg-3"></div>
        
            </div>
        </div>
            
        </>
    )
}


export default LoginPage;