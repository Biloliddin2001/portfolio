import React from "react";

//motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex items-center justify-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2">
                Дар тамос шавед
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Биёед якҷоя <br /> кор кунем
              </h2>
            </div>
          </motion.div>

          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              type="email"
              placeholder="Почтаи электрони шумо"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            />
            <input
              type="name"
              placeholder="Номи шумо"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            />
            <textarea
              placeholder="Хабари шумо"
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
            />
            <button className="btn btn-lg">Паём фиристодан</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
