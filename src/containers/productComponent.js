import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import { Link } from "react-router-dom";
import axios from "axios"
//const {}
const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = () => {
        return products.map((product) => {
            const { id, title, category, price, image } = product;

            return (
                <div className="col-sm-4">
                    <Link className="card mb-3 mr-2 mt-1 "style={{"width": "22rem",height :"30rem"}} to={`/product/${id}`}>

                        <div >

                            <div className="image">
                                <img  style={{"width": "18rem",height:"18rem"}} src={image} alt={title}></img>
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="meta price">$ {price}</div>
                                <div className="meta">{category}</div>

                            </div>


                        </div>
                    </Link>




                </div>
            )
        })
    }


    const dispatch = useDispatch()
    console.log(products)

    const fetchProducts = async () => {
        const { data } = await axios
            .get("https://fakestoreapi.com/products")
            .catch((error) => {
                console.log("Err", error)
            })
        dispatch(setProducts(data))
        console.log(data)

    }
    useEffect(() => {
        fetchProducts()
    }, [])




    return (
        <div className="row">
            {renderList()}
        </div>

    )
}
export default ProductComponent;