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

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#151221bf",
        color: "#fff",
        border: "#cd5ff8 2px solid",
      }}
      contentArrowStyle={{ borderRight: "17px solid  #cd5ff8" }}
      date={experience.date}
      iconStyle={{ background: "#f6deff" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain "
          />
        </div>
      }
    >
      <motion.div
        initial={{
          opacity: 0,
          transform: " translateY(3vw)",
        }}
        whileInView={{
          opacity: 1,
          transform: "  translateY(0vw)",
        }}
        transition={{ duration: 2, type: "spring" }}
      >
        <h3 className="text-[#cd5ff8] text-[24px] font-bold">
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
      <p className={styles.sectionSubText}>{p}</p>

      <h2 className={styles.sectionHeadText}>Work Experience.</h2>

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
