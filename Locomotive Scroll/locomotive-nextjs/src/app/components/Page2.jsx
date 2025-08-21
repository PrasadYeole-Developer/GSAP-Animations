import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page2",
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,
      },
    });
    tl.fromTo(".page2", { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.from(
      ".page2 h1",
      {
        opacity: 0,
        x: -300,
        duration: 0.5,
      },
      "-=1"
    );
    return () => {
      tl.scrollTrigger && tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <div className="page2 w-full h-screen relative bg-gray-800 border-b-2 border-gray-800">
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[3rem]">
        Hey!
      </h1>
    </div>
  );
};

export default Page2;
