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
      <section className="flex justify-evenly mb-16 flex-row flex-wrap">
        <NoticeBoard />
        <Events />
      </section>
      
      <Achievements />
      <div class="mt-28"></div>
      <Ribbon />
      <div class="mb-40"></div>

      <JmiCarousel />

      <div
          className="-mt-12 group relative col-span-1 flex justify-end overflow-hidden rounded-md text-black h-12 "
        >
          <a href='/gallery'><h3 className="font-semibold" style={{ fontSize: "20px", marginRight: "30px" }}>
            View More
            <div className="right-20 bottom-2 h-[5px] w-[30px] rounded bg-green-700 transition-all duration-300 group-hover:w-[10%] sm:left-4" />

          </h3></a>
        </div>


      <Footer />
    </>
  );
}

export default Home;
