import React from "react";
import { motion, useAnimation } from "framer-motion";
import { CiStar } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { useEffect, useState } from "react";
import "./Launch.css";

const Launch = () => {
  const motionVariantsTop = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  };

  const motionProperties = {
    initial: "hidden",
    whileInView: "visible",
    transition: { duration: 1, delay: 0.5 },
    viewport: { once: true },
  };

  // Animation logic for numbers
  const animateNumber = (start, end, duration) => {
    const [value, setValue] = useState(start);

    useEffect(() => {
      const frameDuration = 1000 / 60; // 60 fps
      const totalFrames = Math.round((duration * 1000) / frameDuration);
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const current = Math.round(progress * (end - start) + start);
        setValue(current);

        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);
    }, [start, end, duration]);

    return value;
  };

  const clientSatisfaction = animateNumber(1, 99, 2);
  const completedProjects = animateNumber(1, 80, 2);
  const yearsExperience = animateNumber(1, 6, 2);

  return (
    <React.Fragment>
      <div className="w-full h-auto text-center bg-black flex items-center py-8 md:py-16">
        <motion.div
          variants={motionVariantsTop}
          {...motionProperties}
          className="mx-auto max-w-7xl py-8 px-6 lg:px-8"
        >
          {/* Techmentee Section Heading */}
          <section className="contents mb-8">
            <div className="content">
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                SOCIAL DYNAMICS
              </h2>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-400">
                SOCIAL DYNAMICS
              </h2>
            </div>
          </section>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white lg:mt-32">
            {/* Card 1 */}
            <div className="flex flex-row items-center justify-center gap-5 border text-yellow-400 border-yellow-400 rounded-lg py-10 px-6 md:px-12 hover:bg-yellow-400 hover:text-white">
              <CiStar size={48} />
              <div className="flex flex-col justify-start items-start">
                <h3 className="text-3xl md:text-4xl font-bold mt-2">
                  {clientSatisfaction}%
                </h3>
                <p className="text-base md:text-xl font-semibold">
                  Client Satisfaction
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-row items-center justify-center gap-5 border text-green-400 border-green-400 rounded-lg py-10 px-6 md:px-12 hover:bg-green-400 hover:text-white">
              <AiOutlineLike size={48} />
              <div className="flex flex-col justify-start items-start">
                <h3 className="text-3xl md:text-4xl font-bold mt-2">
                  {completedProjects}+
                </h3>
                <p className="text-base md:text-xl font-semibold">
                  Completed Projects
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-row items-center justify-center gap-5 border text-cyan-400 border-cyan-400 rounded-lg py-10 px-6 md:px-12 hover:bg-cyan-400 hover:text-white">
              <BiTimeFive size={48} />
              <div className="flex flex-col justify-start items-start">
                <h3 className="text-3xl md:text-4xl font-bold mt-2">
                  {yearsExperience}+
                </h3>
                <p className="text-base md:text-xl font-semibold">
                  Years Of Experience
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </React.Fragment>
  );
};

export default Launch;
