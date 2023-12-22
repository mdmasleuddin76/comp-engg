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
const sections = [
  {
    name: "About",
    links: [
      { url: "/about/aboutjmi", text: "About Jamia" },
      { url: "/about/aboutDept", text: "About Department" },
      { url: "/about/messageHOD", text: "Message From HOD" },
      { url: "/about/achievements", text: "Achievements" },
      { url: "/about/facilities", text: "Facilities" },
      { url: "/about/testimonials", text: "Testimonials" },
    ],
  },
  {
    name: "Academic",
    links: [
      { url: "/academic/courseOffered", text: "Courses Offered" },
      { url: "/academic/courseStructure", text: "Course Structure" },
      { url: "/academic/notices", text: "Notices" },
    ],
  },
  {
    name: "Event",
    links: [{ url: "/event", text: "Event" }],
  },
  {
    name: "Gallery",
    links: [{ url: "/gallery", text: "Gallery" }],
  },
  {
    name: "Placement",
    links: [{ url: "/placement", text: "Placement" }],
  },
  {
    name: "People",
    links: [
      { url: "/people/faculty", text: "Faculty Members" },
      { url: "/people/staffMember", text: "Staff Members" },
      { url: "/people/students", text: "Students" },
      { url: "/people/phdScholar", text: "Ph.D Scholars" },
      { url: "/people/devloper", text: "Devloper" },
    ],
  },
  {
    name: "Research",
    links: [
      { url: "/research/project", text: "Projects" },
      { url: "/research/publication", text: "Publication" },
      { url: "/research/researchArea", text: "Research Area" },
    ],
  },
];

function Home() {
  const [hoveredSection, setHoveredSection] = useState(null);

  return (
    // <div className="about-us w-screen">
    // <div className=" flex justify-evenly flex-row flex-wrap">
    //   {sections.map((section, index) => (
    //     <div
    //       key={index}
    //       className="section-container relative m-5 p-8 bg-slate-400 hover:bg-gray-500 "
    //       onMouseEnter={() => setHoveredSection(section)}
    //       onMouseLeave={() => setHoveredSection(null)}
    //     >
    //       <p className="text-white">{section.name}</p>
    //       {hoveredSection && (
    //         <div className="menu bg-white absolute top-full left-0 mb-2 p-2">
    //           <Menu section={hoveredSection.name} links={hoveredSection.links} />
    //         </div>
    //       )}
    //     </div>
    //   ))}
    // </div> 
    // </div>
    <>
      <Hero />
      <Achievements />
      <div class="mt-28"></div>
      <Ribbon />
      <div class="mb-40"></div>

        <JmiCarousel />

      <section className="flex justify-evenly flex-row flex-wrap">
        <NoticeBoard />
        <Events />
      </section>
      <Footer />
    </>
  );
}

export default Home;
