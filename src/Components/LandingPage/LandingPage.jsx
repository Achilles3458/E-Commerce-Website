import React from 'react'
import "./LandingPage.css"

import SimpleImageSlider from "react-simple-image-slider";

export default function LandingPage() {

  const images = [
    { url: "https://sslimages.shoppersstop.com/sys-master/root/h67/he6/27614151180318/women_carousel-web.jpg" },
    { url: "https://sslimages.shoppersstop.com/sys-master/root/hef/h2c/27608381587486/footwear_carousel-web.jpg" },
    { url: "https://sslimages.shoppersstop.com/sys-master/root/hbe/h36/27608381849630/private_carousel-web.jpg" },
    { url: "https://sslimages.shoppersstop.com/sys-master/root/hff/hcd/27599340339230/Denim-Fest-Main-Banner-Web.jpg" },
  ];
 
  return (
    <div className='LandingPage'>
      <div>
        <SimpleImageSlider
          width={"100%"}
          height={450}
          images={images}
          showBullets={false}
          showNavs={false}
          autoPlay={true}
        />
      </div>

    </div>
  )
}
