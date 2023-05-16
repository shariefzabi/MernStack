import { ActionTypes } from "../constants/actionTypes"
import axios from "axios"
export const setProducts =(products)=>{
return{
    type:ActionTypes.SET_PRODUCTS,
    payload:products
}
}

export const selectedProduct =(product)=>{
    return{
        type:"SELECTED_PRODUCT",
        payload:product
    }
    }

export const fetchProducts =()=>{
    const response = axios.get("")
    return{
        type:ActionTypes.FETCH_PRODUCTS
        
    }
}