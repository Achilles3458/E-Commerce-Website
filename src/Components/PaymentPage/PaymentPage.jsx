import React, { useState } from 'react'
import "./PaymentPage.css"
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { store } from '../../Redux/Store';
import { emptyCart } from '../../Redux/Cart/Action';

export default function PaymentPage() {
  const navigate = useNavigate()
  const [Mobilenumber, setMobileNumber] = useState("")

  const data = useSelector((store) => store.cart.cart)

  const shippingAddress = useSelector((store) => store.shippingAddress.ShippingAddress)

  console.log("adddd" , data.length)

  var totalMRP = 0;
  var discountMRP = 0;
  var numberOfItems = data.length

  for (var i = 0; i < data.length; i++) {
    totalMRP += (data[i].price.sp *  data[i].qty)
    discountMRP += (data[i].price.mrp *  data[i].qty)
  }

  const dispatch = useDispatch()

  // razor par start
  const initPayment = (data) => {
    const options = {
      key: "rzp_test_xkRX7E1arP0hgl",
      amount: (totalMRP) * 100,
      currency: "INR",
      description: "payment",

      handler: async (response) => {
        try {
          const verifyUrl = "https://gold-cygnet-kilt.cyclic.app/api/payment/verify";
          const { data } = await axios.post(verifyUrl, response).then((res) => console.log("after Payment")).catch((error) => {console.log("error after paymwnt"); navigate("/") ; dispatch(emptyCart())});
          console.log(data);
          console.log("after initiiii")
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const orderUrl = "https://gold-cygnet-kilt.cyclic.app/api/payment/orders";
      const { data } = await axios.post(orderUrl, { amount: 400 });
      console.log(data);
      initPayment(data.data);

      console.log("afterrrrrr")
    } catch (error) {
      console.log(error);
    }
  };


  // razor pay end

  const handleAddNumber = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setMobileNumber(e.target.value)
    }
  }

  return (
    <div className='PaymentPageMain'>
      {/* <h1>Payment</h1> */}

      <div className='PaymentPageFlex'>

        <div className='PaymentDetailsDiv'>
          <div className='bankOfferDiv'>
            <div><p className='totolAmt'>Bank Offer</p></div>
            <div><p>10% off Instant Discount on Kotak Debit Cards on a min spend of Rs.3,000. TCA</p></div>
            <div><p className='redText'>Show more</p></div>
          </div>

          <div className='totolAmt chosePaymentopt'><p>Choose Payment Mode</p></div>

          <div className='PaymentModeSelectdiv'>
            <div className='MultiplePayOptions'>
              <div>
                <div><p>Cash On Delivery (Cash/Card/UPI)</p></div>

                <div><p>Credit/Debit Card</p></div>

                <div><p>PhonePe/Google Pay/Bhim/UPI</p></div>

                <div><p>PayTm/Payzapp/Wallets</p></div>

                <div><p>Net Banking</p></div>

              </div>
            </div>


            <div className='payOptionDetails'>
              <div>
                <div className='totolAmt paymentHeading'><p>Razor Pay</p></div>

                <div><input type="text" placeholder='Mobile Number' maxlength="10" value={Mobilenumber} onChange={(e) => handleAddNumber(e)} /></div>

                <div><button onClick={handlePayment}>Pay Now</button></div>

              </div>
            </div>
          </div>

          <div className='GiftCardDiv'>

            <div className='GiftCardDiv1d totolAmt'><p>Have a Gift Card?</p></div>

            <div className='GiftCardDiv2d redText'><p>APPLY GIFT CARD</p></div>

          </div>
        </div>

        <div className='ProductPricesDiv'>

{
  data.length !==0 ? <div className='ProductPricesDivInside' onClick={() => navigate("/cart")} >
  <div className='priceDiv'><p>PRICE DETAILS({numberOfItems} item)</p></div>

  <div className='ProductFlex'>
    <div><p>Total MRP</p></div>
    <div><p>₹{totalMRP}</p></div>
  </div>

  <div className='ProductFlex'>
    <div><p>Discount on MRP</p></div>
    <div className='greenText'><p>-₹{discountMRP - totalMRP}</p></div>
  </div>

  <div className='ProductFlex marginBtm'>
    <div><p>Convenience Fee  <span className='redText'> Know More</span> </p></div>
    <div><p><span className='LineonText'>₹99</span> <span className='greenText'>FREE</span></p></div>
  </div>

  <div className='ProductFlex totolAmt'>
    <div><p>Total Amount</p></div>
    <div><p>₹{totalMRP}</p></div>
  </div>


</div> : 
<div className='ProductPricesDivInside'><p className='noCartDataFound totolAmt'>Your Cart is Empty</p></div>
}



{
  shippingAddress.length === undefined ? <div className='ShippingAddress'>
  <div className='totolAmt'><p>{shippingAddress.name}</p></div>

  <div><p>{shippingAddress.address}</p></div>

  <div><p>{shippingAddress.locality}</p></div>

  <div><p>{shippingAddress.city}</p></div>

  <div><p>{shippingAddress.state}</p></div>

  <div><p>{shippingAddress.pincode}</p></div>

  <div className='totolAmt'><p>{shippingAddress.mobile}</p></div>
</div> : 
<div className='ShippingAddress'><p className='noAddressFound totolAmt'>Shipping Address Not Found</p></div>
}

          
          
        </div>

      </div>
    </div>
  )
}
