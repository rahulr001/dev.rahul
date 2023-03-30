import React, { useEffect } from "react";
import GitHubCalendar from "github-calendar";
import { SectionWraper } from "../../Utils";
import "./Statics.css";
import { motion } from "framer-motion";
import {
  subTitleChild,
  subTitleFadeIn,
  titleChild,
  titleFadeIn,
} from "../../Utils/Motion";
import { styles } from "../../style";
const Statics = () => {
  useEffect(() => {
    GitHubCalendar(".calendar", "rahulr001", {
      responsive: true,
      tooltip: true,
    });
  }, []);
  const subText = [
    "<",
    "D",
    "a",
    "y",
    "s",
    " ",
    "I",
    " ",
    "C",
    "o",
    "d",
    "e",
    " ",
    "/",
    ">",
  ];
  const title = [
    "G",
    "i",
    "t",
    "H",
    "u",
    "b",
    " ",
    "C",
    "o",
    "n",
    "t",
    "r",
    "i",
    "b",
    "u",
    "t",
    "i",
    "o",
      "n",
    "."
  ];
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
            className="  sm:text-[18px] text-[14px] secondary-color font uppercase  "
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
      <div className="calendar"></div>;
    </>
  );
};
export default SectionWraper(Statics, "");
