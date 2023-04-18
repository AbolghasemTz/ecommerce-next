import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";

import { percentTagDiscount } from "../utils/helpers";

function ProductCard({ product: { attributes: p, id } }) {
  const imageURL = p.thumbnail.data.attributes.url

  return (
    <Wrapper>
      <div className="transform hover:scale-105 overflow-hidden bg-white duration-200 cursor-pointer shadow-sm rounded-md">
        <Link href={`/product/${p.slug}`}>
          <img src={`http://localhost:1337${imageURL}`} alt={p.name} />
          <div className="p-4 text-black/[0.9]">
            <h2 className="text-lg font-medium">{p.name}</h2>
            <div className="flex items-center text-black/[0.5]">
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
          </div>
        </Link>
      </div>
    </Wrapper>
  );
}

export default ProductCard;
