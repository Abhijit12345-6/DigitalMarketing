import React from "react";
import { ArrowRight } from "lucide-react";
import Globe from "../component/about/Globe";
import OurVision from "../component/about/OurVision";
import Card from "../component/about/Card";
import { FaRocket, FaCheckCircle, FaUsers } from "react-icons/fa";
import Testimonial from "../component/home/Testimonial";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative text-black py-32 bg-gradient-to-r from-cyan-500 to-blue-500"
        // style={{
        //   background: `radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)`,
        // }}
      >
        <div className="container mx-auto px-20 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <div className="flex items-center gap-2 text-lg">
            <span>Home</span>
            <ArrowRight className="w-4 h-4" />
            <span>About</span>
          </div>
        </div>
        {/* Decorative Circle */}
        <div className="absolute top-24 left-0 w-32 h-32 bg-yellow-400 rounded-full opacity-20"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto md:py-20 md:px-32 p-10">
        <div>
          {/* Right Column - Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-6xl font-bold text-[#2B2B72] leading-tight text-justify">
              "We are a comprehensive creative and digital agency, serving
              clients worldwide, including some of the biggest brands."
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              Social Dynamics have many factors involved in becoming a strong
              and successful digital marketing company Bangalore & India.
              Digiency has strong leadership, innovative ideas, creative and
              intuitive strategy and a clear vision for the future.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-500">45+</h3>
                <p className="text-sm text-gray-600">Team Members</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-500">200+</h3>
                <p className="text-sm text-gray-600">Satisfied Clients</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-500">500+</h3>
                <p className="text-sm text-gray-600">Projects Done</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-500">8+</h3>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors mt-8">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <Globe />
      <OurVision />

      <div className="flex flex-wrap justify-center gap-6 md:p-20 p-10">
        <Card
          icon={<FaRocket />}
          title="Our Mission"
          description="At Social Dynamics, our mission is to empower businesses with innovative digital marketing strategies that drive growth, enhance online presence, and deliver measurable results."
        />
        <Card
          icon={<FaCheckCircle />}
          title="Our Values"
          description="We value creativity, integrity, and collaboration at Social Dynamics. Our team works with dedication and a passion for delivering solutions that align with your business goals."
        />
        <Card
          icon={<FaUsers />}
          title="Our Culture"
          description="Social Dynamics fosters a culture of creativity and inclusivity. We believe in building strong relationships within our team and with our clients to ensure the best outcomes for every project."
        />
      </div>

      <Testimonial />
    </div>
  );
};

export default About;
