import React, { useEffect } from "react";
import GitHubCalendar from "github-calendar";
import { SectionWraper } from "../Utils";
const Statics = () => {
  useEffect(() => {
    GitHubCalendar(".calendar", "rahulr001", { responsive: true ,tooltip:true});
  }, []);

  return <div className="calendar"></div>;
};
export default SectionWraper(Statics, "");
