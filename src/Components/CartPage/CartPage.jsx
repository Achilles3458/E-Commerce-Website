import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./CartPage.css";
import { store } from "../../Redux/Store"
import { deleteItemCart } from '../../Redux/Cart/Action';
import { useNavigate } from 'react-router-dom';
import { addCart, addWishlist,removeOneCart } from '../../Redux/Cart/Action'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CartPage() {
  const navigate = useNavigate()
  const data = useSelector((store) => store.cart.cart)
  const [totalMRP , setTotalMRP] = useState(0)
  console.log("cart", data)

  var total = 0;

  for (var i = 0; i < data.length; i++) {
    console.log("qty" , data[i].qty, "price" , data[i].price.sp)
    total += (data[i].price.sp *  data[i].qty)
    // setTotalMRP(total)
  }
  const dispatch = useDispatch()
  console.log("total all", total)

  useEffect(() => {
    setTotalMRP(total)
  },[total])

  const handleAddBag = (e) => {
    console.log("data",e)
    dispatch(addCart(e))
    // alert("Product Added To Cart Successfully")
    toast.success("Product Added To Cart Successfully")
}

const handleRemoveQuantity = (e) => {
  console.log("remove",e)
  dispatch(removeOneCart(e))
  // alert("Product Added To Cart Successfully")
  // toast.success("Product Added To Cart Successfully")
}

  return (
    <div>

      {/* <div className='CategoryHeading'>
        <p>Cart Category</p>
        <p>
          <span>Home |</span>
          <span> Cart </span>
        </p>
      </div> */}

      {
        data.length !== 0 ?
          <div className='CartPage'>

            <div className='CartProdHeading'>
              <div><p>Product</p></div>
              <div><p>Price</p></div>
              <div><p>Quantity</p></div>
              <div><p>Total</p></div>
              <div><p>Delete</p></div>
            </div>

            {
              data.map((e) => (
                <div className='CartProdHeading IndividualProdCart'>
                  <div onClick={() => {navigate(`/${e.tag}/${e.id}`) }} ><img src={e.images[0]} alt="" /></div>
                  <div onClick={() => {navigate(`/${e.tag}/${e.id}`) }} ><p>{e.name}</p></div>
                  <div><p>₹ {e.price.sp}</p></div>
                  <div >
                    <div className='CartQuantityIncDec'>
                      
                      <div id='box'>
                        <div onClick={() => handleAddBag(e)} id="box1">+</div>
                        <div><p id="quantity">{e.qty}</p></div>
                        <div onClick={() => handleRemoveQuantity(e)} id="box1">-</div>
                      </div>
                    </div>

                    
                  </div>
                  <div><p>₹ {(e.qty)*(e.price.sp)}</p></div>
                  <div className='CartRemove' onClick={() => dispatch(deleteItemCart(e.id))}>Delete</div>
                </div>
              ))
            }

            {/* <div className='UpdateANDcoupon'>
              <div class="hbtn hb-fill-right-br" onClick={() => navigate("/cart")}><p>Update Cart</p></div>
              <div class="hbtn hb-fill-right-br"><p>Apply Coupon</p></div>
            </div> */}

            <div className='SubTotalDiv'>
              <div><p>Subtotal</p></div>
              <div><p>₹ {totalMRP}</p></div>
            </div>

            <div className='Checkout'>
              <div class="hbtn hb-fill-right-br" onClick={() => navigate("/")}><p>Continue Shoping</p></div>
              <div class="hbtn hb-fill-right-br" onClick={() => navigate("/contact")}><p>Proceed to checkout</p></div>
            </div>



          </div>
          :
          <div className='EmptyCart'><p>Your Cart is Empty</p></div>
      }

<ToastContainer />
    </div>
  )
}
