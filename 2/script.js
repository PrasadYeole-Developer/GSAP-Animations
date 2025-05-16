// gsap.from(".page1 .box", {
//   scale: 0,
//   delay: 2,
//   duration: 2,
//   rotate: 360,
// });

// // gsap.from(".page2 .box", {
// //   scale: 0,
// //   duration: 2,
// //   rotate: 360,
// //   scrollTrigger: {
// //     trigger: ".page2 .box",
// //     scroller: "body",
// //     markers: true,
// //     start: "top 60%",
// //   },
// // });

// gsap.from(".page2 h1", {
//   opacity: 0,
//   x: 500,
//   duration: 2,
//   scrollTrigger: {
//     trigger: ".page2 h1",
//     scroller: "body",
//     // markers: true,
//     start: "top 50%",
//   },
// });

// gsap.from(".page2 h2", {
//   opacity: 0,
//   x: -500,
//   duration: 2,
//   scrollTrigger: {
//     trigger: ".page2 h2",
//     scroller: "body",
//     start: "top 60%",
//   },
// });

// gsap.from(".page2 .box", {
//   opacity: 0,
//   scale: 0,
//   duration: 2,
//   rotate: 720,
//   scrollTrigger: {
//     trigger: ".page2 .box",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//     end: "top 30%",
//     scrub: 1,
//     pin: true,
//   },
// });

gsap.to(".page2 h1", {
  transform: "translateX(-120%)",
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 1,
    pin: true,
  },
});

