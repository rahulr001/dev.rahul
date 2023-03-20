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
    <img
      alt="pc"
      style={{
        transform: isMobile ? "scale(1.5)" : "",
        marginTop: isMobile ? "40px" : "",
        position: isMobile ? "absolute" : "static",
        width: isMobile ? "65%" : "100%",
        left: isMobile ? "3.5rem" : "",
      }}
      src={pc}
    />
  );
};

export default ComputersCanvas;
