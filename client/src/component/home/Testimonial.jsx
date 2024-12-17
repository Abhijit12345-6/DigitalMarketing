import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon1 from "../../assets/user.jpg";
import icon2 from "../../assets/user1.jpg";
import icon3 from "../../assets/women1.jpg";
import icon4 from "../../assets/women2.jpg";

const testimonials = [
  {
    name: "Chandra Shekhar (CSR)",
    content:
      "Social Dynamics is helping me attract new customers. They understood my business needs and delivered a website within the targeted timeframe. Their pricing is reasonable, which is perfect for growing businesses. Their quick response to any issues is impressive. Truly the best website design company in Bangalore.",
    avatar: icon1 ,
  },
  {
    name: "Bharath N",
    content:
      "The team at Social Dynamics consists of true professionals. They understood my vision and brought it to life with fantastic designs and layouts. Their communication and turnaround time were outstanding. Working with Social Dynamics was one of the smartest decisions we made for our business.",
    avatar: icon2 ,
  },
  {
    name: "Priya Sharma",
    content:
      "Social Dynamics transformed our digital presence with their innovative digital marketing strategies. Our website traffic and lead conversions have significantly increased. Their expertise in SEO and social media marketing is top-notch. I highly recommend them to anyone looking to grow their business online.",
    avatar:icon3 ,
  },
  {
    name: "Rahul Verma",
    content:
      "Partnering with Social Dynamics was a game-changer for our brand. They delivered a beautiful and functional website and implemented a marketing strategy that drove results. Their dedication, creativity, and customer service set them apart from other agencies.",
    avatar:icon1 ,
  },
  {
    name: "Ananya Patel",
    content:
      "The team at Social Dynamics provided us with an incredible website and a clear digital marketing roadmap. Their attention to detail and understanding of our industry helped us achieve our business goals faster. I’m extremely satisfied with their service!",
    avatar: icon4,
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    customPaging: (i) => (
      <div className="w-3 h-3 bg-gray-300 rounded-full mt-8"></div>
    ),
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-pink-500 font-medium mb-2">CLIENT TESTIMONIAL</h3>
          <h2 className="text-4xl font-bold text-navy-900">
            What People are Saying!
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <div className="mb-6">
                    <span className="text-6xl text-gray-300 font-serif leading-none">
                      "
                    </span>
                    <p className="text-gray-600 text-lg leading-relaxed mt-2">
                      {testimonial.content}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.name}'s avatar`}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <h4 className="font-bold text-lg text-gray-900">
                      {testimonial.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx global>{`
        .slick-dots li button:before {
          display: none;
        }
        .slick-dots li.slick-active div {
          background-color: #ec4899;
        }
        .slick-prev,
        .slick-next {
          z-index: 10;
          width: 40px;
          height: 40px;
        }
        .slick-prev {
          left: -50px;
        }
        .slick-next {
          right: -50px;
        }
        .slick-prev:before,
        .slick-next:before {
          font-size: 40px;
          color: #ec4899;
        }
        @media (max-width: 1024px) {
          .slick-prev {
            left: -30px;
          }
          .slick-next {
            right: -30px;
          }
        }
        @media (max-width: 640px) {
          .slick-prev,
          .slick-next {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
