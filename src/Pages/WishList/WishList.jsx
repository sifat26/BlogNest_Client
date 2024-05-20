import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import SingleWishList from "./SingleWishList";
import Swal from "sweetalert2";

const WishList = () => {
  const { user } = useContext(AuthContext);
  //  console.log("I:",user);
  const [loading, setLoading] = useState(true);
  const [control, setControl] = useState(false);

  const [wishBlog, setWishBlog] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:5000/wishBlog/${user.email}`);
      const data = await res.json();
      setLoading(false);
      setWishBlog(data);
       console.log("Etai amar", data);
    })();
  }, [user, control]);
  const handleDelete=_id=>{
    console.log(_id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        
             fetch(`http://localhost:5000/wishBlog/${_id}`,{
                method: "DELETE"
             })  
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                  setControl(!control)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Product has been deleted.",
                        icon: "success"
                      });

                }
            })
         }
      });
  }
  return (
    <div className="my-12">
      <h2 className="text-5xl text-center font-extrabold my-12">Wish List </h2>
      <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {wishBlog.map((wishBlog) => (
          <SingleWishList key={wishBlog._id} wishBlog={wishBlog}
          handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default WishList;
