import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:5000/blogdetails/${id}`);
      const data = await res.json();
      console.log(data);
      setBlog(data);
    })();
  }, [id]);
  const {
    title,
    image,
    category,
    description,
    userName,
    userEmail,
    long_description,
  } = blog;
  console.log(blog);
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Blog Title */}
      <header className="text-center mb-8">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Blog Details</h1>
      <h2 className="flex flex-row flex-nowrap items-center my-8">
        <span className="flex-grow block border-t border-black"></span>
        <span className="flex-none block mx-4 px-4 py-2.5 text-md rounded leading-none font-medium bg-black text-white">
        {category}
    </span>
        <span className="flex-grow block border-t border-black"></span>
    </h2>
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">{title}</h1>
        <p className="text-xl text-gray-500">{description}</p>
      </header>

      {/* Main Image */}
      
      <div className="relative mb-8">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Long Description */}
      <article className="prose prose-lg max-w-none prose-indigo">
        <p>{long_description}</p>
      </article>
    </div>
  );
};

export default BlogDetails;
