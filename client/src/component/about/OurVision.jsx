import image1 from "../../assets/inner-image1.jpg";
import image2 from "../../assets/inner-image2.jpg";

export default function OurVision() {
  return (
    <section className="relative py-16 px-4 md:px-8 lg:px-16 overflow-hidden min-h-screen">
      {/* Background Decoration */}
      <div
        className="absolute right-0 top-1/2 w-[800px] h-[800px] bg-[#ff3e6c] rounded-full opacity-10 -z-10 transform -translate-y-1/2 translate-x-1/4"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-[#ff3e6c] font-bold text-xl uppercase tracking-wide">
              Our Vision
            </h3>
            <h2 className="text-[#1a1060] text-4xl md:text-5xl font-bold leading-tight">
              Some of our Corporate Services Working!
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Social Dynamics, we are committed to turning our clients'
              visions into reality. We believe that every successful business
              thrives by embracing this approach, but it's essential to
              understand how it works to maximize its impact. Your website
              should be the first place to gather insights into what your
              customers want. With our expertise at Social Dynamics, we help you
              stand out from your competition, drive more traffic to your site,
              and convert those visitors into sales. Let us help you elevate
              your online presence and achieve your business goals.
            </p>
          </div>

          {/* Images */}
          <div className="relative h-[600px]">
            <div className="relative z-10 h-full">
              <img
                src={image1}
                alt="Professional in office"
                className="rounded-lg shadow-xl absolute top-0 right-0 w-3/4 h-[400px] object-cover"
              />
              <img
                src={image2}
                alt="Team collaboration"
                className="rounded-lg shadow-xl absolute bottom-0 left-0 w-3/4 h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
