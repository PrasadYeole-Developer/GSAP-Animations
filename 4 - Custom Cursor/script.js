let main = document.querySelector("main");
let cursor = document.querySelector(".cursor");
let imageDiv = document.querySelector(".image");

main.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
    ease: "back.out",
  });
});

imageDiv.addEventListener("mouseenter", () => {
  cursor.innerHTML = "View More";
  
  gsap.to(cursor, {
    scale: 3,
    color: "purple",
    fontSize: "0.3rem",
    backgroundColor:"#ffffff8a"
  });
});
imageDiv.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor:"#fff"

  });
});
