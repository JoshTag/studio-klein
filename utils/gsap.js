import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const projectAsideTransition = (
  triggerStart,
  triggerEnd,
  endPlacement,
  transitionAnimation,
  aside,
  actions
) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    transitionAnimation,
    {
      transform: "translateY(100vh)",
    },
    {
      transform: "translateY(-100vh)",
      duration: 1.2,
      scrollTrigger: {
        trigger: triggerStart,
        toggleActions: `${actions}`,
        start: `top center`,
        endTrigger: triggerEnd,
        end: `${endPlacement} center`,
      },
    }
  );

  gsap.fromTo(
    aside,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: triggerStart,
        toggleActions: "play reset play reset",
        start: `top center`,
        endTrigger: triggerEnd,
        end: `${endPlacement} center`,
      },
    }
  );
};
