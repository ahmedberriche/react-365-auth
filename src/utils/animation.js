let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 100,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};
const translateY = {
  initial: {
    x: -1000,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
};

export { translateY, fadeInUp };
