import React from 'react';
import RightImg from '../assets/contact.webp';

function Hero() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-center p-6 lg:p-12 space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Left Section */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800">
            Find the Best Summer Collection Here!
          </h2>
          <p className="text-gray-600 lg:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            modi maxime dolorem mollitia provident officia explicabo, ipsa
            commodi laborum.
          </p>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300">
            Explore Now
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src={RightImg}
            alt="Summer Collection"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
