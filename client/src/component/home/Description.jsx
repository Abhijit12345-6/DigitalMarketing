import React from "react";
import banner from "../../assets/banner1.webp";

const Description = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen md:p-10 py-32"
      style={{
        background: "linear-gradient(to right, #E0FFE3, #F7EAFB)",
      }}
    >
      <div className="mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-[#000e2e]">
            Best Digital Marketing <br /> Company in Globe
          </h1>
          <p className="text-gray-700 text-lg">
            Boost Your Brand with Social Dynamics' Digital Marketing Services At
            Social Dynamics, we specialize in crafting powerful online
            strategies that amplify your digital presence and attract more
            customers. Let us help you transform your online footprint and
            achieve dynamic results through our expert digital marketing
            solutions.
          </p>
          <button className="bg-[#ff4b5c] hover:bg-[#e63946] text-white py-3 px-6 rounded-lg shadow-lg transition-all duration-300">
            Contact Now
          </button>
        </div>

        {/* Right Illustration */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
          {/* Character Illustration */}
          <img
            src={banner}
            alt="Digital Marketing"
            className="w-full max-w-sm"
          />

          {/* Floating Icons */}
          <div className="absolute top-0 right-0 w-12 h-12">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
              alt="HTML"
            />
          </div>
          {/* Add other icons here in positions like top-left, bottom-left, etc. */}
        </div>
      </div>
    </div>
  );
};

export default Description;
