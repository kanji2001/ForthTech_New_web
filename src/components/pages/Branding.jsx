import React, { useState } from "react";
import { blogData } from "../../components/pages/blogData";
import BlogCard from "../../components/pages/blogDetail";

const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{ textAlign: "justify" }}>
      {selectedBlog ? (
        <div className="bg-white shadow-blog rounded-3xl p-6">
          <div className="flex justify-between">
            <button
              onClick={() => setSelectedBlog(null)}
              className="mb-6 text-red-500 font-medium"
            >
              ← Back
            </button>

            <div className="mb-6 text-red-500 font-medium" >Read Time : 5 Minutes</div>
          </div>
          {/* Blog Title and Date */}
          <div className="text-center px-4 md:px-20 ">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 break-words">
              {selectedBlog.title}
            </h1>
            <p className="text-lg text-gray-600 mt-4">{selectedBlog.description}</p>
            <p className="text-gray-500 mt-2">{selectedBlog.date}</p>
          </div>

          {/* Blog Image */}
          <div className="mt-6">
            <img
              src={selectedBlog.image}
              alt="Blog"
              className="w-full rounded-3xl"
            />
          </div>

          {/* Blog Content */}
          <div className="prose max-w-none text-[17px] text-gray-700 mt-6 px-4 md:px-20" >
            <div dangerouslySetInnerHTML={{ __html: selectedBlog.details }} />

            {/* Blockquote */}
            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">
              {selectedBlog.blockquote}
            </blockquote>

            <div dangerouslySetInnerHTML={{ __html: selectedBlog.extraDetails }} />
          </div>

          {/* Embedded Video */}
          <div className="mt-6 px-4 md:px-20 ">
            <div dangerouslySetInnerHTML={{ __html: selectedBlog.videoEmbed }} />
          </div>

          {/* Blog Sections */}
          {[
            { heading: selectedBlog.questions, content: null },
            { heading: selectedBlog.QuestionHeading, content: selectedBlog.detailedDescription },
            { heading: selectedBlog.secondQHeading, content: selectedBlog.secondDetailedDes },
            { heading: selectedBlog.ThirdQHeading, content: selectedBlog.ThirdDetailedDes },
            { heading: selectedBlog.ForthQHeading, content: selectedBlog.ForthDetailedDes },
            { heading: selectedBlog.FifthQHeading, content: selectedBlog.FifthDetailedDes },
            { heading: selectedBlog.SixthQHeading, content: selectedBlog.SixthDetailedDes },
          ].map((section, index) => (
            <div key={index} className="px-4 md:px-20  mt-6">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 break-words text-wrap">
                {section.heading}
              </h2>
              {section.content && (
                <div className="mt-4 prose max-w-none text-[17px] text-gray-700" dangerouslySetInnerHTML={{ __html: section.content }} />
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {blogData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} onClick={setSelectedBlog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
