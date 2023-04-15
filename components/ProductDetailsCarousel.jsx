import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

function ProductDetailsCarousel({ images }) {
 

  return (
    <div className="text-white text-[20px] w-auto max-w-[550px] mx-auto sticky top-[50px]">
      <Carousel
        thumbWidth={50}
        showIndicators={false}
        showStatus={false}
        className="productCarousel"
      >
        {images.map((img) => (
          <img
            key={img.id}
            src={`http://localhost:1337${img.attributes.url}`}
            alt={img.attributes.url}
           
          />
        ))}

      
      </Carousel>
    </div>
  );
}

export default ProductDetailsCarousel;
