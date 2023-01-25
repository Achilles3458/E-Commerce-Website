import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import store from "../../Redux/Store"
import "./ProductDescriptionPage.css"
import { addCart, addWishlist } from '../../Redux/Cart/Action'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SyncLoader } from "react-spinners"

export default function ProductDescriptionPage() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState(null)
 
    const dispatch = useDispatch()
    const cart = useSelector((store) => store.cart.cart)
    const wishlist = useSelector((store) => store.cart.wishlist)

    useEffect(() => {
        if (id) axios.get(`https://gold-cygnet-kilt.cyclic.app/product/id/${id}`).then((res) => setData(res.data))
    }, [])

    const handleAddBag = () => {
        console.log(data)
        dispatch(addCart(data))
        // alert("Product Added To Cart Successfully")
        toast.success("Product Added To Cart Successfully")
    }

    const handleAddWishlist = () => {
        console.log("list")
        dispatch(addWishlist(data))
        alert("Product Added To Wishlist Successfully")
    }

    return (
        <div>

            {/* <div className='CategoryHeading'>
                <p>Product Details</p>
                <p>
                    <span onClick={() => navigate("/")}>Home |</span>
                    <span> Category</span>
                </p>
            </div> */}

            

            {
                data ? <div className='ProdDetails'>
                <div className='ProdImages'><img src={data ? data.images[0] : ""} alt="" /></div>

                <div className='ProdInfo'>

                <div className='PorductDetailDiv'>
                        <p>PRODUCT DETAILS</p>
                    </div>

                    <div><p>{data ? data.name : ""}</p></div>
                    <div id='brand'>Brand :- <span>{data ? data.brand_name : ""}</span></div>

                    <div>
                        <p id='brand'>{data ? data.product_details[0] : ""}</p>
                    </div>

                    <div className='linebreak'></div>

                    

                    <div className='SelectSizeDiv' id='size'><span>Select Size :- </span><span><div className='SizesDiv'>
                        <div><p>{data ? data.sizes[0] : 0}</p></div>
                        <div><p>{data ? data.sizes[1] : 0}</p></div>
                        <div><p>{data ? data.sizes[2] : 0}</p></div>
                        <div><p>{data ? data.sizes[3] : 0}</p></div>
                        <div><p>{data ? data.sizes[4] : 0}</p></div>
                    </div></span></div>

                    

                    <div id='rating'>Rating:- <span>{data ? data.customer_rating : 0} <span class="fa fa-star checked"></span></span></div>

                    <div className='PriceDiv' id='price'>
                        <div><p>Rs. {data ? data.price.sp : 0}</p></div>
                        <div><p>Rs. {data ? data.price.mrp : 0}</p></div>
                        <div><p>( {data ? data.price.discount : 0}% OFF )</p></div>
                    </div>

                    <div className='AddButton'>
                        <button class="hbtn hb-fill-right-br" onClick={handleAddBag}>ADD TO CART</button>
                        <button onClick={handleAddWishlist}>WISHLIST</button>
                    </div>

                    

                    

                </div>
            </div> : 
                <div className='ProdDetails' ><div className='SyncLoaderInd'><SyncLoader /></div></div>
            }
            <ToastContainer />
        </div>
    )
}
