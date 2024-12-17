import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[300px] flex items-center justify-start px-8 md:px-16 bg-gradient-to-r from-cyan-500 to-blue-500"
        // style={{
        //   background: `radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)`
        // }}
      >
        <div className="text-white z-10">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <div className="flex items-center gap-2">
            <a href="/" className="text-white font-bold hover:text-white">
              Home
            </a>
            <span>/</span>
            <span className="text-white">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-gradient-to-br from-[#f8fdf4] to-white py-16 relative overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-pink-100/50 to-pink-200/30 rounded-full translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-[#001f54] text-center mb-16">
            We're Always Eager to Hear From You!
          </h2>

          <div className="flex justify-center items-center">
            <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
              {/* Address Column */}
              <div className="space-y-8 text-center md:text-left">
                <div>
                  <h3 className="text-xl font-bold text-[#001f54] mb-4">Address 1</h3>
                  <p className="text-gray-600 leading-relaxed">
                    1/d, 1st Cross Rd, AECS B Block,<br />
                    Wellington Paradise, Singasandra,<br />
                    Bengaluru, Karnataka 560068.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#001f54] mb-4">Address 2</h3>
                  <p className="text-gray-600 leading-relaxed">
                    107B, 1st Floor, Brigade Arcade,<br />
                    Brigade Metropolis, Garudachar Palya,<br />
                    Whitefield, Bengaluru, Karnataka 560048.
                  </p>
                </div>
              </div>

              {/* Contact Details Column */}
              <div className="space-y-8 text-center md:text-left">
                <div>
                  <h3 className="text-xl font-bold text-[#001f54] mb-4">Email</h3>
                  <a href="mailto:info@digiency.in" className="text-gray-600 hover:text-[#ff2e63]">
                    info@digiency.in
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#001f54] mb-4">Phone</h3>
                  <a href="tel:+918333808098" className="text-gray-600 hover:text-[#ff2e63]">
                    +91 8333808098
                  </a>
                </div>

                {/* Social Media Links */}
                <div className="pt-4">
                  <div className="flex justify-center md:justify-start gap-4">
                    <a href="#" className="text-gray-600 hover:text-[#ff2e63] transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-[#ff2e63] transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
