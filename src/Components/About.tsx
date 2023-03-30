import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../Constants";
import { SectionWraper } from "../Utils";
import {
  swing,
  subTitleChild,
  subTitleFadeIn,
  fadeIn,
  child,
  titleFadeIn,
  titleChild,
  desc,
} from "../Utils/Motion";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    perspective={2000}
    glareEnable={true}
    glareMaxOpacity={0.45}
    glareBorderRadius={"20px"}
    glarePosition={"all"}
    scale={1.1}
    transitionSpeed={1500}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      initial={{ opacity: 0, transform: "translateX(-20vw)" }}
      whileInView={{ opacity: 1, transform: "translateX(0px)" }}
      transition={{ duration: index * 2, type: "spring" }}
      className="w-full p-[1px] rounded-[20px] shadow-card"
      style={{ border: "#4dba87 2px solid" }}
    >
      <div className="bg-tertiary rounded-[20px] ">
        <motion.div
          variants={swing}
          animate="visible"
          className="py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </motion.div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const subText = [
    "<",
    " ",
    "I",
    "n",
    "t",
    "r",
    "o",
    "d",
    "u",
    "c",
    "t",
    "i",
    "o",
    "n",
    " ",
    "/>",
  ];
  const title = ["O", "v", "e", "r", "v", "i", "e", "w", "."];
  return (
    <>
      <motion.div
        variants={subTitleFadeIn}
        initial="hidden"
        whileInView="visible"
        className="flex"
      >
        {subText.map((name, index) => (
          <motion.span
            key={index}
            variants={subTitleChild}
            className=" font sm:text-[18px] text-[14px] secondary-color uppercase  "
          >
            {name === " " ? "\u00A0" : name}
          </motion.span>
        ))}
      </motion.div>
      <motion.h2
        variants={titleFadeIn}
        initial="hidden"
        whileInView="visible"
        className={`${styles.sectionHeadText} `}
      >
        {title.map((name, index) => (
          <motion.span key={index} variants={titleChild}>
            {name === " " ? "\u00A0" : name}
          </motion.span>
        ))}
      </motion.h2>

      <motion.div
        variants={desc}
        initial="hidden"
        whileInView="visible"
        className="mt-4 text-justify secondary-color font text-[17px] max-w-7xl leading-[30px]"
      >
        I'm a skilled software developer with experience in Python, Django,
        HTML5, CSS3, TypeScript, JavaScript, React, MySQL, PostgreSQL and AWS.
        And also Experienced in developing Font-end web Applications and
        RESTfull API's. I'm a quick learner and collaborate closely with clients
        to create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10 justify-evenly">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWraper(About, "about");
