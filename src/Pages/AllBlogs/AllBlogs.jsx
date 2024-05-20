import { useEffect, useState } from "react";
import AllBlog from "./AllBlog";
import { Option, Select } from "@material-tailwind/react";

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    // const [filter, setFilter] = useState('');
    useEffect(() => {
      (async () => {
        const res = await fetch("http://localhost:5000/blogs");
        const data = await res.json();
       
         setBlogs(data);
        // setBlogs(data);
      })();
    }, []);
    const handleAllFilter=(category)=>{
      // setLoading(true);
      // const category = category;
      console.log("fun",category);
      
      (async()=>{
        const res = await fetch(`http://localhost:5000/filterblog/${category}`);
        const data = await res.json();
        
        setBlogs(data);
        // setLoading(false)
  
      })();
    }
    return (
        <div className="my-12">
      <h2 className="text-5xl text-center font-extrabold my-12">All Blog</h2>
      <div className="w-full">
          <label
            className="  block  text-blueGray-600 text-lg font-bold mb-2"
          >
            Filter By
          </label>
          <Select 
          value="{filter}"
          onChange={(e)=>{
            console.log(e);
            handleAllFilter(e)
          }
            
          }
          label="Select Filter Option">
              {/* <Option  value="">filter</Option> */}
            <Option  value="Health">Health</Option>
            <Option value="Art">Art</Option>
            <Option value="Travel">Travel</Option>
          </Select>
        </div>
      <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
         {
          blogs.map(blog =><AllBlog key={blog._id} blog={blog} />)
        }

         </div>
    </div>
    );
};

export default AllBlogs;