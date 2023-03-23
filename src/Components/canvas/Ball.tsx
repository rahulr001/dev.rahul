import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { motion } from "framer-motion";
import CanvasLoader from "../Loader";

const BallCanvas = ({ icon }) => {
  const [position, setPosition] = useState(0);
  const marqRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const container = containerRef.current;
      const firstChild = container.children[0];
      container.appendChild(firstChild);
    }, 2000); // change the interval as needed

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="scroll-container" ref={containerRef}>
      <img alt="tech" src={icon} />
    </div>
  );
};

export default BallCanvas;
