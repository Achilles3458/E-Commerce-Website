import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./TrendingProducts.css"

import { SyncLoader } from "react-spinners"

export default function TrendingProducts() {
    const navigate = useNavigate()

    const [data, setData] = useState([])
    const [randomId1, setRandomId1] = useState(0)
    const [randomId2, setRandomId2] = useState(0)
    const [randomId3, setRandomId3] = useState(0)
    const [randomId4, setRandomId4] = useState(0)

    useEffect(() => {
        axios.get("https://gold-cygnet-kilt.cyclic.app/product").then((res) => setData(res.data));

        setRandomId1(Math.floor(Math.random() * 40))
        setRandomId2(Math.floor(Math.random() * 51) + 40)
        setRandomId3(Math.floor(Math.random() * 52) + 80)
        setRandomId4(Math.floor(Math.random() * 53) + 80)
    }, [])

    const goToTop = () => {
        window.scrollTo(0, 0)
    }


    // console.log("setttttt", randomId1, randomId2, randomId3)
    // console.log("rere", data[randomId1].name)
    return (
        <div className='TrendingProducts'>
            <div className='TrendingProductsHeading'>
                <div><p>Trending This Week</p></div>
                <div className='TrendingProductsCategory'>
                    <div onClick={() => navigate("/category/men-jeans/products")}><p id='tag'>Men</p></div>
                    <div onClick={() => navigate("category/women-kurtas-suits/products")}><p id='tag'>Women</p></div>
                    <div onClick={() => navigate("/category/baby-wears/products")}><p id='tag'>Baby</p></div>
                </div>
            </div>


            <div className='TrendingProdDisplay'>
                <div>
                    {
                        data[randomId1] ? <div className='IndividualProd'
                        onClick={() => { navigate(`/${data[randomId1].tag}/${data[randomId1]._id}`); goToTop() }}
                    >
                        <div className='IndividualProdImg'>
                            <img  src={data[randomId1] ? data[randomId1].images[0] : ""} alt="" />
                        </div>
                        <div className='IndividualProdTitle'>
                            <p>{data[randomId1] ? data[randomId1].name : ""}</p>
                            <p>
                                <span>₹ {data[randomId1] ? data[randomId1].price.sp : ""}</span>
                                <span>₹ {data[randomId1] ? data[randomId1].price.mrp : ""}</span>
                                <span><button id='buynow'>Buy Now</button></span>
                            </p>
                        </div>
                    </div> : 
                    <div className='IndividualProd'><div className='LoaderSinner'><SyncLoader /></div></div>
                    }
                    
                </div>


                <div>
                    {
                        data[randomId2] ? <div className='IndividualProd'
                            //   onClick={() => { navigate(`/${id}/${e.id}`) }}
                            onClick={() => { navigate(`/${data[randomId2].tag}/${data[randomId2]._id}`); goToTop() }}
                        >
                            <div className='IndividualProdImg'>
                                <img  src={data[randomId2] ? data[randomId2].images[0] : ""} alt="" />
                            </div>
                            <div className='IndividualProdTitle'>
                                <p>{data[randomId2] ? data[randomId2].name : ""}</p>
                                <p>
                                    <span>₹ {data[randomId2] ? data[randomId2].price.sp : ""} </span>
                                    <span>₹ {data[randomId2] ? data[randomId2].price.mrp : ""}</span>
                                    <span><button id='buynow'>Buy Now</button></span>
                                </p>
                            </div>
                        </div> :
                            <div className='IndividualProd'><div className='LoaderSinner'><SyncLoader /></div></div>
                    }

                </div>


                <div>

                    {
                        data[randomId3] ? <div className='IndividualProd'
                            onClick={() => { navigate(`/${data[randomId3].tag}/${data[randomId3]._id}`); goToTop() }}
                        >
                            <div className='IndividualProdImg'>
                                <img src={data[randomId3] ? data[randomId3].images[0] : ""} alt="" />
                            </div>
                            <div className='IndividualProdTitle'>
                                <p>{data[randomId3] ? data[randomId3].name : ""}</p>
                                <p>
                                    <span>₹ {data[randomId3] ? data[randomId3].price.sp : ""}</span>
                                    <span>₹ {data[randomId3] ? data[randomId3].price.mrp : ""}</span>
                                    <span><button id='buynow'>Buy Now</button></span>
                                </p>
                            </div>
                        </div> :
                            <div className='IndividualProd'><div className='LoaderSinner'><SyncLoader /></div></div>
                    }


                </div>

                <div>

                    {
                        data[randomId4] ? <div className='IndividualProd'
                            onClick={() => { navigate(`/${data[randomId3].tag}/${data[randomId4]._id}`); goToTop() }}
                        >
                            <div className='IndividualProdImg'>
                                <img src={data[randomId4] ? data[randomId4].images[0] : ""} alt="" />
                            </div>
                            <div className='IndividualProdTitle'>
                                <p>{data[randomId4] ? data[randomId4].name : ""}</p>
                                <p>
                                    <span>₹ {data[randomId4] ? data[randomId4].price.sp : ""}</span>
                                    <span>₹ {data[randomId4] ? data[randomId4].price.mrp : ""}</span>
                                    <span><button id='buynow'>Buy Now</button></span>
                                </p>
                            </div>
                        </div> :
                            <div className='IndividualProd'><div className='LoaderSinner'><SyncLoader /></div></div>
                    }


                </div>

            </div>

            {/* <SyncLoader/> */}


        </div>
    )
}
