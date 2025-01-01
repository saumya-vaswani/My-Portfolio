import { gsap } from "gsap";

export const fadeIn = (target, duration = 1, delay = 0) => {
  gsap.fromTo(
    target,
    { opacity: 0 },
    { opacity: 1, duration, delay }
  );
};

export const slideInFromLeft = (target, duration = 1, delay = 0) => {
  gsap.fromTo(
    target,
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, duration, delay }
  );
};
