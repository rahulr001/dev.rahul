import React from "react";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
const Hero = () => {
 

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <motion.div
          initial={{ opacity: 0, transform: "translateX(-5vw)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ duration: 1, type: "spring" }}
          className="flex flex-col justify-center items-center mt-5"
        >
          <div className="w-5 h-5 rounded-full bg-[#4dba87]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </motion.div>

        <div>
          <motion.h1
            initial={{ opacity: 0, transform: "translateY(5vw)" }}
            whileInView={{ opacity: 1, transform: "translateY(0)" }}
            transition={{ duration: 1, type: "spring" }}
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I'm   
            <span className="text-[#4dba87]"> Rahul R</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, transform: "translateY(5vw)" }}
            whileInView={{ opacity: 1, transform: "translateY(0)" }}
            transition={{ duration: 1, type: "spring" }}
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            I am a Full stack Web Developer,
            <br className="sm:block hidden" />
            with an emphasis on Responsive web designs
          </motion.p>
        </div>
      </div>
      
        <ComputersCanvas />
      

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
