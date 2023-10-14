import React, { useState } from "react";
import Menu from "./Component/Menu";
function Home() {
  const [hoveredSection, setHoveredSection] = useState(null);

  const sections = [
    {
      name: "About",
      links: [
        { url: "/about/aboutjmi", text: "About Jamia" },
        { url: "/about/aboutDept", text: "About Department" },
        { url: "/about/visionMission", text: "Vision & Mission" },
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

  return (
    <div className="about-us w-screen flex justify-evenly flex-row flex-wrap">
      {sections.map((section, index) => (
        <div
          key={index}
          className="section-container relative m-5 p-8 bg-slate-400 hover:bg-gray-500"
          onMouseEnter={() => setHoveredSection(section)}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <p className="text-white">{section.name}</p>
          {hoveredSection && (
            <div className="menu bg-white absolute top-full left-0 mb-2 p-2">
              <Menu section={hoveredSection.name} links={hoveredSection.links} />
            </div>
          )}
        </div>
      ))}
      {/* Rest of the content */}
    </div>
  );
}

export default Home;
