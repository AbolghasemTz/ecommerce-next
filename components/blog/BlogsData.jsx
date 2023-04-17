import React from 'react';

// import Link from "next/link";

import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";
function BlogsData({blog}) {
    return (
        <div className="col-span-4 ">
        <div>
            <img src={`http://localhost:1337${blog.attributes.image.data.attributes.url}`} alt="blog" className="object-contain"/>
        </div>
        <div className="flex items-center justify-between px-2 py-4">
            <p  className="text-gray-700 cursor-pointer">{blog.attributes.title}</p>
           {blog.attributes.like.likes[0].like ? <AiFillHeart size={25}  className="text-red-700 cursor-pointer"/> : <AiOutlineHeart size={25} className="text-red-700 cursor-pointer"/>}
        </div>
        <div>
            <p className="text-gray-600 "> نویسنده: {blog.attributes.author}</p>
        </div>
    </div>
    );
}

export default BlogsData;