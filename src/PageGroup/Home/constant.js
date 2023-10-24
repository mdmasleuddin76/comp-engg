export const routes = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about/aboutjmi",
  
      subRoutes: [
      { link: "/about/aboutjmi", name: "About Jamia" },
      { link: "/about/aboutDept", name: "About Department" },
      { link: "/about/messageHOD", name: "Message From HOD" },
      { link: "/about/achievements", name: "Achievements" },
      { link: "/about/facilities", name: "Facilities" },
      { link: "/about/testimonials", name: "Testimonials" },
      ],
    },
    {
        name: "Academic",
        link: "/services",
    
        subRoutes: [
          { link: "/academic/courseOffered", name: "Courses Offered" },
      { link: "/academic/courseStructure", name: "Course Structure" },
      { link: "/academic/notices", name: "Notices" },
        ],
      },
    {
      name: "Photo Gallery",
      link: "/products",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ];