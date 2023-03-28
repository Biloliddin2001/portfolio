import React from "react";

// countUp
import CountUp from "react-countup";

// intersection observer hook
import { useInView } from "react-intersection-observer";

// motion
import { motion } from "framer-motion";

// variant
import { fadeIn } from "../variants";

// Image
import AboutImage from "../assets/two.png";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="section" ref={ref}>
      <div className="conatainer mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-center md:mt-[-18rem] mt-[-8rem]"
          >
            <img src={AboutImage} width="600" />
          </motion.div>

          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-[-10rem] md:mt-0 pl-3 pr-3 md:pr-10 flex-1"
          >
            <h2 className="h2 text-accent mb-2 md:mb-0">Дар бораи ман</h2>
            <h3 className="h3 mb-1">
              Ман як таҳигари озоди Front-End бо таҷрибаи зиёда 5 сол ҳастам
            </h3>
            <p>
              Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
              Lorem ipsum dolor sit
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-14 mt-5 md:mt-0">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={4} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Таҷрибаи
                  <br />
                  сол
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Лоиҳа <br />
                  анҷом ёфт
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Миҷозони
                  <br />
                  қаноатманд
                </div>
              </div>
            </div>
            <div className="mt-[-2rem] md:mt-[-3rem] flex gap-x-8 items-center md:mb-12">
              <button className="btn btn-lg">Тамос</button>
              <a href="#" className="text-gradient btn-link">
                Портфели ман
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
