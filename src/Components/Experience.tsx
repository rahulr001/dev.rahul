import {
  VerticalTimelineElement,
  VerticalTimeline,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { experiences } from "../Constants";
import { SectionWraper } from "../Utils";
import "react-vertical-timeline-component/style.min.css";
import Fade from "react-reveal";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#2d2e32",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #4dba87" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <motion.div
          initial={{ transform: "scale(0)" }}
          whileInView={{ transform: "scale(1)" }}
          transition={{ duration: 1, type: "spring" }}
          className="flex justify-center items-center w-full h-full"
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain "
          />
        </motion.div>
      }
    >
      <motion.div
        initial={{ opacity: 0, transform: "translateY(4vw)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <h3 className="text-[#4dba87] text-[24px] font-bold">
          {experience.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((desc, index) => (
            <li
              key={index}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {desc}
            </li>
          ))}
        </ul>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const p = "< What I have done so far />";
  return (
    <>
      <Fade top big cascade>
        <p className={styles.sectionSubText}>{p}</p>
      </Fade>
      <Fade right big cascade>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </Fade>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWraper(Experience, "work");
