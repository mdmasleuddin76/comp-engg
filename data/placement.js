import shahzadSirImg from '../src/PageGroup/Placement/assets/shahzadSir.jpeg';
import insharahImg from '../src/PageGroup/Placement/assets/insharah.jpeg';
import zeeshanSirImg from '../src/PageGroup/People/assets/zeeshanSir.jpeg';
import amjadSirImg from '../src/PageGroup/People/assets/amjadSir.png';
import sample1 from '../src/PageGroup/Placement/assets/sample1.jpg';
import sample2 from '../src/PageGroup/Placement/assets/sample2.jpg';

export const caraData = [
  {
    name: "M.Tech 2022",
    visited: "7",
    highest: "17",
    placed: "11",
  },
  {
    name: "B.Tech 2022",
    visited: "8",
    highest: "35",
    placed: "50",
  },
  {
    name: "B.Tech 2021",
    visited: "9",
    highest: "25",
    placed: "64",
  },
];

export const placementStats = [
  {
    course: "B.Tech",
    year: "2021",
    company_name: ["abc", "xyz", "pqr"],
    package: [12, 13, 9],
    placed: [2, 3, 4],
  },
  {
    course: "M.Tech",
    year: "2022",
    company_name: ["abcd", "xyzq", "pqrs"],
    package: [14, 199, 33],
    placed: [99, 83, 34],
  },
  {
    course: "B.Tech",
    year: "2022",
    company_name: ["ghi", "vyz", "rty"],
    package: [12, 13, 9],
    placed: [2, 3, 4],
  },
  {
    course: "SPCs",
    year: "2021",
    spcList: [
      {
        name: "Insharah Ayyubi",
        year: "B.Tech/3rd",
        email: "insharahayyubifiverr@gmail.com",
        img: insharahImg,
        github: "https://github.com/insharahAyyubi",
        linkedin: "https://www.linkedin.com/in/insharah-ayyubi",
        whatsapp: "",
      },
      {
        name: "Md Masleuddin",
        year: "B.Tech/3rd",
        email: "masleuddin@gmail.com",
        img: sample2,
        github: "https://github.com/insharahAyyubi",
        linkedin: "https://www.linkedin.com/in/insharah-ayyubi",
        whatsapp: "",
      },
      {
        name: "Md Masleuddin",
        year: "B.Tech/3rd",
        email: "masleuddin@gmail.com",
        img: sample1,
        github: "https://github.com/insharahAyyubi",
        linkedin: "https://www.linkedin.com/in/insharah-ayyubi",
        whatsapp: "",
      },
      {
        name: "Md Masleuddin",
        year: "B.Tech/3rd",
        email: "masleuddin@gmail.com",
        img: insharahImg,
        github: "https://github.com/insharahAyyubi",
        linkedin: "https://www.linkedin.com/in/insharah-ayyubi",
        whatsapp: "",
      },
    ],
  },
];

export const counsellors = [
  {
    name: "Dr. Mohd Zeeshan Ansari",
    designation: "Assistant Professor",
    img: zeeshanSirImg,
    info: "Information Extraction, Text Mining, Machine Learning, Soft Computing",
  },
  {
    name: "Dr. Shahzad Alam",
    designation: "Assistant Professor",
    img: shahzadSirImg,
    info: "Image processing, Information Security, Cryptography and Soft Computing Techniques",
  },
  {
    name: "Prof. Mohd Amjad",
    designation: "Professor",
    img: amjadSirImg,
    info: "Mobile Computing, Wireless Sensor Networks, Security in Cloud Computing",
  },
];

export const devs = [
  {
    name: "Insharah Ayyubi",
    degree: "B.Tech Computer Engineering",
    img: insharahImg,
    github: "https://github.com/insharahAyyubi",
    insta: "",
    linkedin: "https://www.linkedin.com/in/insharah-ayyubi",
  },
  {
    name: "Md Masleuddin",
    degree: "B.Tech Computer Engineering",
    img: sample2,
    github: "https://github.com/insharahAyyubi",
    insta: "",
    linkedin: "https://www.linkedin.com/in/insharah-ayyubi",
  },
  {
    name: "Md Masleuddin",
    degree: "B.Tech Computer Engineering",
    img: sample1,
    github: "https://github.com/insharahAyyubi",
    insta: "",
    linkedin: "https://www.linkedin.com/in/insharah-ayyubi",
  },
  {
    name: "Insharah Ayyubi",
    degree: "B.Tech Computer Engineering",
    img: insharahImg,
    github: "https://github.com/insharahAyyubi",
    insta: "",
    linkedin: "https://www.linkedin.com/in/insharah-ayyubi",
  },
  {
    name: "Md Masleuddin",
    degree: "B.Tech Computer Engineering",
    img: sample2,
    github: "https://github.com/insharahAyyubi",
    insta: "",
    linkedin: "https://www.linkedin.com/in/insharah-ayyubi",
  },
  {
    name: "Clara Doe",
    degree: "B.Tech Computer Engineering",
    img: sample1,
    github: "https://github.com/insharahAyyubi",
    insta: "",
    linkedin: "https://www.linkedin.com/in/insharah-ayyubi",
  },
];

const placementData = [caraData, placementStats, counsellors, devs];

export default placementData;
