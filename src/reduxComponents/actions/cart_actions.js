import { useSelector } from "react-redux"
import { ActionTypes } from "../constants/action_type"

export const addToCart=(product)=>{

    
return{
    type:ActionTypes.ADD_CART,
    payload:product
}
 
}


export const addFav=(product)=>{

    
    return{
        type:ActionTypes.ADD_FAVOURITE,
        payload:product
    }
     
    }

    export const removeFavourite =(product)=>{
        return{
            type:ActionTypes.REMOVE_FAVOURITE,
            payload:product
        }
    }
    
 export const deleteCart=(product)=>{
    return{
        type:ActionTypes.DELETE_CART,
        payload:product
    }
 }


  
 export const decrease_quantity=(product)=>{
        return {
    type:ActionTypes.DECREASE_QUANTITY,
    payload:product
}
 }