export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: (i = 1) => ({
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.1*i, delayChildren: 0.1 * i },
  }),
};

export const child = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    x: -20,
    y: -100,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};
