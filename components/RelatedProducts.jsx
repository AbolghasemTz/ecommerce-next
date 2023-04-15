import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

function RelatedProducts({ products }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mt-[50px] md:mt-[100px] md:mb-0">
      <div className="text-2xl font-bold mb-5">محصولات مشابه</div>
      <Carousel responsive={responsive}>
        {products?.data?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </Carousel>
      ;
    </div>
  );
}

export default RelatedProducts;
