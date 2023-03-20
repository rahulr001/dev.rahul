import { useEffect, useState } from "react";
import { pc } from "../../Assets";
import {motion} from "framer-motion"
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:400px)");
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
      }}
      whileHover={{
        transform: "scale(.9)",
        transition: { delay: 0, type: "spring" },
      }}
      transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.5 }}
      alt="pc"
      style={{
        // transform: isMobile ? "scale(6)" : "",
        marginTop: isMobile ? "40px" : "",
        position: isMobile ? "absolute" : "static",
        width: isMobile ? "90%" : "100%",
        left: isMobile ? "1.5rem" : "",
      }}
      src={pc}
    />
  );
};

export default ComputersCanvas;
