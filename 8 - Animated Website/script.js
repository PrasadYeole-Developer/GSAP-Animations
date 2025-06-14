let page1 = () => {
  let tl = gsap.timeline();

  tl.from("nav h1, nav i, nav h3, nav button", {
    y: -50,
    duration: 0.7,
    delay: 1,
    opacity: 0,
    stagger: 0.1,
  });
  tl.from(".center .left h1", {
    x: -500,
    duration: 0.5,
    opacity: 0,
  });
  tl.from(".center .left p", {
    x: -300,
    duration: 0.5,
    opacity: 0,
  });
  tl.from(".center .left button", {
    duration: 0.5,
    opacity: 0,
  });
  tl.from(
    ".center .right img",
    {
      duration: 0.5,
      opacity: 0,
    },
    "-=1"
  );
  tl.from(".marque img", {
    y: 100,
    stagger: 0.15,
    duration: 0.5,
    opacity: 0,
  });
};
page1();

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sectionTwo",
    scroller: "body",
    // markers: true,
    scrub: 2,
    start: "top 50%",
    end: "top 0",
  },
});

// tl2.from(".sectionTwo", {
//   opacity: 0,
//   y: 100,
//   duration: 2,
// });

tl2.from(".sectionTwo", {
  y: 30,
  opacity: 0,
  duration: 0.5,
});
tl2.from(
  ".elem.line1-l",
  {
    x: -300,
    opacity: 0,
    duration: 0.5,
  },
  "left"
);
tl2.from(
  ".elem.line1-r",
  {
    x: 300,
    opacity: 0,
    duration: 0.5,
  },
  "left"
);
tl2.from(
  ".elem.line2-l",
  {
    x: -300,
    opacity: 0,
    duration: 0.5,
  },
  "right"
);
tl2.from(
  ".elem.line2-r",
  {
    x: 300,
    opacity: 0,
    duration: 0.5,
  },
  "right"
);
