import React from "react";
import icon1 from "../../assets/brand.png";
import icon2 from "../../assets/digital-marketing.png";
import icon3 from "../../assets/seo1.png";
import icon4 from "../../assets/email.png";
import icon5 from "../../assets/influencer.png";
import icon6 from "../../assets/marketing.png";

const OurServices = () => {
  return (
    <section className="bg-blue-50 md:p-20 p-10 text-center">
      <div className="w-full mx-auto">
        {/* Section Header */}
        <h2 className="text-pink-500 text-xl font-bold uppercase">
          Our Services
        </h2>
        <h3 className="text-4xl font-bold text-gray-800 my-2">
          We Provide a Wide Range of Digital Services
        </h3>
        <p className="text-gray-600 mb-10 w-full text-start text-lg mx-auto">
          At Social Dynamics, we offer a comprehensive range of digital
          marketing services designed to elevate your business. From SEO to
          content marketing, our expert team  ensures your brand
          stays ahead of digital trends. We're here to help you make a lasting
          impact and thrive in the digital landscape.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card */}
          {[
            {
              icon: icon1,
              title: "Branding",
              description:
                "At Social Dynamics, our branding services help you define your identity, develop a cohesive marketing strategy, and design eye-catching visuals that resonate with your audience.",
            },
            {
              icon: icon2,
              title: "Social Media Marketing",
              description:
                "Our social media marketing solutions are designed to boost your brand's engagement and visibility across platforms. Social Dynamics helps you connect with your audience and drive growth effectively.",
            },
            {
              icon: icon3,
              title: "Search Engine Marketing",
              description:
                "With our SEM services, we promote your business through strategic sponsored listings on platforms like Google and Bing. Social Dynamics ensures you get targeted traffic and higher ROI.",
            },
            {
              icon: icon4,
              title: "Email Marketing",
              description:
                "Email marketing remains a powerful tool for customer engagement. Social Dynamics helps you create personalized campaigns that drive conversions and build lasting relationships.",
            },
            {
              icon: icon5,
              title: "Mobile Marketing",
              description:
                "Reach your customers where they are with our mobile marketing strategies. Social Dynamics helps you optimize campaigns for mobile users and maximize your outreach.",
            },
            {
              icon: icon6,
              title: "Offshore Development",
              description:
                "Social Dynamics offers reliable offshore development services to help businesses scale efficiently. Our expert teams deliver quality solutions tailored to your specific needs.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white px-6 py-8 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-20 filter invert-36 sepia-100 saturate-3000 hue-rotate-170 brightness-95 contrast-100"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
