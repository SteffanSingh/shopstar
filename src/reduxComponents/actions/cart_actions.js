import { useSelector } from "react-redux"
import { ActionTypes } from "../constants/action_type"

export const addToCart=(product)=>{

    
return{
    type:ActionTypes.ADD_CART,
    payload:product
}
 
}