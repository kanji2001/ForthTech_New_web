import React from 'react';

const BlogCard = ({ blog, onClick }) => {
  return (
    <div className="cursor-pointer hover:shadow-xl transition p-4 bg-white rounded-3xl" onClick={() => onClick(blog)}>
      <img src={blog.image} alt="Blog" className="w-full rounded-3xl" />
      <p className="text-gray-600 text-sm sm:text-xl">{blog.date}</p>
      <p className="text-xl sm:text-2xl font-semibold">{blog.title}</p>
      <p className="text-sm sm:text-xl text-gray-600">{blog.description}</p>
    </div>
  );
};

export default BlogCard;