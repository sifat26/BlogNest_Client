import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import SingleWishList from "./SingleWishList";

const WishList = () => {
    const { user } = useContext(AuthContext);
    //  console.log("I:",user);
    const [loading, setLoading] = useState(true);
    const [contol,setControl] = useState(false);
  
  const [wishBlog, setWishBlog] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:5000/wishBlog/${user.email}`);
      const data = await res.json();
      setLoading(false);
      setWishBlog(data);
      console.log("Etai amar", data);
    })();
  }, [user,contol]);
    return (
        <div className="my-12">
      <h2 className="text-5xl text-center font-extrabold my-12">Wish List </h2>
      {/* <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
         {
          wishBlog.map(wishBlog =><SingleWishList key={wishBlog.blogId} blog={wishBlog} />)
        }

         </div> */}
    </div>
    );
};

export default WishList;