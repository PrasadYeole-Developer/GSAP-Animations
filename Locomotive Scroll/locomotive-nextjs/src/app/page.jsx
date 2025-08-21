"use client";

import React, { useEffect, useRef } from "react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import "locomotive-scroll/dist/locomotive-scroll.css";

const Home = () => {
  const scrollRef = useRef(null);
  useEffect(() => {
    import("locomotive-scroll").then((LocomotiveScrollModule) => {
      const LocomotiveScroll = LocomotiveScrollModule.default;
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });
    });
  }, []);

  return (
    <div ref={scrollRef}>
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  );
};

export default Home;
