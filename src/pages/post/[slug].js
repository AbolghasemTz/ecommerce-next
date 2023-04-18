import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

import Wrapper from "../../../components/Wrapper";

import { BsBookmarkCheck } from "react-icons/bs";

function BlogDetail({ blog }) {
  const b = blog.data[0].attributes;

  console.log(b);

  return (
    <div className="w-full md:py-20 py-10 ">
      <Wrapper>
        <div>
          {/* top */}
          <div className="flex md:flex-row flex-col justify-between items-center">
            <div className="flex items-center">
              <Image
                src="/me.JPEG"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div className="mr-4">
                <p>{b.author}</p>
                <p className="py-2 text-sm text-gray-700">Manager Nike</p>
                <p className="text-xs text-gray-500">
                  {new Date(b.createdAt).toLocaleString("fa-IR")}
                </p>
              </div>
            </div>
            <div className="flex items-center border border-black rounded-md px-2 py-1 cursor-pointer mt-4 md:mt-0">
              <BsBookmarkCheck size={16} />
              <span className="pr-2 text-gray-700 text-sm">ذخیره</span>
            </div>
          </div>

          {/* content */}
          <div className="mt-10">
            <h1 className="md:text-2xl text-lg ">
              {" "}
              همه چیز در مورد کفش های نایک{" "}
            </h1>
            <p className="md:leading-8 leading-7  mt-5 text-gray-700 text-sm md:text-base">
              {b.description}
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default BlogDetail;

export async function getStaticPaths() {
  const products = await axios.get(
    "http://localhost:1337/api/blogs?populate=*"
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
  const blog = await axios.get(
    `http://localhost:1337/api/blogs?populate=*&filters[slug][$eq]=${slug}`
  );
  const blogs = await axios.get(
    `http://localhost:1337/api/blogs?populate=*&[filters][slug][$ne]=${slug}`
  );

  return {
    props: {
      blog: blog.data,
      blogs: blogs.data,
    },
  };
}
