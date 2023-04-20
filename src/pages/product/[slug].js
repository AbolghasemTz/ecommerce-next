import React, { useState } from "react";

import Wrapper from "../../../components/Wrapper";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { IoMdHeartEmpty } from "react-icons/io";
import ProductDetailsCarousel from "../../../components/ProductDetailsCarousel";
import RelatedProducts from "../../../components/RelatedProducts";
import axios from "axios";
import { percentTagDiscount } from "../../../utils/helpers";
 
import { useSelector,useDispatch } from "react-redux";
import { addToCart } from "../../../store/cartSlice";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function ProductDetail({ product, products }) {
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch()
  const p = product.data?.[0]?.attributes;
   const notify = () => {
    toast.success('موفق .سبد خرید را چک کنید', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });;
   }
  return (
    <div className="w-full md:py-20 ">
      <ToastContainer />
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1] max-w-[500] lg:max-w-full mx-auto lg-mx-0">
            <ProductDetailsCarousel images={p.image.data} />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* Product Title */}
            <div className="md:text-[34px] text-[26px] font-semibold mb-2 leading-10">{p.name}</div>
            {/* Product SubTitle */}
            <div className="text-lg font-semibold mb-5">{p.subtitle}</div>
            {/* Product Price */}
            <div className="flex items-center text-black/[0.5] mb-5">
              <p className="mr-2 text-lg font-semibold ">{p.price} تومان</p>

              {p.orginal_price && (
                <>
                  <p className="text-base font-medium line-through">
                    {p.orginal_price} تومان
                  </p>

                  <p className="ml-auto text-base font-medium text-green-500">
                    {percentTagDiscount(p.orginal_price, p.price)}%
                  </p>
                </>
              )}
            </div>
            {/* Product Size start*/}
            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">انتخاب ساز</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                 انتخاب کنید
                </div>
              </div>

              <div id="sizesGrid" className="grid grid-cols-3 gap-2 my-5">
                {p.size.data.map((item, index) => (
                  <div
                    key={index}
                    className={`border rounded-md text-center py-3 font-medium ${
                      item.enabled
                        ? "hover:border-black cursor-pointer"
                        : "cursor-not-allowed opacity-30"
                    }${selectedSize === item.size ? "border-black" : ""}`}
                    onClick={() => {
                      setSelectedSize(item.size);
                    }}
                  >
                    <p>{item.size}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Product Size end*/}

            {/* ShoW Error */}
            {showError && (
              <div className="text-red-600 mt-1">
                انتخاب سایز ضروری است
              </div>
            )}
            {/* ShoW Error */}

            {/* Add to cart button start */}
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3
            hover:opacity-70 my-6
            "
              onClick={() => {
                if (!selectedSize) {
                  setShowError(true);
                  document.getElementById("sizesGrid").scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                  });
                }
                dispatch(addToCart({
                  ...product?.data[0],
                   selectedSize,
                   onQuantityPrice : p.price
                }))
                notify()
              }}
            >
              اضافه کردن به سبد خرید
            </button>
            {/* Add to cart button end */}
            {/*button wishlist */}
            <button
              className="w-full py-4 rounded-full bg-white text-black border border-black text-lg font-medium transition-transform active:scale-95 mb-3
            hover:opacity-70 my-6 flex justify-center items-center gap-2 mb-10
            "
            >
              علاقه مندی
              <IoMdHeartEmpty size={20} />
            </button>
            {/*button wishlist */}

            <div>
              <div className="text-lg font-bold mb-5">جزییات محصول</div>
              <div className="text-md mb-5">
                <ReactMarkdown>{p.description}</ReactMarkdown>
              </div>
            </div>
          </div>
          {/* right column start */}
        </div>
        <RelatedProducts products={products}/>
      </Wrapper>
    </div>
  );
}

export default ProductDetail;

export async function getStaticPaths() {
  const products = await axios.get(
    "http://localhost:1337/api/products?populate=*"
  );
  const paths = products.data.data.map((p) => ({
    params: {
      slug: p.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const product = await axios.get(
    `http://localhost:1337/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
  const products = await axios.get(
    `http://localhost:1337/api/products?populate=*&[filters][slug][$ne]=${slug}`
  );

  return {
    props: {
      product: product.data,
      products: products.data,
    },
  };
}
