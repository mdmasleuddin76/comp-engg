/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Menu from "./Component/Menu";
import Footer from "./Component/Footer";
import './Home.css';
import NoticeBoard from "./Component/NoticeBoard";
import Events from "./Component/Events";
import Navigation from "./Component/Navbar/Navigation";
import Hero from "./Component/Hero";
import Achievements from "./Component/Achievements";
import JmiCarousel from "./Component/Carousel";
import Ribbon from "./Component/Ribbon";

function Home() {
  return (
    <>
      <Hero />

      <div className="flex justify-evenly mb-0 flex-row flex-wrap">
        <NoticeBoard />
        <Events />
      </div>

      <Achievements />

      {/* <Caserol /> */}
      <JmiCarousel />
      <Footer />
    </>
  );
}

export default Home;
