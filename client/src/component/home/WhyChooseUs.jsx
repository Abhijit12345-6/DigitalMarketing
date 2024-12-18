import React from "react";
import digital from "../../assets/choose.png";

const WhyChooseUs = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center bg-[#F5FEFF] px-8 py-12 lg:px-20">
      {/* Text Content */}
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h2 className="text-3xl lg:text-5xl font-semibold text-[#16194F] mb-6 leading-snug">
          Why Choose Social Dynamics for <br /> Digital Marketing Services
        </h2>
        <p className="text-gray-600 mb-4 leading-relaxed text-justify">
          When it comes to building a powerful digital marketing strategy or
          launching your online business, choosing the right digital marketing
          partner is crucial. At <strong>Social Dynamics</strong>, we specialize
          in comprehensive digital marketing solutions, web design, and web
          development. Our expertise ensures that we craft strategies that align
          with your brand identity and business objectives, helping you stand
          out in the digital world.
        </p>
        <p className="text-gray-600 mb-4 leading-relaxed text-justify">
          At <strong>Social Dynamics</strong>, we stay ahead of the latest
          trends in digital marketing, web development, and design. Our services
          include Search Engine Optimization (SEO), social media marketing, link
          building, email marketing, content creation, and more. These essential
          services boost your online presence and drive profitability for your
          business.
        </p>
        <p className="text-gray-600 leading-relaxed text-justify">
          Whether you want to increase brand awareness, attract more leads, or
          boost sales, our team of professionals is here to guide you. We help
          you harness the power of digital marketing to ensure your products and
          services reach the right audience and drive measurable results. With
          **Social Dynamics**, your success is our mission.
        </p>
      </div>

      {/* Image */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src={digital}
          alt="Digital Marketing Illustration"
          className="w-full max-w-md lg:max-w-lg h-auto"
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
