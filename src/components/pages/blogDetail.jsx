import React, { useState } from "react";

const BlogCard = ({ blog, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Function to truncate text
  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  return (
    <div
      className="cursor-pointer transition bg-background-gray rounded-3xl shadow-md hover:shadow-2xl group relative overflow-hidden"
      onClick={() => onClick(blog)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        height: "350px",
      }}
    >
      {/* Blog Image */}
      <img
        src={isHovered ? blog.image_hover : blog.image}
        alt="Blog"
        className="w-full h-44 object-cover rounded-t-3xl transition-opacity duration-300"
      />

      <div className="p-4 mt-2 ">
        {/* Blog Date */}
        <p className="text-gray-600 text-sm ">{blog.date}</p>

        {/* Blog Title */}
        <p className="text-lg font-semibold line-clamp-2 leading-tight mt-3">
          {truncateText(blog.title, 8)}
        </p>

        {/* Blog Description */}
        <p className="text-sm text-gray-600 mt-3 line-clamp-2 leading-snug ">
          {truncateText(blog.description, 18)}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
