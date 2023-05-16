import React from "react";
import axios from "axios";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productAction";

const ProductDetail=()=>{
    const product = useSelector(state =>state.product)
    const dispatch =useDispatch()
    const {productID}=useParams()
    const productId =productID;
    const fetchProductDetails =async()=>{
        const {data}=  await axios.get(`https://fakestoreapi.com/products/${productId}`)

    
        .catch((error)=>{
            console.log("Err",error)
        })
        const action =selectedProduct(data)
        console.log("action",action)
        dispatch(action)
    }
    useEffect(()=>{
        fetchProductDetails()
    },[])

    return(
        <div className="">
            
             <h1>product Component</h1>

            

        </div>
    )
}
export default ProductDetail;