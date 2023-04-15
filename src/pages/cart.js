import React, { useMemo } from "react";
// import Image from 'nex/image';
import Link from "next/link";
import Wrapper from "../../components/Wrapper";
import CartItem from "../../components/CartItem";
import Image from "next/image";
import { useSelector } from "react-redux";

function Cart(props) {
  const { cartItems } = useSelector((state) => state.cart);
  const subTotal = useMemo(() => {
    return cartItems.reduce((total, val) => total + val.attributes.price, 0);
  }, [cartItems]);
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {cartItems.length > 0 && (
          <>
            {/* Heading And Paragraph Start */}
            <div className="text-center mx-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] font-semibold leading-tight">
                سبد خرید
              </div>
            </div>
            {/* Heading And Paragraph End */}

            {/* Cart Concent Start */}
            <div className="flex flex-col lg:flex-row gap-12 py-10">
              <div className="flex-[2]">
                <div className="text-lg font-bold">
                  {cartItems.map((item) => (
                    <CartItem key={item.id} data={item} />
                  ))}
                </div>
              </div>
              <div className="flex-[1]">
                <div className="text-lg font-bold"> صورت حساب</div>
                <div className="p-5 my-5 bg-black/[0.5] rounded-xl ">
                  <div className="flex justify-between">
                    <div className="uppercase text-md md:text-lg font-medium text-black">
                      مبلغ کل
                    </div>
                    <div className="text-md md:text-lg font-medium text-black">
                      ${subTotal}
                    </div>
                  </div>
                  <div className="text-sm md:text-md py-5 border-t mt-5">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد
                  </div>
                </div>
                <button
                  className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3
            hover:opacity-70 my-6
            "
                >
                  پرداخت
                </button>
              </div>
            </div>
            {/* Cart Concent End */}
          </>
        )}

        {/* Empty Cart */}
        {cartItems.length < 1 && (
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14 ">
            <Image
              src="/empty-cart.jpg "
              width={300}
              height={300}
              className="w-[300px] md:w-[400px]"
            />
            <span className=" text-xl font-bold"> سبد خرید خالی است!</span>
            <Link
              href="/"
              className="w-72 text-center py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3
 hover:opacity-70 mt-8
 "
            >
             ادامه خرید
            </Link>
          </div>
        )}
      </Wrapper>
    </div>
  );
}

export default Cart;
