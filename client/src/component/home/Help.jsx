import React from "react";
import icon1 from "../../assets/social-media.webp";
import icon2 from "../../assets/dms.avif";
import icon3 from "../../assets/help3.webp";
import icon4 from "../../assets/seo.png";

const Help = () => {
  return (
    <div className="bg-[#161e17] text-white min-h-screen md:p-20 p-10">
      <div className="mx-auto flex lg:flex-row flex-col gap-12 justify-center items-center">
        <div className="lg:w-[60%] w-full">
          <h3 className="text-pink-600 text-lg font-semibold uppercase mb-2">
            What We Can Do For You
          </h3>
          <h2 className="text-4xl font-bold">
            Services That Drive Your Growth.
          </h2>
          <p class="mt-4 text-gray-400 mx-auto text-justify">
            At <strong>Social Dynamics</strong>, we help businesses thrive in
            the digital world. Our dedicated team of experts crafts innovative
            strategies that combine creativity, data insights, and cutting-edge
            technology to boost your brand's visibility, engage your audience,
            and drive real results. With Social Dynamics by your side, you’re
            not just growing — you're leading your industry.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-[#212822] hover:bg-slate-50 hover:text-black rounded-lg shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer">
            <div className="flex flex-col items-start mb-4 gap-6">
              <img src={icon2} alt="Web Design" className="w-auto h-12" />
              <div>
                <h3 className="text-2xl font-bold">Web Design</h3>
              </div>
              <p className="text-gray-400">
                Our web design services focus on creating visually appealing,
                user-friendly designs that enhance user experience and improve
                navigability.
              </p>
            </div>
          </div>
          <div className="p-6 bg-[#212822] hover:bg-slate-50 hover:text-black rounded-lg shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer">
            <div className="flex flex-col items-start mb-4 gap-6">
              <img src={icon3} alt="Web Development" className="w-auto h-12" />
              <div>
                <h3 className="text-2xl font-bold">Web Development</h3>
              </div>
              <p className="text-gray-400">
                Our web development solutions include custom websites, eCommerce
                platforms, and applications built using technologies like Java,
                C#, and PHP.
              </p>
            </div>
          </div>
          <div className="p-6 bg-[#212822] hover:bg-slate-50 hover:text-black rounded-lg shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer">
            <div className="flex flex-col items-start mb-4 gap-6">
              <img src={icon4} alt="SEO" className="w-auto h-12" />
              <div>
                <h3 className="text-2xl font-bold">SEO</h3>
              </div>
              <p className="text-gray-400">
                Our SEO strategies help you rank higher on search engines,
                driving organic traffic and ensuring your brand gets noticed for
                the right keywords.
              </p>
            </div>
          </div>
          <div className="p-6 bg-[#212822] hover:bg-slate-50 hover:text-black rounded-lg shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer">
            <div className="flex flex-col items-start mb-4 gap-6">
              <img
                src={icon1}
                alt="Digital Marketing"
                className="w-auto h-12"
              />
              <div>
                <h3 className="text-2xl font-bold">Digital Marketing</h3>
              </div>
              <p className="text-gray-400">
                We leverage the power of digital platforms to create impactful
                marketing campaigns that connect with your audience and drive
                conversions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
