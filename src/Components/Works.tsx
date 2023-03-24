import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../Assets";
import { projects } from "../Constants";
import { SectionWraper } from "../Utils";
// import Fade from "react-reveal";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div>
      <Tilt
        scale={1.1}
        tiltEnable={false}
        glareEnable={true}
        glareBorderRadius={"14px"}
        glarePosition={"all"}
        glareMaxOpacity={0.2}
        className="bg-tertiary p-5  rounded-2xl sm:w-[360px] w-full"
        style={{ border: "#cd5ff880 2px solid" }}
      >
        <div className="relative w-full h-[150px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-40 object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const p = "< My work />";
  return (
    <>
       
        <p className={`${styles.sectionSubText} `}>{p}</p>
      
    
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
     
      <div className="w-full flex">
        <p className="mt-3 text-justify text-secondary text-[17px] max-w-1xl leading-[30px]">
          
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
        
        </p>
      </div>
      <div className="mt-20 flex justify-center flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWraper(Works, "projects");
