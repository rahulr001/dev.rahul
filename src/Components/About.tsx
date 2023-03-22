import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../Constants";
import { SectionWraper } from "../Utils";

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
      style={{ border: "#cd5ff880 2px solid" }}
    >
      <div className="bg-tertiary rounded-[20px] ">
        <motion.div
          initial={{
            opacity: 1,
          }}
          animate={{
            // opacity: 1,
            y: [0, -13, 0],
            scale: [1, 1.05, 1],
            transition: {
              type: "spring",
              duration: 4,
              stiffness: 100,
              damping: 12,
              repeat: Infinity,
            },
          }}
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
  const p = "< Introduction />";
  return (
    <>
      {/* <Fade top big cascade> */}
      <p className=" font sm:text-[18px] text-[14px] text-secondary uppercase track ing-wider ">
        {p}
      </p>
      {/* </Fade> */}
      <h2 className={styles.sectionHeadText}>Overview.</h2>

      <div className="mt-4 text-justify text-secondary text-[17px] max-w-7xl leading-[30px]">
        I'm a skilled software developer with experience in Python, Django,
        HTML5, CSS3, TypeScript, JavaScript, React, MySQL, PostgreSQL and AWS.
        And also Experienced in developing Font-end web Applications and
        RESTfull API's. I'm a quick learner and collaborate closely with clients
        to create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </div>
      <div className="mt-20 flex flex-wrap gap-10 justify-evenly">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWraper(About, "about");
