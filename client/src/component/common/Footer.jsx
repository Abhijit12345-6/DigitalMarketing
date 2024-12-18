import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import right from "../../assets/footer3.png";
import banner from "../../assets/footerBanner.png";

const Footer = () => {
  const services = {
    india: [
      "Search engine optimisation (SEO)",
      "Search Engine Marketing (SEM)",
      "Social Media Marketing (SMM)",
      "Digital Marketing",
      "Website Designing",
      "Website Development",
      "Mobile Marketing",
      "Email Marketing",
      "Branding",
    ],
    bangalore: [
      "Search engine optimisation (SEO)",
      "Search Engine Marketing (SEM)",
      "Social Media Marketing (SMM)",
      "Digital Marketing",
      "Website Designing",
      "Website Development",
      "Mobile Marketing",
      "Email Marketing",
      "Branding",
    ],
  };

  return (
    <footer className="relative w-full">
      {/* Top curved section with CTA */}
      <div className="relative bg-gradient-to-r from-sky-400 to-cyan-200 text-white px-20">
        <div className="container mx-auto px-4 py-16 md:py-32">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left max-w-xl">
              <h3 className="text-lg font-medium mb-2">LET'S WORK TOGETHER</h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Need a Successful Your Project?
              </h2>
              <button className="bg-white text-[#FF1850] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Call Us
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={right}
                alt="Person thinking"
                className="w-full h-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-[120px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z"
              fill="#1C1C3C"
            />
          </svg>
        </div>
      </div>

      {/* Main footer content */}
      <div className="bg-[#1C1C3C] text-white pt-16 pb-8 lg:px-20">
        <div className="container mx-auto px-4">
          {/* Main footer grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
            {/* Company info */}
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold mb-6 text-[#FF1850]">
                Social Dynamic
              </h2>
              <p className="text-gray-400 mb-6">
                Social Dynamics embodies the key elements necessary to be a
                leading and successful digital marketing company across India.
                With strong leadership, innovative ideas, creative strategies,
                and a clear vision for the future, Social Dynamics is committed
                to helping businesses thrive in the digital world. Our intuitive
                approach and dedication set us apart, making us the trusted
                partner for businesses looking to achieve lasting success
                online.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Services in India */}
            <div className="lg:col-span-4">
              <h3 className="text-xl font-bold mb-6">Our Services</h3>
              <div className="flex flex-wrap gap-2">
                {services.india.map((service, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white after:content-['|'] after:ml-2 last:after:content-none"
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer banner image */}
            <div className="w-full lg:col-span-4">
              <img
                src={banner}
                alt="Digital Marketing"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Address */}
          <div className="border-t border-gray-800 pt-8 pb-4">
            <h3 className="text-xl font-bold mb-4">Office Address</h3>
            <p className="text-gray-400">
              #6, Outer Ring Rd, 1st Stage, BTM Layout, Bengaluru, Karnataka
              560068
            </p>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-4 mt-4">
            <p className="text-center text-gray-500">
              &copy; {new Date().getFullYear()} SOCIAL DYNAMICS. All rights
              reserved.
            </p>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-[#FF1850] p-3 rounded-md hover:bg-[#ff1850]/90 transition-colors"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
