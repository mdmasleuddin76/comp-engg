const image =
  "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// ******************************MAJOR PROJECTS********************************
const MA15 = [
        {
          name: ["Aman Singh"],
          rollNo: ["11CSS08"],
          supervisor: "Mr. Saurabh Mehta",
          title: "Automatic Classification of Cricket Shots",
        },
        {
          name: ["Afsha Shah", "Noreen Anwar", "Shreyansh Jain"],
          rollNo: ["11CSS04", "11CSS45", "11CSS59"],
          supervisor: "Mr. Shahzad Alam",
          title: "ACO based Image Edge Detection Steganography",
        },
        {
          name: ["Chaudhary Shahid Husain", "Mohammad Toseef Mahmood"],
          rollNo: ["11CSS14", "11CSS34"],
          supervisor: "Dr. Mohd. Amjad",
          title: "Truth Discovery with Multiple Conflicting Information Providers on the web",
        },
        {
          name: ["Zeba Naseem", "Zohra Bano"],
          rollNo: ["11CSS72", "11CSS73"],
          supervisor: "Mr. Faiyaz Ahmad",
          title: "Composition Method based Chaotic S-Box Design",
        },
        {
          name: ["Obedullah", "Shivanshu Singh"],
          rollNo: ["11CSS46", "11CSS58"],
          supervisor: "Mr. Mohd. Zeeshan Ansari",
          title: "Fuzzy Logic based Meta Search Engine",
        },
        {
          name: ["Jatin Aggarwal", "Soyef"],
          rollNo: ["11CSS24", "11CSS63"],
          supervisor: "Dr. Bashir Alam",
          title: "Dynamic Sharing of GPU in Cloud System",
        },
        {
          name: ["Madhav Mehta", "Namrata"],
          rollNo: ["11CSS27", "11CSS42"],
          supervisor: "Mr. Danish Raza Rizvi",
          title: "Speech Recognition in Hindi",
        },
        {
          name: ["Shadab Khan", "Shubham Gupta"],
          rollNo: ["11CSS55", "11CSS60"],
          supervisor: "Mr. Sarfaraz Masood",
          title: "Musical Instrument Identification",
        },
        {
          name: ["Deepanshu Bhatia", "Yusuf Hassan"],
          rollNo: ["11CSS15", "11CSS70"],
          supervisor: "Mr. Musheer Ahmad",
          title: "Improving CSO performance using Chaotic Maps",
        },
        {
          name: ["Nalin Sharma", "Suraj Tripathi"],
          rollNo: ["11CSS41", "11CSS64"],
          supervisor: "Mr. Sarfaraz Masood",
          title: "Question answering system using Natural Language Processing",
        },
        {
          name: ["Izhar Ahmed", "Raghib Faisal", "Shubham Khulbe"],
          rollNo: ["11CSS23", "11CSS50", "11CSS61"],
          supervisor: "Mr. Mumtaz Ahmad",
          title: "Seizure prediction in intracranial EEG recordings",
        },
        {
          name: ["Dheeraj Dang", "Jitin Tanwar"],
          rollNo: ["11CSS16", "11CSS25"],
          supervisor: "Mr. Jawahar Lal",
          title: "Click-Through-Rate prediction of Ads in Mobiles",
        },
        {
          name: ["Karuna Rai", "Shaivi Kochar"],
          rollNo: ["11CSS26", "11CSS56"],
          supervisor: "Mr. Shamim Ahmad",
          title: "Cause-Effect pairs—Sequential Pattern Mining",
        },
        {
          name: ["Hatim Tai", "Md. Zulkarnain", "Oves Khan"],
          rollNo: ["11CSS21", "11CSS31", "11CSS47"],
          supervisor: "Dr. Tanvir Ahmad",
          title: "Application of Text-Mining to Build Recommendation system for Hotels",
        },
        {
          name: ["Astha Tiwari", "Siddharth Verma"],
          rollNo: ["11CSS12", "11CSS62"],
          supervisor: "Mr. Danish Raza Rizvi",
          title: "Solving Travelling Salesperson problem using Distributed Computing",
        },
        {
          name: ["Eram Farooqui", "Gulshana Chaudhary"],
          rollNo: ["11CSS18", "11CSS19"],
          supervisor: "Mr. Mumtaz Ahmad",
          title: "Using data mining and neural networks for forecasting stock market trends",
        },
        {
          name: ["Andleeb Zehra Zaidi", "Prerna Agarwal"],
          rollNo: ["11CSS09", "11CSS49"],
          supervisor: "Prof. M. N. Doja",
          title: "Identification and Ranking of key persons in a social networking website using Big Data Analytics",
        },
        {
          name: ["Asgher Imam", "S. Shahzawaz Ahmad"],
          rollNo: ["11CSS11", "11CSS53"],
          supervisor: "Mr. Mohd. Zeeshan Ansari",
          title: "Design & Implementation of web based search engine for category specific search result",
        },
        {
          name: ["Mohd. Sufiyan", "Zaki Hasan Mehdi"],
          rollNo: ["11CSS39", "11CSS71"],
          supervisor: "Mr. Mohd. Zeeshan Ansari",
          title: "Facial Recognition using Eigen Faces",
        },
        {
          name: ["Md. Danish Khan", "Md. Salik R. Khan", "Mohd. Danish Ansari"],
          rollNo: ["11CSS28", "11CSS30", "11CSS37"],
          supervisor: "Dr. Bashir Alam",
          title: "Performance Evaluation of Shortest path algorithm on GPU",
        },
        {
          name: ["Nikhil Dargan", "Utsav Jain"],
          rollNo: ["11CSS44", "11CSS67"],
          supervisor: "Mr. Musheer Ahmad",
          title: "Digital Watermarking based on Neural Networks",
        },
        {
          name: ["Nausheen Usmani", "Rukhsar Shakir"],
          rollNo: ["11CSS43", "11CSS52"],
          supervisor: "Mr. Shahzad Alam",
          title: "Chaos based Zero- Steganography Method",
        },
        {
          name: ["Prakriti Marwaha", "Rashi Batra"],
          rollNo: ["11CSS48", "11CSS51"],
          supervisor: "Dr. Tanvir Ahmad",
          title: "Satellite Image Classification using Fuzzy Logic",
        },
        {
          name: ["Mohd. Abdullah Hammad", "Mohd. Amir Amhad"],
          rollNo: ["11CSS32", "11CSS35"],
          supervisor: "Dr. Mohd. Amjad",
          title: "Symmetric Synchronous Stream Encryption using Images",
        },
        {
          name: ["Moonis Javed", "Vishakha Singh"],
          rollNo: ["11CSS40", "11CSS69"],
          supervisor: "Dr. Tanvir Ahmad",
          title: "Optical Character Recognition for Hindi Language",
        },
        {
          name: ["Harshvardhan Singh", "Mohd. Ashraf Khan"],
          rollNo: ["11CSS20", "11CSS36"],
          supervisor: "Mr. Jawahar Lal",
          title: "Sentiment Analysis for Hindi Language",
        },
        {
          name: ["Aadam Saleem", "Mohammad Shadab"],
          rollNo: ["11CSS01", "11CSS38"],
          supervisor: "Prof. M. N. Doja",
          title: "Hand Gesture controlled Android game using LEAP TH Motion",
        },
        {
          name: ["Ekamber Chadda", "Shamim Biswas"],
          rollNo: ["11CSS17", "11CSS57"],
          supervisor: "Mr. Faiyaz Ahmad",
          title: "Sentiment Analysis of Natural Language with Vector Word Representation and Deep Learning",
        },
        {
          name: ["Ankur Saldhi", "Mohammad Amir Jamil"],
          rollNo: ["11CSS10", "11CSS33"],
          supervisor: "Mr. Shahzad Alam",
          title: "Image Steganography using Genetic Algorithm and Visula Cryptography for Secure Data Hiding and Transmission over Network",
        },
        {
          name: ["Akif Khan Yusufzai", "Umar Ahmad", "Vipul Nayyar"],
          rollNo: ["11CSS07", "11CSS66", "11CSS68"],
          supervisor: "Dr. Bashir Alam",
          title: "Building and Optimizing Applications using High Performance Computing",
        },
        {
          name: ["Batool Naseem", "Hena Parween"],
          rollNo: ["11CSS13", "11CSS22"],
          supervisor: "Dr. Mohd. Amjad",
          title: "Combination of Cryptography and Steganography for secure communication in video file",
        },
        {
          name: ["Md. Safiyat Reza", "Surbhi Agarwal"],
          rollNo: ["11CSS29", "11CSS65"],
          supervisor: "Mr. Musheer Ahmad",
          title: "CAT Swarm Optimization based S-Box Design",
        },
      ];
