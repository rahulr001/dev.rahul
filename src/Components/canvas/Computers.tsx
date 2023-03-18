import { transform } from "framer-motion";
import { useEffect, useState } from "react";
import { pc } from "../../Assets";

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
    <div style={{ transform: isMobile ? "scale(1.5)" : "" ,marginTop:isMobile?"40px":""}}>
      <img src={pc} />
    </div>
  );
};

export default ComputersCanvas;
