import { useEffect, useState } from "react";
import { pc } from "../../Assets";
import { motion } from "framer-motion";
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:450px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <motion.img
      initial={{
        opacity: 0,
        transform: "scale(0)",
      }}
      whileInView={{
        opacity: 1,
        transform: "scale(1)",
        transition: { type: "spring", stiffness: 70, damping: 10, delay: 0.1 },
      }}
      whileHover={{
        transform: "scale(.9)",
        transition: { type: "spring", stiffness: 70, damping: 10 },
      }}
      alt="pc"
      style={{
        // transform: isMobile ? "scale(6)" : "",
        marginTop: isMobile ? "40vh" : "2vw",
        marginLeft: isMobile ? "0vh" : "7vw",
        position: isMobile ? "absolute" : "relative",
        width: isMobile ? "90%" : "80%",
        left: isMobile ? "1.5rem" : "",
      }}
      src={pc}
    />
  );
};

export default ComputersCanvas;
