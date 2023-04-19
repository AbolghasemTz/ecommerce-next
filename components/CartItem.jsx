import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

import { updateCart, removeFromCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";

function CartItem({ data }) {
  const dispatch = useDispatch();
  const p = data.attributes;
const imageURL = p.thumbnail?.data?.attributes?.url;

  const updateCartItems = (e, key) => {
    let payload = {
      key,
      val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
      id: data.id,
    };
    dispatch(updateCart(payload));
  };

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* Image Start */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img src={`http://localhost:1337${imageURL}`} alt={p.name}/>
      </div>
      {/* Image End */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Product Title */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {p.name}
          </div>

          {/* Product SubTitle */}

          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {p.subtitle}
          </div>

          {/* Product Price */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            {p.price} تومان
          </div>
        </div>
        {/* Product SubTitle */}

        <div className="text-sm md:text-md font-medium text-black/[0.5] hidden md:block ">
          {p.subtitle}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">سایز:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItems(e, "selectedSize")}
             
              >
                {p.size.data.map((item, i) => {
                  return (
                    <option
                      disabled={!item.enabled ? true : false}
                      selected={data.selectedSize === item.size}
                      key={i}
                      value={item.size}
                    >
                      {item.size}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex items-center gap-1">
              <div className="font-semibold">تعداد:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItems(e, "quantity")}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => {
                  return (
                    <option key={i} value={q} selected={data.quantity === q}>
                      {q}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <RiDeleteBin6Line
            onClick={() => dispatch(removeFromCart({ id: data.id }))}
            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
          />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
