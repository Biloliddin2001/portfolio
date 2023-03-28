import React from "react";

// icon
import { BsArrowUpRight } from "react-icons/bs";

// motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

// services-data
const services = [
  {
    name: "Тарҳрезии UI/UX",
    description:
      "Тархрезии UX ( User Experience-таҷрибаи корбар ) барои кори интерфейс масъул аст. Тарҳрезии UI ( User Interface-интерфейси корбар ) барои намуди зоҳирии интерфейс масъул аст.",
    link: "Давом",
  },
  {
    name: "Инкишоф",
    description:
      "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    link: "Давом",
  },
  {
    name: "Маркетинги рақамӣ",
    description:
      "Маркетинги иҷтимоӣ ин фаъолияти ширкатест, ки ба пешбурди бренд ва дастгирии арзишҳои муайянм иҷтимоӣ аз ҷониби ширкат нигаронида шудааст.",
    link: "Давом",
  },
  {
    name: "Брендинги маҳсулот",
    description:
      "Брендинги маҳсулот эҷоди тасвир ё шахсияти маҳсулоти мушаххас тавассути унсурҳои брендинг ба монанди лого, рангҳо, бастабандӣ, овоз ва тарроҳии умумии мебошад.",
    link: "Давом",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text and Image*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">Ман чӣ кор кунам</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Ман як таҳигари озоди Front-End бо таҷрибаи зиёда 5 сол ҳастам
            </h3>
            <button className="btn btn-sm">Кори маро бинед</button>
          </motion.div>

          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div
                    key={index}
                    className="border-b border-white/20 h-[146px] mb-[10px] flex"
                  >
                    <div className="max-w-[500px]">
                      <h4 className="text-[20px] tracking-wider font-semibold mb-2">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
