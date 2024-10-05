const Banner = () => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-8 rounded-lg shadow-lg">
      {/* Left side - Title, Text, Button */}
      <div className="flex flex-col justify-center space-y-4 w-1/2">
        <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
        <button className="w-fit px-6 py-3 text-white bg-green-500 hover:bg-green-700 rounded-lg">
          View The List
        </button>
      </div>

      {/* Right side - Image */}
      <div className="w-1/2 flex justify-center">
        <img
          src="https://i.ibb.co/LxxVqHh/Banner.png"
          alt="Book Cover"
          className="h-96 object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Banner;
