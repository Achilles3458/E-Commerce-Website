import React from 'react'
import "./Category.css"
import { useNavigate } from 'react-router-dom'

export default function Category() {

  const navigate = useNavigate()

  const goToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div>
    <div className='Category'>
      <div onClick={() => {navigate("/category/men-jeans/products") ; goToTop()}}><p className='CategoryName'>Men's Fashion</p><p className='CategoryShopNow'>Shop Now</p></div>
      <div onClick={() => {navigate("/category/women-tops/products") ; goToTop()}}><p className='CategoryName'>Women's Fashion</p><p className='CategoryShopNow'>Shop Now</p></div>
      <div onClick={() => {navigate("/category/baby-wears/products") ; goToTop()}}><p className='CategoryName'>Kids Fashion</p><p className='CategoryShopNow'>Shop Now</p></div>
    </div>
    <div className='gif'>
        <img  src="https://sslimages.shoppersstop.com/sys-master/root/h28/hbb/27567576383518/Sania-Malhotra-GIF-Banner-Web_20220511.gif" alt="" />
      </div>
    </div>
  )
}
