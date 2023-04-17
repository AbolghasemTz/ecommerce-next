import React, { useState } from "react";
import Wrapper from "../../../components/Wrapper";

import { getBlogs } from "../../../utils/api";
import { getBlogCategory } from "../../../utils/api";
import CategoryBlog from "../../../components/blog/CategoryBlog";
import BlogsData from "../../../components/blog/BlogsData";

function blogs({data,category}) {
  const [open, setOpen] = useState(true);
  

    
  return (
    <div>
      <Wrapper>
        <div className="grid grid-cols-12 gap-4 grid-rows-[60px_minmax(300px,1fr)] mt-10 mb-32">
          {/* category desktop */}
          <div className="hidden md:block col-span-3">
            <CategoryBlog open={open} setOpen={setOpen} category={category}/>
          </div>
         
          {/* content */}
          <div className=" md:col-span-9 grid-rows-auto col-span-12 grid grid-cols-12 gap-8 ">
            {data.map((blog) => (
             <BlogsData key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default blogs;



export async function getServerSideProps() {
    // Fetch data from external API
    const {data} = await getBlogs();
     const response = await getBlogCategory();
     
    // Pass data to the page via props
    return { 
        props:{
            data:data.data,
            category:response.data.data
        }
     }
  }