import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import { Link } from "react-router-dom";
import axios from "axios"
//const {}
const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList=()=>{
        return products.map((product)=>{
            const {id,title,category,price,image} =product;
    
        return(
            <div className="four column wide">
                <Link to={`/product/${id}`}>
                        <div className="ui link cards">
                            <div className="card">
            
                                <div className="image">
                                    <img src ={image} alt ={title}></img>
                                </div>
                                <div className="content">
                                <div className="header">{title}</div>
                                <div className="meta price">$ {price}</div>
                                <div className="meta">{category}</div>
            
                                </div>
                            </div>
            
                        </div>
                        </Link>
            
            
            
            
                    </div>
                    )
    })
    }
    

    const dispatch= useDispatch()
    console.log(products)
    
    const fetchProducts =async()=>{
        const {data} =await axios
        .get("https://fakestoreapi.com/products")
        .catch((error)=>{
            console.log("Err",error)
        })
        dispatch(setProducts(data))
        console.log(data)
        
    }
    useEffect(()=>{
       fetchProducts()
    },[])

        
        
    
    return (
        renderList()
    )
}
export default ProductComponent;