import React from "react";
import AboutUsSection from "../component/home/AboutUsSection";
import Description from "../component/home/Description";
import WhyChooseUs from "../component/home/WhyChooseUs";
import Help from "../component/home/Help";
import OtherServices from "../component/home/OtherServices";
import Launch from "../component/home/Launch";
import OurServices from "../component/home/OurServices";
import Faq from "../component/home/Faq";
import Testimonial from "../component/home/Testimonial";

const Home = () => {
  return (
    <div>
      <Description />
      <AboutUsSection />
      <Help/>
      <WhyChooseUs/>
      <OtherServices/>
      <Launch/>
      <Testimonial/>
      <Faq/>
      <OurServices/>
    </div>
  );
};

export default Home;
