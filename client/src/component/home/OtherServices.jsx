import React from "react";
import icon1 from "../../assets/other1.webp";
import icon2 from "../../assets/other2.webp";
import icon3 from "../../assets/other3.webp";
import icon4 from "../../assets/other4.webp";
import icon5 from "../../assets/other5.webp";
import icon6 from "../../assets/other6.webp";

const OtherServices = () => {
  const services = [
    {
      title: "Search Engine Marketing",
      image: icon1,
    },
    {
      title: "Email Marketing",
      image: icon2,
    },
    {
      title: "Mobile Marketing",
      image: icon3,
    },
    {
      title: "Social Media Marketing",
      image: icon4,
    },
    {
      title: "Branding",
      image: icon5,
    },
    {
      title: "Offshore Development",
      image: icon6,
    },
  ];

  return (
    <section className="bg-gray-900 text-white lg:p-20 p-10">
      <div className="container mx-auto text-start flex lg:flex-row flex-col justify-center items-center gap-12">
        {/* Title */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-red-500 font-bold uppercase text-md mb-2">
            OTHER SERVICES
          </h2>
          <p className="text-xl md:text-5xl font-bold">
            Offer expert advice and guidance to clients in digital marketing
            services.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:bg-gray-700 transition duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="mx-auto mb-4 w-auto h-20 object-contain"
              />
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
