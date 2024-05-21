const UpdateBlog = () => {
    
    return (
        <div>
             <section className=" dark:bg-gray-900 mx-4">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Update Your Blog
          </h2>

          <form >
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label className="block mb-2 text-base font-medium  dark:text-white">
                  Image URL
                </label>
                <input
                  type="text"
                  name="image"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type photo URL"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-base font-medium dark:text-white">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type Blog"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-base font-medium dark:text-white">
                  Category Name
                </label>
                <select
                  name="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                >
                  <option value="Health">Health</option>
                  <option value="Travel">Travel</option>
                  <option value="Self-Improvement">Self-Improvement</option>
                  <option value="Art">Art</option>
                  <option value="Fashion">Fashion</option>
                </select>
              </div>
            </div>
            <div className="w-full my-4">
              <label className="block mb-2 text-base font-medium dark:text-white">
                Short-Description
              </label>
              <textarea
                rows="4"
                type="text"
                name="description"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter Short Description"
                required
              />
            </div>
            <div className="w-full my-4">
              <label className="block mb-2 text-base font-medium dark:text-white">
                Long-Description
              </label>
              <textarea
                type="text"
                name="long_description"
                className="h-60 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter Long Description"
                required
              />
            </div>
            <button
              type="submit"
              className=" w-full items-center px-5 py-2.5 mt-4 sm:mt-6 text-lg font-semibold text-center text-white  bg-[#E74C3C] rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Add Your Blog
            </button>
          </form>
        </div>
      </section>
            
        </div>
    );
};

export default UpdateBlog;