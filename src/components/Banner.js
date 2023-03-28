import React from "react";

// Images
import Image from "../assets/my.png";

// icons
import { FaGithub, FaYoutube, FaDribbble, FaTelegram } from "react-icons/fa";

// Type Animation
import { TypeAnimation } from "react-type-animation";

// motion
import { motion } from "framer-motion";

// FadeIn
import { fadeIn, fadein } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[50px] font-bold leading-[0.8] lg:text-[110px]  pb-2"
            >
              Bilol.
              <span>tj</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[30px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">Ман </span>
              <TypeAnimation
                sequence={[
                  "таҳиягар ҳастам",
                  2000,
                  "дизайнер ҳастам",
                  2000,
                  "бозигар ҳастам",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 mx-w-lg mx-auto lg:mx-0"
            >
              Lorem Lrem Lorem Lorem Lorem Lrem Lorem Lorem Lorem Lrem Lorem
              Lorem Lorem Lrem Lorem
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Тамос</button>
              <a href="#" className="text-gradient btn-link">
                Портфели ман
              </a>
            </motion.div>

            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaTelegram />
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            variants={fadeIn("down", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex mt-[-115px] mx-auto"
          >
            <img
              src={Image}
              width="450"
              height="450"
              className="rotate-6 mix-blend-lighten"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
