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
      <div className="flex gap-5 justify-center">
        <form >
          <h2 className="block  text-blueGray-600 text-lg font-bold ">Search</h2>
            <div className=' p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300 '>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                name='search'
                placeholder='Enter Job Title'
                aria-label='Enter Job Title'
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-green-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
          </form>
        <div className="">
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
            <Option value="Self-Improvement">Self-Improvement</Option>
            <Option value="Fashion">Fashion</Option>
          </Select>
        </div>
        
        
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