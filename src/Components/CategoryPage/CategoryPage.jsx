import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./CategoryPage.css"
import { useDispatch, useSelector } from 'react-redux'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { dataGet } from '../../Redux/CategoryData/Action';

import { SyncLoader } from "react-spinners"

export default function CategoryPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()

  const data = useSelector((store) => store.categoryReducer.categoryData[0])
  const loading = useSelector((store) => store.categoryReducer.loading)
  console.log("data from redux on categ", data)
  console.log("loading on category", loading)

  // const [data, setData] = useState([])
  const [sortby, SetSortby] = useState(1)
  const [size, SetSize] = useState("")
  const [discount11, SetDiscount] = useState("")
  const [rating11, SetRating] = useState("")

  useEffect(() => {
    // axios.get(`https://e-commerce-website-pranav.herokuapp.com/product/${id}`, {
    //   params: {
    //     sorting:sortby,   
    //     sizes_like: size,
    //     'discount': discount11,
    //     rating: rating11
    //   }
    // }).then((res) => setData(res.data))

    const dataSend = {
      id,
      sortby,
      size,
      discount11,
      rating11
    }
    dispatch(dataGet(dataSend))

  }, [id, sortby, size, discount11, rating11])

  console.log("dattttta", data)

  return (
    <div className='CategoryPageMain'>

      <div className='CategoryBelowCategory'>

        <div className='FilterDiv'>
          <FormControl >
            <FormLabel className='checkDiv' id="demo-radio-buttons-group-label">CATEGORIES</FormLabel>
            <RadioGroup className='checkDiv'
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel onClick={() => navigate("/category/women-kurtas-suits/products")} value="womenKurtas" control={<Radio />} label="Women Kurtas" />
              <FormControlLabel onClick={() => navigate("/category/women-tops/products")} value="womenTops" control={<Radio />} label="Women Tops" />
              <FormControlLabel onClick={() => navigate("/category/men-jeans/products")} value="MenJeans" control={<Radio />} label="Men Jeans" />
              <FormControlLabel onClick={() => navigate("/category/men-t-shirts/products")} value="MenTshirt" control={<Radio />} label="Men T-Shirt" />
              <FormControlLabel onClick={() => navigate("/category/baby-wears/products")} value="BabyWears" control={<Radio />} label="Baby Wears" />
            </RadioGroup>
           
            <FormLabel className='checkDiv' id="demo-radio-buttons-group-label">PRICE</FormLabel>
            <RadioGroup className='checkDiv'
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="highLow" onClick={() => { SetSortby(-1) }} control={<Radio />} label="High To Low" />
              <FormControlLabel value="lowHigh" onClick={() => { SetSortby(1) }} control={<Radio />} label="Low To High" />
            </RadioGroup>

           

            <FormLabel className='checkDiv' id="demo-radio-buttons-group-label">RATING</FormLabel>
            <RadioGroup className='checkDiv' id="grid"
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <div>
              <span><FormControlLabel value="1" onClick={() => { SetRating("1") }} control={<Radio />} label=" 1 +" /></span>
              <span><FormControlLabel value="2" onClick={() => { SetRating("2") }} control={<Radio />} label=" 2 +" /></span>
              </div>
              <div>
                <span>
                <FormControlLabel value="3" onClick={() => { SetRating("3") }} control={<Radio />} label=" 3 +" />
                </span>
                <span>
                <FormControlLabel value="4" onClick={() => { SetRating("4") }} control={<Radio />} label=" 4 +" />
                </span>
              </div>
            </RadioGroup>

         

            <FormLabel className='checkDiv' id="demo-radio-buttons-group-label">Size</FormLabel>
            <RadioGroup className='checkDiv'
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <div>
                <span><FormControlLabel value="28" onClick={() => { SetSize("28") }} control={<Radio />} label="28" /></span>
                <span><FormControlLabel value="32" onClick={() => { SetSize("32") }} control={<Radio />} label="32" /></span>
              </div>
              <div>
                <span><FormControlLabel value="34" onClick={() => { SetSize("34") }} control={<Radio />} label="34" /></span>
                <span><FormControlLabel value="36" onClick={() => { SetSize("36") }} control={<Radio />} label="36" /></span>
              </div>
            </RadioGroup>
        

            <FormLabel className='checkDiv' id="demo-radio-buttons-group-label">DISCOUNT RANGE</FormLabel>
            <RadioGroup className='checkDiv'
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="10A" onClick={() => { SetDiscount("10") }} control={<Radio />} label="10% and Above" />
              <FormControlLabel value="20A" onClick={() => { SetDiscount("20") }} control={<Radio />} label="20% and Above" />
              <FormControlLabel value="30A" onClick={() => { SetDiscount("30") }} control={<Radio />} label="30% and Above" />
              <FormControlLabel value="40A" onClick={() => { SetDiscount("40") }} control={<Radio />} label="40% and Above" />
              <FormControlLabel value="50A" onClick={() => { SetDiscount("50") }} control={<Radio />} label="50% and Above" />
              <FormControlLabel value="60A" onClick={() => { SetDiscount("60") }} control={<Radio />} label="60% and Above" />
              <FormControlLabel value="70A" onClick={() => { SetDiscount("70") }} control={<Radio />} label="70% and Above" />
              <FormControlLabel value="80A" onClick={() => { SetDiscount("80") }} control={<Radio />} label="80% and Above" />
            </RadioGroup>

          </FormControl>
        </div>

        <div className='ProductsDiv'>

         

          {
            data && loading === false ?
              <>
                {
                  data.map((e) => (
                    <div className='IndividualProd' onClick={() => { navigate(`/${id}/${e._id}`) }}>
                      <div className='IndividualProdImg'>
                        <img src={e.images[0]} alt="" />
                      </div>
                      <div className='IndividualProdTitle'>
                        <p>{e.name}</p>
                        <p>
                          <span>₹ {e.price.sp}</span>
                          <span>₹ {e.price.mrp}</span>
                          <span><button id='buy'>Buy</button></span>
                        </p>
                        
                      </div>
                    </div>
                  ))
                }
              </> :
              <>
                <div className='IndividualProd SpinnerInCategoryDiv'>
                  <div className='SpinnerInCategory'>
                    <SyncLoader size={40} />
                  </div>
                </div></>
          }

        </div>
      </div>

    </div>
  )
}
