import Hero from "../../components/Hero";
import Draw from "../../components/Draw";
import About from "../../components/AboutMe";
import React, { useState, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ComputersCanvas from "../../components/canvas/Computers";
import Contact from "../../components/Contact";
import {StarsCanvas} from "../../components/canvas";
import Tech from "../../components/Tech";
import About2 from "../../components/About2";



const Landing = ({ name }) => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <>
      <section className="landing container" style={styles.landing}>
        <Draw />
        <Hero name={name} />
      </section>
    {/*<section className={`relative w-full h-[132vh] mx-auto`}>*/}
      {/*<ComputersCanvas />*/}
    {/*</section>*/}
      <About />
      {/*<About2 />*/}
      {/*  <Tech />*/}
        {/*<div className="relative z-0">*/}
        {/*  <Contact />*/}
        {/*  <StarsCanvas />*/}
        {/*</div>*/}
    </>
  );
};

export default Landing;
