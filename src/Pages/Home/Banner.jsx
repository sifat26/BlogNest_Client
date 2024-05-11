const Banner = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://img.freepik.com/free-photo/toy-bricks-table_144627-48267.jpg?w=996&t=st=1715402125~exp=1715402725~hmac=6b06ea82e63bf98b677208aed8487e15471a44bf72fd448e199c44fbabad73a1"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Welcome to Our Awesome BlogNest
          </h1>
          <p className="text-lg text-gray-300 mb-8">
          Where stories find their sanctuary. Explore diverse voices and insightful journeys in our cozy corner of the blogosphere. Connect, share, and nurture creativity in our vibrant community. Join us as we build bridges through the power of storytelling.
          </p>
          <a
            href="#"
            className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;