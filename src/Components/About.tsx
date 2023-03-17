import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../Constants";
import { SectionWraper } from "../Utils";
import Fade from "react-reveal";
import Zoom from "react-reveal";

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
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const p = "< Introduction />";
  return (
    <>
      <Fade top big cascade>
        <p className={styles.sectionSubText}>{p}</p>
      </Fade>
      <Fade right big  cascade>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </Fade>
        <div   className="mt-4 text-secondary text-[17px] max-w-7xl leading-[30px]">
      <Fade bottom>
          I'm a skilled software developer with experience in Python, Django,
          HTML5, CSS3, TypeScript, JavaScript, React, MySQL, PostgreSQL and AWS.
          And also Experienced in developing Font-end web Applications and
          RESTfull API's. I'm a quick learner and collaborate closely with
          clients to create efficient, scalable, and user-friendly solutions
          that solve real-world problems. Let's work together to bring your
          ideas to life!
      </Fade>
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
