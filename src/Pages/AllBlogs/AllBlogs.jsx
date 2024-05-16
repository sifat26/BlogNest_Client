import { useEffect, useState } from "react";
import AllBlog from "./AllBlog";

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
      (async () => {
        const res = await fetch("http://localhost:5000/blogs");
        const data = await res.json();
       
         setBlogs(data);
        // setBlogs(data);
      })();
    }, []);
    return (
        <div className="my-12">
      <h2 className="text-5xl text-center font-extrabold my-12">All Blog</h2>
      <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
         {
          blogs.map(blog =><AllBlog key={blog._id} blog={blog} />)
        }

         </div>
    </div>
    );
};

export default AllBlogs;