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
import Zoom from "react-reveal/Zoom";
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
    ".",
  ];
  const p = " < DAYS I CODE />";
  return (
    <>
      <Zoom top cascade duration={2000}>
        <span className="   sm:text-[18px] text-[14px] secondary-color uppercase">
          {p}
        </span>
      </Zoom>
      <Zoom top cascade duration={2000}>
        <h2 className={styles.sectionHeadText}>GitHub Contribution.</h2>
      </Zoom>
      <div className="calendar"></div>;
    </>
  );
};
export default SectionWraper(Statics, "");
