import insharahImg from '../src/PageGroup/Placement/assets/insharah.jpeg';
import masleuddin from "../src/PageGroup/People/assets/Developer/masleuddin.jpg";
import sania from "../src/PageGroup/People/assets/Developer/sania.png";
import kashif from "../src/PageGroup/Placement/assets/kashif.jpg";
import hemantImg from "../src/PageGroup/Placement/assets/hemantImg.jpg";
import mariyaImg from "../src/PageGroup/Placement/assets/mariyaImg.jpeg";
import ausaf from "../src/PageGroup/Placement/assets/ausaf.jpeg";
import aatir from "../src/PageGroup/Placement/assets/aatir.jpeg";
import faizan from "../src/PageGroup/Placement/assets/faizan.jpeg";
import sample from "../src/assets/sample.jpeg";

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
    year: "2024",
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
        name: "Mariya Usman",
        year: "B.Tech/3rd",
        email: "mariyaus2002@gmail.com",
        img: mariyaImg,
        github: "https://github.com/mariyausman",
        linkedin: "https://www.linkedin.com/in/mariya-usman-a24b0722b",
        whatsapp : "",
      },
      {
        name: "Md Masleuddin",
        year: "B.Tech/3rd",
        email: "mdmasleuddin8008@gmail.com",
        img: masleuddin,
        github: "https://github.com/mdmasleuddin76/",
        linkedin: "https://www.linkedin.com/in/md-masleuddin-956938225/",
        whatsapp: "",
      },
      {
        name: "Sania Ahmad",
        year: "B.Tech/3rd",
        email: "saniaahmad6@gmail.com",
        img: sania,
        github: "https://github.com/saniaahmad6",
        linkedin: "https://www.linkedin.com/in/sania-ahmad-b6a5b7224/",
        whatsapp: "",
      },
      {
        name: "Hemant Navlani",
        year: "B.Tech/3rd",
        email: "hemant.navlani.0506@gmail.com",
        img: hemantImg,
        github: "https://github.com/HemantNavlani",
        linkedin: "https://www.linkedin.com/in/hemant-navlani-1a5a331b4/",
        whatsapp: "",
      },
      {
        name: "Md Kashiful Haque",
        year: "B.Tech/3rd",
        email: "kashifulhaq1@gmail.com",
        img: kashif,
        github: "",
        linkedin: "https://www.linkedin.com/in/md-kashiful-haque-037192229",
        whatsapp: "",
      },
    ],
  },
  {
    course: "SPCs",
    year: "2023",
    spcList: [
      {
        name: "Faizan Choudhary",
        year: "B.Tech/4th",
        email: "choudharyfaizan15@gmail.com",
        img: faizan,
        github: "https://www.github.com/FaizanCod",
        linkedin: "https://www.linkedin.com/in/choudhary-faizan",
        whatsapp: "",
      },
      {
        name: "Ausaf Ahmad",
        year: "B.Tech/4th",
        email: "ausaf.esrar@gmail.com",
        img: ausaf,
        github: "https://github.com/Ausaf1/",
        linkedin: "https://www.linkedin.com/in/ausaf-ahmad-300473203/",
        whatsapp: "",
      },
      {
        name: "Lal Bihari Pandey",
        year: "B.Tech/4th",
        email: "lalbiharipandeyg@gmail.com",
        img: sample,
        github: "https://github.com/xpandeyed/",
        linkedin: "https://www.linkedin.com/in/xpandeyed/",
        whatsapp : "",
      },
      {
        name: "Mohammad Aatir Nadeem",
        year: "B.Tech/4th",
        email: "aatir.nadim@gmail.com",
        img: aatir,
        github: "https://github.com/AatirNadim",
        linkedin: "https://linkedin.com/in/aatirnadim",
        whatsapp: "",
      },
    ],
  },
];

const placementData = [caraData, placementStats];

export default placementData;
