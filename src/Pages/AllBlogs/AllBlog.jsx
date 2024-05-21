/* eslint-disable react/prop-types */
// import { Option, Select } from "@material-tailwind/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider";

import Swal from "sweetalert2";

const AllBlog = ({ blog }) => {
 const { user } = useContext(AuthContext);
 
  //  console.log("Recent",user);
   const wisherName=user?.displayName;
   const wisherEmail=user?.email;
    const handleWish = () => {
      const wishedBlog = {
        blogId,
        title,
        image,
        category,
        description,
        wisherName,
        wisherEmail,
        
      };
      
  
      fetch("https://blognest-server.vercel.app/addwish", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(wishedBlog),
      })
        .then((res) => res.json())
        .then((data) => {
           console.log(data);
          if (!data.success) {
            Swal.fire({
              title: "Oops!",
              text: "Something went wrong!",
              icon: "error",
            });
          }else{
            Swal.fire({
              title: "Success!",
              text: "WishList Added Successfully!",
              icon: "success",
            }); 
          }
        });
    };
    const { _id, title, image, description, category } = blog;
    const blogId=_id;

  return (
    <div className="mx-4 shadow-lg rounded-lg">
      
     

      <img
        src={image}
        alt=""
        className="mb-6 shadow-md rounded-lg bg-slate-50 w-full  sm:mb-0 xl:mb-6 xl:w-full"
      />

      <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8 ">
        <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
          <div className="order-1 sm:ml-6 xl:ml-0">
            <h3 className="mb-1 text-slate-900 font-semibold">
              <span className="mb-1 block text-sm leading-6 text-cyan-500">
                {category}
              </span>
              {title}
            </h3>
            <div className="prose prose-slate prose-sm text-slate-600">
              <p>{description}</p>
            </div>
            <div className="flex gap-10">
              <Link
                to={`/blogdetails/${_id}`}
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-cyan-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-cyan-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
              >
                Details
                <svg
                  className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </Link>

              <Link
              onClick={handleWish}
              to={`/wishBlog/${user?.email}`}
                className="mt-8 items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
              >
                WishList
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AllBlog;
