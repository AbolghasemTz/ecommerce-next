import React from "react";
import Link from "next/link";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function CategoryBlog({ open, setOpen ,category}) {
  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between bg-black rounded-lg p-2 cursor-pointer"
      >
        <p className="text-lg text-white">دسته بندی ها</p>
        <MdOutlineKeyboardArrowDown
          size={22}
          className={`text-white duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {open && (
        <div className="bg-gray-100 p-2 rounded-lg overflow-hidden">
          {category.map((c) => (
            <Link
              key={c.id}
              href={`/blog/${c.attributes.slug}`}
              className="text-gray-700 my-4 block"
            >
              {c.attributes.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryBlog;