const MA16 = [];
const MA17 = [];
const MA18 = [];
const MA19 = [];
const MA20 = [];
const MA21 = [];
const MA22 = [];
const MA23 = [];

// ******************************MINOR PROJECTS********************************
const MI15 = [];
const MI16 = [];
const MI17 = [];
const MI18 = [];
const MI19 = [];
const MI20 = [];
const MI21 = [];
const MI22 = [];
const MI23 = [];
// ******************************OPTIONS********************************
const opt = [
  {
    id: 1,
    value: "2022-2026",
  },
  {
    id: 1,
    value: "2021-2025",
  },
  {
    id: 1,
    value: "2020-2024",
  },
  {
    id: 1,
    value: "2019-2023",
  },
  {
    id: 1,
    value: "2018-2022",
  },
  {
    id: 1,
    value: "2017-2021",
  },
  {
    id: 1,
    value: "2016-2020",
  },
  {
    id: 1,
    value: "2015-2019",
  },
];
// ******************************PROJECT DATA********************************
const major = [MA23, MA22, MA21, MA20, MA19, MA18, MA17, MA16, MA15];
const minor = [MI23, MI22, MI21, MI20, MI19, MI18, MI17, MI16, MI15];
const ProjectData = [image,minor, major,opt];
export default ProjectData;
