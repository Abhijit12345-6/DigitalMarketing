import React from "react";
import globe from "../../assets/globe.png";

const Globe = () => {
  return (
    <div className="flex flex-col md:flex-row gap-20 justify-between items-center p-10 md:p-20 bg-white">
      {/* Globe Image Section */}
      <div className="w-full  h-full mb-8 md:mb-0">
        <img src={globe} alt="Globe" className="w-full h-full object-contain" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:w-1/2 justify-center items-start gap-12 md:text-left">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col items-start justify-start">
            <h2 className="text-5xl font-bold text-[#007f61] mr-2">99%</h2>
            <p className="text-gray-700 text-lg">Client Satisfaction</p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="text-5xl font-bold text-[#007f61] mr-2">80+</h2>
            <p className="text-gray-700 text-lg">Completed Projects</p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="text-5xl font-bold text-[#007f61] mr-2">6+</h2>
            <p className="text-gray-700 text-lg">Years Of Experience</p>
          </div>
        </div>
      </div>
      <div className="md:w-[90%] w-full">
        <p className="text-gray-600 leading-relaxed text-md text-justify">
          The digital marketing team at Social Dynamics has a clear vision for
          the future and operates with a high level of discipline, ensuring
          success in an ever-growing competitive market. If you're launching a
          new business on a budget, we can help you build your digital marketing
          strategy from the ground up. Our expertise will empower you to create
          a solid foundation for your business, enabling long-term growth and
          success while helping you stay ahead in the digital landscape.
        </p>
      </div>
    </div>
  );
};

export default Globe;
