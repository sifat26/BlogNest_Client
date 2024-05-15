import { Link } from "react-router-dom";

const RecentBlog = ({ blog }) => {
  const { _id, title, image, description, category } = blog;
  return (
    <div>
      <div className="  shadow-lg rounded-lg">
        <img className="w-full " src={image} alt="Beginner Blogger Tips" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
          <div className="mt-4">
            <span className="text-gray-600 text-sm">Category: {category} </span>
          </div>
          <div className="flex justify-between mt-4">
            <Link to={`/blogDetails/${_id}`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                Details
              </button>
            </Link>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
