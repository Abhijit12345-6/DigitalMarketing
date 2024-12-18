import React from "react";
import icon from "../../assets/icon.jpg";

const AboutUsSection = () => {
  return (
    <section className="bg-white py-12 md:px-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left: Illustration */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src={icon} // Replace with your image path
            alt="Creative Illustration"
            className="w-4/5 md:w-full"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
          <h3 className="text-red-500 font-bold uppercase text-sm mb-2">
            About Us
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
            Creative Digital Marketing Agency 
          </h2>
          <p className="text-gray-600 leading-relaxed mb-2 text-justify">
            At Social Dynamics, we understand the key factors that contribute to
            becoming a strong and successful digital marketing company. Our
            success is driven by exceptional leadership, innovative ideas,
            creative strategies, and a clear vision for the future. We are
            dedicated to maintaining discipline and adaptability in a highly
            competitive digital landscape.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6 text-justify">
            Whether you're starting a new business on a budget or looking to
            enhance your existing online presence, Social Dynamics can help you
            craft a powerful and effective digital marketing strategy. Let us
            guide you toward growth and success in this evolving market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
