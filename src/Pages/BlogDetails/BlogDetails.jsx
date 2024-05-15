import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:5000/blogDetails/${id}`);
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
    <div>
      <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-white">
        Product Details
      </h2>
    </div>
  );
};

export default BlogDetails;
