gsap.to(".view1 .box", {
  x: 1000,
  duration: 2,
  delay: 1,
  backgroundColor: "darkred",
});

gsap.from(".view1 .box2", {
  x: 1000,
  y: 200,
  duration: 2,
  delay: 3,
  rotate: 360,
});

gsap.from(".view1 h1", {
  opacity: 0,
  duration: 1,
  y: 30,
  delay: 1,
  stagger: 0.5,
});

gsap.from(".view2 .box", {
  x: 1000,
  y: 200,
  duration: 2,
  delay: 1,
  rotate: 360,
  repeat: 2,
  yoyo: true,
});

gsap.to(".view3 .box1", {
  x: 1000,
  backgroundColor: "yellow",
  duration: 2,
  delay: 1,
});
gsap.to(".view3 .box2", {
  x: 1000,
  rotate: 360,
  duration: 2,
  delay: 3,
});
gsap.to(".view3 .box3", {
  x: 1000,
  scale: 0.5,
  duration: 2,
  delay: 5,
});

let tl = gsap.timeline();

tl.to(".view4 .box1", {
  x: 1000,
  backgroundColor: "yellow",
  duration: 2,
  delay: 1,
});
tl.to(".view4 .box2", {
  x: 1000,
  rotate: 360,
  duration: 2,
});
tl.to(".view4 .box3", {
  x: 1000,
  scale: 0.5,
  duration: 2,
});

let tlNav = gsap.timeline();

tlNav.from("nav h2", {
  y: -50,
  opacity: 0,
  duration: 1,
  delay: 1,
});
tlNav.from("nav a", {
  y: -50,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});
tlNav.from(".home h1", {
  opacity: 0,
  scale: 0.2,
  duration: 0.5,
});
