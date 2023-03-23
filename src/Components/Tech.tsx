 
import { technologies } from "../Constants";
 
import { SectionWraper } from "../Utils";
import { motion } from "framer-motion";
import { swing } from "../Utils/Motion";
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <motion.div
          variants={swing}
          animate="visible"
          className="w-24 h-24 p-2 flex justify-center items-center  rounded-full bg-[#fbf2ff]"
          key={technology.name}
        >
          <img className="tech p-1" alt="img" src={technology.icon} />
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWraper(Tech, "");
