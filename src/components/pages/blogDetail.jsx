import React, { useState } from "react";

const BlogCard = ({ blog, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="cursor-pointer transition p-4 bg-white rounded-3xl shadow-md hover:shadow-2xl group relative overflow-hidden"
      onClick={() => onClick(blog)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default Image */}
      <img
        src={isHovered ? blog.image_hover : blog.image}
        alt="Blog"
        className="w-full rounded-3xl transition-opacity duration-300"
      />

      <p className="text-gray-600 text-sm sm:text-xl">{blog.date}</p>
      <p className="text-xl sm:text-2xl font-semibold">{blog.title}</p>
      <p className="text-sm sm:text-xl text-gray-600">{blog.description}</p>
    </div>
  );
};

export default BlogCard;
