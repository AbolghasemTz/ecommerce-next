import React, { useState } from "react";

import Wrapper from "../../../components/Wrapper";

import axios from "axios";
import ProductCard from "../../../components/ProductCard";


function Category({ category, products }) {
  
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center mx-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] font-semibold leading-tight">
          {category[0].attributes.name}
          </div>
        </div>
        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
        {products?.map(product => {
        return(
          <ProductCard key={product.id} product={product}/>
        )
       })}
        </div>
        {/* products grid end */}
      </Wrapper>
    </div>
  );
}

export default Category;

export async function getStaticPaths() {
  const category = await axios.get("http://localhost:1337/api/categories?populate=*");
const paths = category.data.data.map((c) => ({
  params :{
    slug: c.attributes.slug
  }
}))

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params:{slug}}) {
  const category = await axios.get(`http://localhost:1337/api/categories?[filters][slug][$eq]=${slug}`);
  const products = await axios.get(`http://localhost:1337/api/products?populate=*&[filters][categories][slug][$eq]=${slug}`);

 
  return {
    props: {
      category:category.data.data,
      products:products.data.data,
      slug
    }, 
  }
}