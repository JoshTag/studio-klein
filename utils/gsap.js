import { gsap, Circ } from "gsap/dist/gsap";

export const projectAsideTransition = (
  triggerStart,
  triggerEnd,
  endPlacement,
  transitionAnimation,
  aside,
  actions,
  start = "top",
) => {
  gsap.fromTo(
    transitionAnimation,
    {
      yPercent: 200,
    },
    {
      yPercent: -100,
      duration: 1,
      scrollTrigger: {
        trigger: triggerStart,
        toggleActions: `${actions}`,
        start: `${start} center-=100`,
        endTrigger: triggerEnd,
        end: `${endPlacement} center-=100`,
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
        start: `${start} center-=100`,
        endTrigger: triggerEnd,
        end: `${endPlacement} center-=100`,
      },
    }
  );
};

export const serviceScrollAnimation = (
  trigger,
  draw,
  start,
  end,
  headerRef,
  bottomTrigger = "bottom",
) => {
  gsap.fromTo(
    draw,
    {
      strokeDashoffset: 1508.176513671875, // Circle SVG total length
    },
    {
      strokeDashoffset: 0,
      scrollTrigger: {
        toggleClass: { targets: draw, className: "active-path" },
        trigger: trigger,
        start: `top ${start}`,
        end: `${bottomTrigger} ${end}`,
        scrub: true,
        // markers: true
      },
    }
  );

  gsap.fromTo(
    headerRef,
    {
      transform: "translateY(20px)",
    },
    {
      opacity: 1,
      transform: "translateY(0)",
      duration: 0.6,
      scrollTrigger: {
        trigger: trigger,
        toggleActions: "play reset play reset",
        start: `top center`,
        end: `bottom center`,
      },
    }
  );
};

export const smoothScrollTo = (id) => {
  gsap.to(window, { duration: 1.2, scrollTo: id, ease: Circ.easeInOut });
};
