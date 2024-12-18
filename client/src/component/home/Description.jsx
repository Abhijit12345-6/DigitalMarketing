import React from "react";
import banner from "../../assets/welcome.png";

const Description = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen md:p-10 py-32 bg-gradient-to-r from-sky-400 to-cyan-200"
      // style={{
      //   background: "linear-gradient(to right, #E0FFE3, #F7EAFB)",
      // }}
    >
      <div className="mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-[#000e2e]">
            Best Digital Marketing <br /> Company
          </h1>
          <p className="text-gray-700 text-lg text-justify">
            Boost Your Brand with Social Dynamics’ Expert Digital Marketing
            Services At Social Dynamics, we are dedicated to creating impactful
            online strategies tailored to elevate your brand’s digital presence.
            Our expertise lies in attracting the right audience, driving
            engagement, and delivering measurable results. Partner with us to
            transform your online footprint, build a loyal customer base, and
            achieve dynamic success through innovative digital marketing
            solutions. Ready to amplify your brand? Contact Social Dynamics
            today and let’s make your vision a reality.
          </p>
          <button className="bg-[#ff4b5c] hover:bg-[#e63946] text-white py-3 px-6 rounded-lg shadow-lg transition-all duration-300">
            Contact Now
          </button>
        </div>

        {/* Right Illustration */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
          {/* Character Illustration */}
          <img src={banner} alt="Digital Marketing" className="w-full " />

          {/* Floating Icons */}
          <div className="absolute top-12 right-0 w-12 h-12">
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
