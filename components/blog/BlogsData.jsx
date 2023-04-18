import React, { useState } from "react";

import Link from "next/link";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
function BlogsData({ blog }) {
  const [liked, setLiked] = useState(false);
  const likeHandle = (blog) => {
    if (liked) {
      return blog.attributes.like.likes[0].like === true;
    } else {
      return blog.attributes.like.likes[0].like === false;
    }
  };
  console.log(likeHandle(blog));
  return (
    <div className="lg:col-span-4 md:col-span-6  col-span-12">
      <Link href={`/post/${blog.attributes.slug}`}>
        <div>
          <img src="/p5.png" alt="blog" className="object-contain" />
        </div>
      </Link>
      <div className="flex items-center justify-between px-2 py-4">
        <Link
          href={`/post/${blog.attributes.slug}`}
          className="text-gray-700 cursor-pointer"
        >
          {blog.attributes.title}
        </Link>
        <button
          onClick={() => {
            setLiked(!liked);
            likeHandle(blog)
          }}
        >
          {blog.attributes.like.likes[0].like === liked ? (
            <AiFillHeart size={25} className="text-red-600 cursor-pointer" />
          ) : (
            <AiOutlineHeart size={25} className="text-red-600 cursor-pointer" />
          )}
        </button>
      </div>
      <div>
        <p className="text-gray-600 "> نویسنده: {blog.attributes.author}</p>
      </div>
    </div>
  );
}

export default BlogsData;
