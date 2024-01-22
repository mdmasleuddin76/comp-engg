import Minor_Project from '../pdf/Notice/Minor_Pro_supervisors_2022.pdf'
import Time_Table_Btech from '../pdf/Notice/ttbtech_2022.pdf'
import Time_Table_Mtech from '../pdf/Notice/ttmtech_2022.pdf'
import First_Sessional from '../pdf/Notice/F_S_S_odd_2022.pdf'
import Academic_Calender from '../pdf/Notice/acdemic_calender_2022.pdf'

// notice board
export const notice = [
  {
    id:1,
    date: '12/9/2022',
    headline: 'List of B.Tech Minor Projects with Suppervisors and for bteach hello',
    url:Minor_Project,
  },
  {
    id:2,
    date: '05/9/2022',
    headline: 'Time Table (B.Tech)',
    url: Time_Table_Btech,
  },
  {
    id:3,
    date: '05/09/2022',
    headline: 'Time Table (M.Tech)',
    url:Time_Table_Mtech,
    
  },
  {
    id:4,
    date: '08/9/2022',
    headline: 'First Sessional Schedule for Session 2022-2023',
    url: First_Sessional,
  },
  {
    id:5,
    date: '06/9/2022',
    headline: 'Academic Calender (B.Tech 2022-2023)',
    url: Academic_Calender,
  },
];

// events
export const events= [{
    desc : "CSI-JMI organized Omnicron 2018, on 4th October, an online competitive programming contest for everyone. It was a great opportunity to showcase one’s knowledge of programming and coding skills to the world, with the additional incentive of cash prizes too. ",
    date: "04 Oct, 2018",
    venue: "online at hackerrank.com/omnicorn-2018",
    tagline: "Omnicron 2018 : Competitive coding competition",
    
  },{
    desc : "CSI-JMI in collaboration with Skill Campus brought one of a kind work shop on App Development, on 26th October, 2018. iOS App Development is amongst the most popular skills in the industry presently. iOS apps are developed with Swift and objective C. The workshop was successful with the huge response received from the students. ",
    venue: "Room No. 328,3rd Floor, FET",
    date: "21st, 22nd November, 2018",
    tagline: "iOS App Development",
    
  },{
    desc : "CSI-JMI organized a workshop on 'Basics of Machine Learning' on 21st and 22nd November, 2018. Machine Learning is one of the most discussed and rapidly emerging topics in the field of computer science.",
    venue: "Room No. 328,3rd Floor, FET",
    date: "08, 09 Sep, 2018",
    tagline: "Workshop on Basics of Machine Learning",
  }];

// images
export const images = [
  "https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
]

// achievements

export const achievements = [
  {
    title: "Touchless Automatic Attendance Marking System",
    description:
      "Mr. Danish Raza Rizvi along with Shivank Tripathi and Md. Nafis Khan developed the Students Attendance Manager Mobile App. Manual process of attendance management consumes a lot of time and paper resources. To prevent this, they introduced a system that consists of an android app with its web interface and for teacher and students. In this system, the students register themselves with their device and connect to the server. Application scans for the devices connected to the specific server in their local network without any manual intervention and marks them present in the database. This enable us to save a lot of time, help in storing record and also to track attendance.",
  },
  {
    title: "Geo-Fencing Box by Mr. M Zeeshan Ansari and Abhinav Rai",

    description:
      "Abhinav Rai, 4th Year Computer Engineering and his team under the Mentorship of their faculty members Mr. M Zeeshan Ansari and Mr. Faiyaz Ahmad, proposed an outstanding solution for the problem of ever-increasing UAVs (Unmanned Aerial Vehicles) that may cause troubles in air traffic. This problem was given in the Smart India Hackathon - 2017 by the Ministry of Civil Aviation. The team was all India winner at Smart India Hackathon – 2017 and was awarded prize of 1 Lakh Rupees.",
  },
  {
    title: "Intelligent Home Appliance Control System",
    description:
      "Dr. Mohd. Amjad, Mr. Mohd. Zeeshan Ansari and their students have developed an Automation System which provides remote operation of home appliances though their mobiles. The Mobile Application mainly provides management and control of home appliances and program them in order to accomplish the household tasks. Using this mobile application, the tasks that can be intelligently managed include automatic turn on and off for lights, fan, etc. It also offers a solution for connecting any types of home appliances even AC, TV, refrigerator through a single mobile application.",
  },
  {
    title: "Automatic Essay Grading",
    description:
      "Dr. Tanvir Ahmad supervised Ishita Tripathy on a project on Automated Essay Grading System. The purpose of this project is to implement and train natural language processing algorithms to assess and grade essay responses automatically. The system measures the organization and structure of the essay, command over language, and other metrics using features such as dominant tense, number of long words and sentences, number of grammatical errors, sentence count, etc. The final system performs better than state-of-the-art systems on 3 out of 8 sets in the database.",
  },
]