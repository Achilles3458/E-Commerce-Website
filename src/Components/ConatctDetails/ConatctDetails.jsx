import React, { useEffect, useState } from "react";
import "./ConatctDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemCart } from "../../Redux/Cart/Action";
import { addShippingAddress } from "../../Redux/ShippingAddress/Action";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { useNavigate } from "react-router-dom";
import { addCart, addWishlist,removeOneCart } from '../../Redux/Cart/Action'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ConatctDetails() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("")
    const [pincode, setPincode] = useState("")
    const [address, setAddress] = useState("")
    const [locality, setLocality] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [totalMRP , setTotalMRP] = useState(0)

    const data = useSelector((store) => store.cart.cart);

    const goToTop = () => {
        window.scrollTo(0, 0)
      }

    var total = 0;

    for (var i = 0; i < data.length; i++) {
        total += (data[i].price.sp *  data[i].qty)
    }
    useEffect(() => {
        setTotalMRP(total)
      },[total])
   
    const handleContinue = () => {
        
        const data = {
          name,
          mobile,
          pincode,
          address,
          locality,
          city,
          state
        }
        dispatch(addShippingAddress(data))
        console.log("datatt" , data)
        goToTop()
        navigate("/payment")
      }
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
        <div className="ConatctDetailsMain">
            <div className="ConatctDetails">
                <Box
                    component="form"
                    sx={{
                        "& > :not(style)": { m: 1, width: "50ch" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <InputLabel htmlFor="standard-adornment-amount">
                        CONTACT DETAILS
                    </InputLabel>
                    <TextField id="outlined-basic" label="Name*" variant="outlined" onChange={(e) =>setName(e.target.value) }/>
                    <br />
                    <TextField
                        id="outlined-basic"
                        label="Mobile No*"
                        variant="outlined"
                        value={mobile}
                        onChange={(e) => {
                            const re = /^[0-9\b]+$/;
                            if (mobile.length <= 9) {
                                if (e.target.value === '' || re.test(e.target.value)) {
                                    setMobile(e.target.value)
                                }
                            }

                        }}
                    />

                    <InputLabel htmlFor="standard-adornment-amount">ADDRESS</InputLabel>
                    <TextField id="outlined-basic" label="Pin Code*" variant="outlined" 
                        value={pincode}
                        onChange={(e) => {
                            const re = /^[0-9\b]+$/;
                            if(pincode.length <= 5){
                                if (e.target.value === '' || re.test(e.target.value)) {
                                    setPincode(e.target.value)
                                  }
                            }
                           
                        }}
                    />
                    <br />
                    <TextField
                        id="outlined-basic"
                        label="Address (House No, Building, Street, Area)*"
                        variant="outlined"
                        onChange={(e) =>setAddress(e.target.value) }
                    />
                    <br />
                    <TextField
                        id="outlined-basic"
                        label="Locality / Town*"
                        variant="outlined"
                        onChange={(e) =>setLocality(e.target.value) }
                    />
                    <br />
                    <TextField
                        id="outlined-basic"
                        label="City / District*"
                        variant="outlined"
                        onChange={(e) =>setCity(e.target.value) }
                    />
                    <TextField id="outlined-basic" label="State*" variant="outlined" 
                     onChange={(e) =>setState(e.target.value) }/>

                </Box>

                <div className="SaveAddress">
                    <p>SAVE ADDRESS AS</p>
                    <div>
                        <div>
                            <p>Home</p>
                        </div>
                        <div>
                            <p>Work</p>
                        </div>
                    </div>
                </div>

{
    name && mobile && pincode && address && locality && city && state ? 
    <div className="AddAddress">
                    <div onClick={() => handleContinue()}>
                        <p>ADD ADDRESS / PROCEED TO CHECKOUT</p>
                    </div>
                </div> : 
    <div className="AddAddress" >
    <div>
        <p>Please Add Above Details</p>
    </div>
</div>
}
                

            </div>

            {data.length !== 0 ? (
                <div className="ConatctCartData">
                    <div className="CartProdHeading">
                        <div>
                            <p>Product</p>
                        </div>
                        <div>
                            <p>Price</p>
                        </div>
                        <div>
                            <p>Quantity</p>
                        </div>
                        <div>
                            <p>Total</p>
                        </div>
                        <div>
                            <p>Delete</p>
                        </div>
                    </div>

                    {data.map((e) => (
                        <div className="CartProdHeading IndividualProdCart" id="cartPro">
                            <div onClick={() => navigate(`/${e.tag}/${e.id}`)} id="cartImage">
                                <img src={e.images[0]} alt="" />
                            </div>
                            <div onClick={() => navigate(`/${e.tag}/${e.id}`)}>
                                <p>{e.name}</p>
                            </div>
                            <div>
                                <p>₹ {e.price.sp}</p>
                            </div>
                            <div>
                                <div className="CartQuantityIncDec">
                                    
                                    <div id='box'>
                                        <div  onClick={() => handleAddBag(e)} id="box1">+</div>
                                        <div>
                                        <p id="quantity">{e.qty}</p>
                                    </div>
                                        <div onClick={() => handleRemoveQuantity(e)} id="box1">-</div>
                                    </div>
                                </div>

                                
                            </div>
                            <div>
                                <p>₹ {(e.qty)*(e.price.sp)}</p>
                                
                            </div>
                            <div
                                    className="CartRemove"
                                    onClick={() => dispatch(deleteItemCart(e.id))}
                                >
                                    Delete
                                </div>
                        </div>
                    ))}

                    <div className="SubTotalDiv">
                        <div>
                            <p>Subtotal</p>
                        </div>
                        <div>
                            <p>₹ {totalMRP}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="EmptyCart">
                    <p>Your Cart is Empty</p>
                </div>
            )}
            <ToastContainer />
        </div>
    );
}
