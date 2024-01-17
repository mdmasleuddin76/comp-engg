const image =
  "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// ******************************MAJOR PROJECTS********************************
const MA11 = [
  {
    name: ["Aman Singh"],
    rollNo: ["11CSS08"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Automatic Classification of Cricket Shots",
  },
  {
    name: ["Afsha Shah , ", "Noreen Anwar , ", "Shreyansh Jain"],
    rollNo: ["11CSS04 , ", "11CSS45 , ", "11CSS59"],
    supervisor: "Mr. Shahzad Alam",
    title: "ACO based Image Edge Detection Steganography",
  },
  {
    name: ["Chaudhary Shahid , ", "HusainMohammad , ", "Toseef Mahmood"],
    rollNo: ["11CSS14 , ", "11CSS34"],
    supervisor: "Dr. Mohd. Amjad",
    title:
      "Truth Discovery with Multiple Conflicting Information                                                        Providers on the web",
  },
  {
    name: ["Zeba Naseem , ", "Zohra Bano"],
    rollNo: ["11CSS72 , ", "11CSS73"],
    supervisor: "Mr. Faiyaz Ahmad",
    title: "Composition Method based Chaotic S-Box Design",
  },
  {
    name: ["Obedullah , ", "Shivanshu Singh"],
    rollNo: ["11CSS46 , ", "11CSS58"],
    supervisor: "Mr. Mohd. Zeeshan Ansari",
    title: "Fuzzy Logic based Meta Search Engine",
  },
  {
    name: ["Jatin Aggarwal , ", "Soyef"],
    rollNo: ["11CSS24 , ", "11CSS63"],
    supervisor: "Dr. Bashir Alam",
    title: "Dynamic Sharing of GPU in Cloud System",
  },
  {
    name: ["Madhav Mehta , ", "Namrata"],
    rollNo: ["11CSS27 , ", "11CSS42"],
    supervisor: "Mr. Danish Raza Rizvi",
    title: "Speech Recognition in Hindi",
  },
  {
    name: ["Shadab Khan , ", "Shubham Gupta"],
    rollNo: ["11CSS55 , ", "11CSS60"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Musical Instrument Identification",
  },
  {
    name: ["Deepanshu Bhatia , ", "Yusuf Hassan"],
    rollNo: ["11CSS15 , ", "11CSS70"],
    supervisor: "Mr. Musheer Ahmad",
    title: "Improving CSO performance using Chaotic Maps",
  },
  {
    name: ["Nalin Sharma , ", "Suraj Tripathi"],
    rollNo: ["11CSS41 , ", "11CSS64"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Question answering system using Natural Language Processing",
  },
  {
    name: ["Izhar Ahmed , ", "Raghib Faisal , ", "Shubham Khulbe"],
    rollNo: ["11CSS23 , ", "11CSS50 , ", "11CSS61"],
    supervisor: "Mr. Mumtaz Ahmad",
    title: "Seizure prediction in intracranial EEG recordings",
  },
  {
    name: ["Dheeraj Dang , ", "Jitin Tanwar"],
    rollNo: ["11CSS16 , ", "11CSS25"],
    supervisor: "Mr. Jawahar Lal",
    title: "Click-Through-Rate prediction of Ads in Mobiles",
  },
  {
    name: ["Karuna Rai , ", "Shaivi Kochar"],
    rollNo: ["11CSS26 , ", "11CSS56"],
    supervisor: "Mr. Shamim Ahmad",
    title: "Cause-Effect pairs Sequential Pattern Mining",
  },
  {
    name: ["Hatim Tai , ", "Md. Zulkarnain , ", "Oves Khan"],
    rollNo: ["11CSS21 , ", "11CSS31 , ", "11CSS47"],
    supervisor: "Dr. Tanvir Ahmad",
    title:
      "Application of Text-Mining to Build Recommendation system for                                                        Hotels",
  },
  {
    name: ["Astha Tiwar , ", "iSiddharth Verma"],
    rollNo: ["11CSS12 , ", "11CSS62"],
    supervisor: "Mr. Danish Raza Rizvi",
    title: "Solving Travelling Salesperson problem using Distributed Computing",
  },
  {
    name: ["Eram Farooqui , ", "Gulshana Chaudhary"],
    rollNo: ["11CSS18 , ", "11CSS19"],
    supervisor: "Mr. Mumtaz Ahmad",
    title:
      "Using data mining and neural networks for forecasting stock  market trends",
  },
  {
    name: ["Andleeb , ", "Zehra Zaidi , ", "Prerna Agarwal"],
    rollNo: ["11CSS09 , ", "11CSS49"],
    supervisor: "Prof. M. N. Doja",
    title:
      "Identification and Ranking of key persons in a social networking website using Big Data Analytics",
  },
  {
    name: ["Asgher ImamS , ", "Shahzawaz Ahmad"],
    rollNo: ["11CSS11 , ", "11CSS53"],
    supervisor: "Mr. Mohd. Zeeshan Ansari",
    title:
      "Design & Implementation of web based search engine for category specific search result",
  },
  {
    name: ["Mohd. Sufiyan , ", "Zaki Hasan Mehdi"],
    rollNo: ["11CSS39 , ", "11CSS71"],
    supervisor: "Mr. Mohd. Zeeshan Ansari",
    title: "Facial Recognition using Eigen Faces",
  },
  {
    name: ["Md. Danish Khan , ", "Md. Salik R. Khan , ", "Mohd. Danish Ansari"],
    rollNo: ["11CSS28 , ", "11CSS30 , ", "11CSS37"],
    supervisor: "Dr. Bashir Alam",
    title: "Performance Evaluation of Shortest path algorithm on GPU",
  },
  {
    name: ["Nikhil Dargan , ", "Utsav Jain"],
    rollNo: ["11CSS44 , ", "11CSS67"],
    supervisor: "Mr. Musheer Ahmad",
    title: "Digital Watermarking based on Neural Networks",
  },
  {
    name: ["Nausheen Usmani , ", "Rukhsar Shakir"],
    rollNo: ["11CSS43 , ", "11CSS52"],
    supervisor: "Mr. Shahzad Alam",
    title: "Chaos based Zero- Steganography Method",
  },
  {
    name: ["Prakriti Marwaha , ", "Rashi Batra"],
    rollNo: ["11CSS48 , ", "11CSS51"],
    supervisor: "Dr. Tanvir Ahmad",
    title: "Satellite Image Classification using Fuzzy Logic",
  },
  {
    name: ["Mohd. Abdullah Hammad , ", "Mohd. Amir Amhad"],
    rollNo: ["11CSS32 , ", "11CSS35"],
    supervisor: "Dr. Tanvir Ahmad",
    title: "Symmetric Synchronous Stream Encryption using Images",
  },
  {
    name: ["Moonis Javed , ", "Vishakha Singh"],
    rollNo: ["11CSS40 , ", "11CSS69"],
    supervisor: "Mr. Mohd. Zeeshan Ansari",
    title: "Optical Character Recognition for Hindi Language",
  },
  {
    name: ["Harshvardhan Singh , ", "Mohd. Ashraf Khan"],
    rollNo: ["11CSS20 , ", "11CSS36"],
    supervisor: "Mr. Jawahar Lal",
    title: "Sentiment Analysis for Hindi Language",
  },
  {
    name: ["Aadam Saleem , ", "Mohammad Shadab"],
    rollNo: ["11CSS01 , ", "11CSS38"],
    supervisor: "Prof. M. N. Doja",
    title: "Hand Gesture controlled Android game using LEAPTHMotion",
  },
  {
    name: ["Ekamber Chadda , ", "Shamim Biswas"],
    rollNo: ["11CSS17 , ", "11CSS57"],
    supervisor: "Mr. Faiyaz Ahmad",
    title:
      "Sentiment Analysis of Natural Language with Vector Word Representation and Deep Learning",
  },
  {
    name: ["Ankur Saldhi , ", "Mohammad Amir Jamil"],
    rollNo: ["11CSS10 , ", "11CSS33"],
    supervisor: "Mr. Shahzad Alam",
    title:
      "Image Steganography using Genetic Algorithm and Visula Cryptography for Secure Data Hiding and Transmission                                                        over Network",
  },
  {
    name: ["Akif Khan Yusufzai , ", "Umar Ahmad , ", "Vipul Nayyar"],
    rollNo: ["11CSS07 , ", "11CSS66 , ", "11CSS68"],
    supervisor: "Dr. Bashir Alam",
    title:
      "Building and Optimizing Applications using High Performance Computing",
  },
  {
    name: ["Batool Naseem , ", "Hena Parween"],
    rollNo: ["11CSS13 , ", "11CSS22"],
    supervisor: "Dr. Mohd. Amjad",
    title:
      "Combination of Cryptography and Steganography for secure communication in video file",
  },
  {
    name: ["Md. Safiyat Reza , ", "Surbhi Agarwal"],
    rollNo: ["11CSS29 , ", "11CSS65"],
    supervisor: "Mr. Musheer Ahmad",
    title: "CAT Swarm Optimization based S-Box Design",
  },
];
const MA12 = [
  {
    name: ["Abdul Karim , ", "Abhishek Joshi"],
    rollNo: ["12CSS01 , ", "12CSS04"],
    supervisor: "Mr. Shahzad Alam",
    title:
      "Chaotic Steganography based on Edge Detection using Artificial Neural Network",
  },
  {
    name: ["Abdul Wajid Nasar , ", "Suhani Gupta"],
    rollNo: ["12CSS02 , ", "12CSS67"],
    supervisor: "Mr. Danish Raza Rizvi",
    title:
      "Ethnicity Identification of Humans Based on Facial Features using Skin Color Model",
  },
  {
    name: ["Ahsan Kamal , ", "Md. Mehrab Alam"],
    rollNo: ["12CSS07 , ", "12CSS30"],
    supervisor: "Prof. M. N. Doja",
    title:
      "Footwear image classification and visually similar recommendation using Deep Nets",
  },
  {
    name: ["Ameen Mohammad Khan , ", "Sharan Aggarwal"],
    rollNo: ["12CSS11 , ", "12CSS62"],
    supervisor: "Dr. Mohd. Amjad",
    title:
      "Prediction of File-Level logical Interdependency by Mining Git Commit History",
  },
  {
    name: ["Aman Arora , ", "Nikhil Mittal"],
    rollNo: ["12CSS10 , ", "12CSS43"],
    supervisor: "Mr. Musheer Ahmad",
    title: "Chaotically initialized bacterial foraging optimization",
  },
  {
    name: ["Abhishek Bhatnagar , ", "Sarthak Jain"],
    rollNo: ["12CSS03 , ", "12CSS58"],
    supervisor: "Mr. Zeeshan Ansari",
    title: "Artificial Bees Colony Optimization based S-Box Design",
  },
  {
    name: ["Harshvardhan Vashishtha , ", "Mehtab Khan"],
    rollNo: ["12CSS24 , ", "12CSS27"],
    supervisor: "Mr. Zeeshan Ansari",
    title:
      "Cryptographic Substitution Box Design using Affine-power-affine Transformation",
  },
  {
    name: ["Akshat Jindal , ", "Mohd. Raghib Khan , ", "Rubab Alam"],
    rollNo: ["12CSS08 , ", "12CSS35 , ", "12CSS48"],
    supervisor: "Mr. Shahzad Alam",
    title: "Message hiding using Edge Detection Technique",
  },
  {
    name: ["Antriksh Agarwal , ", "Sapna"],
    rollNo: ["12CSS12 , ", "12CSS55"],
    supervisor: "Prof. Tanvir Ahmad",
    title: "Automatic Attendance monitoring system in classroom & laboratory",
  },
  {
    name: ["Aditya Kumar , ", "Prerit Garg"],
    rollNo: ["12CSS05 , ", "12CSS44"],
    supervisor: "Mr. Danish Raza Rizvi",
    title: "User Authentication using keystroke dynamics",
  },
  {
    name: ["Anzal Zia Khan , ", "Mohd Umar Hasan"],
    rollNo: ["12CSS13 , ", "12CSS38"],
    supervisor: "Dr. Bashir Alam",
    title: "Automatic text summarization",
  },
  {
    name: ["Mohd. Rezwan , ", "Md. Raghib Ahsan"],
    rollNo: ["12CSS36 , ", "12CSS40"],
    supervisor: "Mr. Danish Raza Rizvi",
    title: "Content based video classification system",
  },
  {
    name: ["Sana Noor , ", "Sultana Mumtaz Begum"],
    rollNo: ["12CSS54 , ", "12CSS68"],
    supervisor: "Mr. Shahzad Alam",
    title:
      "A Novel algorithm for color image steganography using a new intelligent technique based on seven layers of security",
  },
  {
    name: ["Ghalib Saleem , ", "Naeem Ahmad , ", "Anghat Babu"],
    rollNo: ["12CSS22 , ", "12CSS41 , ", "10CSS11"],
    supervisor: "Mr. Musheer Ahmad",
    title:
      "Predicting the Mackey Glass chaotic time series using genetic algorithm",
  },
  {
    name: ["Rehan Raza , ", "Siddharth Sukhija"],
    rollNo: ["12CSS47 , ", "12CSS66"],
    supervisor: "Mr. Shamim Ahmad",
    title: "Gesture recognition & processing system",
  },
  {
    name: ["Tushar Raheja , ", "Zishan Ahmad"],
    rollNo: ["12CSS90 , ", "12CSS90"],
    supervisor: "Mr. Mumtaz Ahmad",
    title:
      "Camera pose estimation & object integration using parallel tracking & mapping",
  },
  {
    name: ["Mohd Irfan Ansari , ", "Saifur Rahman"],
    rollNo: ["12CSS34 , ", "12CSS52"],
    supervisor: "Dr. Bashir Alam",
    title: "Detecting emotion in human speech",
  },
  {
    name: ["Shuriti Khurana , ", "Sushmita Singh"],
    rollNo: ["12CSS65 , ", "12CSS70"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Music recommendation system based on deep content analysis",
  },
  {
    name: ["Jeevan Singh Nayal , ", "Ravi Kumar Jain"],
    rollNo: ["12CSS25 , ", "12CSS46"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Emotion identification in songs using musical audio features",
  },
  {
    name: ["Sahil Wadhwa , ", "Syed Ashar Javed"],
    rollNo: ["12CSS50 , ", "12CSS71"],
    supervisor: "Mr. Mumtaz Ahmad",
    title:
      "Event classification in complex videos using convolutional neural networks",
  },
  {
    name: ["Sarah Khan , ", "Zeya Umayya"],
    rollNo: ["12CSS56 , ", "12CSS73"],
    supervisor: "Mr. Faiyaz Ahmad",
    title:
      "Image encryption using hybrid particle swarm optimization and chaotic function model",
  },
  {
    name: ["Bushra Khan , ", "Maria Khan"],
    rollNo: ["12CSS18 , ", "12CSS29"],
    supervisor: "Prof. M. N. Doja",
    title: "Contents based Image Retrieval",
  },
  {
    name: ["Aly Akhtar , ", "Chaitanya Gupta"],
    rollNo: ["12CSS09 , ", "12CSS19"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Predicting air pollution level in a specific city",
  },
  {
    name: ["Mohammad Shahjahan , ", "Shoyab Khan"],
    rollNo: ["12CSS33 , ", "12CSS64"],
    supervisor: "Mr. Faiyaz Ahmad",
    title: "Voice conversion system",
  },
  {
    name: ["Saif Ahmad Khan , ", "Sajjad Waseem"],
    rollNo: ["12CSS51 , ", "12CSS53"],
    supervisor: "Mr. Faiyaz Ahmad",
    title: "Image based attendance system",
  },
  {
    name: ["Manish Malik , ", "Shadab Zafar"],
    rollNo: ["12CSS28 , ", "12CSS59"],
    supervisor: "Mr. Musheer Ahmad",
    title: "Security analysis of cryptographic Hash function",
  },
  {
    name: ["Mohib Yousuf , ", "Shafiya Naaz"],
    rollNo: ["12CSS39 , ", "12CSS60"],
    supervisor: "Dr. Mohd. Amjad",
    title: "Implementation & analysis of visual cryptography",
  },
  {
    name: ["Nikhil K Raman , ", "Rahul Mehra"],
    rollNo: ["12CSS42 , ", "12CSS45"],
    supervisor: "Mr. Jawahar Lal",
    title: "Face recognition theft detector and alerter",
  },
  {
    name: ["Asif Ahmad Khan , ", "Athul Biju , ", "Mohd Shoib Khan"],
    rollNo: ["12CSS14 , ", "12CSS15 , ", "12CSS37"],
    supervisor: "Dr. Mohd. Amjad",
    title: "Automatic prediction of facial attractiveness in humans",
  },
  {
    name: [
      "Habib Mohammad Khan , ",
      "Md. Shahbaz Ahmad , ",
      "Mohammad Farhan Khan",
    ],
    rollNo: ["12CSS23 , ", "12CSS31 , ", "12CSS32"],
    supervisor: "Mr. Shamim Ahmad",
    title:
      "Application of text mining to build a recommendation system for dishes",
  },
  {
    name: ["Md. Mayar Alam , ", "Sunny Sarvottam"],
    rollNo: ["12CSS27 , ", "12CSS69"],
    supervisor: "Mr. Jawahar Lal",
    title: "Feature extraction for the analysis of gait and human motion",
  },
  {
    name: ["Avishkar Gupta , ", "Dhawal Arora"],
    rollNo: ["12CSS16 , ", "12CSS20"],
    supervisor: "Prof. M. N. Doja",
    title: "Unsupervised deep learning for multi-document summarization",
  },
  {
    name: ["Sachin Sharma , ", "Shivam Rana"],
    rollNo: ["12CSS49 , ", "12CSS63"],
    supervisor: "Prof. Tanvir Ahmad",
    title: "Domain specific Author ranking system",
  },
  {
    name: ["Farheen Nilofer , ", "Sarah Masud"],
    rollNo: ["12CSS21 , ", "12CSS57"],
    supervisor: "Prof. Tanvir Ahmad",
    title: "Fuzzy Taxonomy Extraction for Big Data",
  },
  {
    name: ["Kokab Tasleem"],
    rollNo: ["12CSS26"],
    supervisor: "Dr. Bashir Alam",
    title: "Extracting relevant tags from Text documents",
  },
];
const MA13 = [
  {
    name: ["Sonaal Dua , ", "Gaurav Sharma"],
    rollNo: ["13BSS0073 , ", "13BSS0025"],
    supervisor: "Mr. Danish R. Rizvi",
    title: "Smart infrastructure control and automation systems(SICAS)",
  },
  {
    name: ["Shikha Kaushik , ", "Anamta Khan"],
    rollNo: ["13BSS0066 , ", "13BSS0013"],
    supervisor: "Mr. Danish R. Rizvi",
    title:
      "Autonomous four phase intersection traffic lights with optimum green ratios.",
  },
  {
    name: ["Fatima Munawwar , ", "Umer Ahsan"],
    rollNo: ["13BSS0023 , ", "13BSS0069"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Image caption generation using Deep Neural Network",
  },
  {
    name: ["Osama Khan , ", "Satyam Sinha , ", "Wajahat Ansari"],
    rollNo: ["13BSS0090 , ", "13BSS0062 , ", "13BSS0071"],
    supervisor: "Mr. Faiyaz Ahmad",
    title: "Autonomous Car using evolving neural network",
  },
  {
    name: ["Mohammad Asif , ", "Mohd. Asad , ", "Basit Ali"],
    rollNo: ["13BSS0040 , ", "13BSS0048 , ", "13BSS0020"],
    supervisor: "Mr. Mumtaz Ahmad",
    title: "Twitter sentiment classification using Distant supervision",
  },
  {
    name: ["Rabia Abdul Jabbar , ", "Saniya Suhail"],
    rollNo: ["13BSS0055 , ", "13BSS0061"],
    supervisor: "Dr. Mohd. Amjad",
    title: "Edge detection using Krawtchouk Polynomials",
  },
  {
    name: ["Harish Chandra Thuwal , ", "Adhyan Srivastava"],
    rollNo: ["13BSS0027 , ", "13BSS0007"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Real time sign language gesture recognition from video sequences",
  },
  {
    name: ["Mohd. Shoeb , ", "Ajay Goyal"],
    rollNo: ["13BSS0051 , ", "13BSS0010"],
    supervisor: "Mr. Jawahar Lal",
    title:
      "Sentiment Analysis on restaurant reviews using Natural language processing",
  },
  {
    name: ["Saba Khan , ", "M. Munirud Doja"],
    rollNo: ["13BSS0057 , ", "13BSS0042"],
    supervisor: "Prof. Tanvir Ahmad",
    title: "Analysis of Road Accidents using data mining",
  },
  {
    name: ["Aakash Gaur , ", "Mohd. Yaseen"],
    rollNo: ["13BSS0001 , ", "13BSS0046"],
    supervisor: "Mr. Hannan Mansoor",
    title:
      "Voice based navigation system for blind people using ultrasonic sensor",
  },
  {
    name: ["Mayank Shekhar , ", "Sumit Kumar Jha"],
    rollNo: ["13BSS0033 , ", "13BSS0067"],
    supervisor: "Mr. Musheer Ahmad",
    title:
      "An optical character recognition based android application for business card scanner",
  },
  {
    name: ["Sahil , ", "Salamuddin"],
    rollNo: ["13BSS0058 , ", "13BSS0059"],
    supervisor: "Mr. Faiyaz Ahmad",
    title: "Face expression recognition",
  },
  {
    name: ["Minnat Khan , ", "Gulnawaz Akram"],
    rollNo: ["13BSS0038 , ", "13BSS0026"],
    supervisor: "Mr. Hannan Mansoor",
    title: "Automated Text categorization system using Open directory project",
  },
  {
    name: ["Maseera Ali , ", "Aditi Mishra , ", "Ahmad Zia Zafari"],
    rollNo: ["13BSS0032 , ", "13BSS0008 , ", "12CSS06"],
    supervisor: "Mr. Musheer Ahmad",
    title: "Cryptographic Hash Function Design using Generalized Chaotic Map",
  },
  {
    name: ["Jawed Ahmad , ", "Mohd. Asad Hussain"],
    rollNo: ["13BSS0030 , ", "13BSS0039"],
    supervisor: "Dr. Bashir Alam",
    title: "Finding interesting patterns from uncertain Big data",
  },
  {
    name: ["Abdul Rauf , ", "Abdullah Hasan"],
    rollNo: ["13BSS0003 , ", "13BSS0004"],
    supervisor: "Mr. Shamim Ahmad",
    title: "Implementation of various AI techniques to solve pacman game",
  },
  {
    name: ["Md. Shariq Shahab , ", "Md. Tabish R. Khan , ", "Nasruddin Ali"],
    rollNo: ["13BSS0035 , ", "13BSS0036 , ", "13BSS0053"],
    supervisor: "Dr. Bashir Alam",
    title: "Detect disease from Chest X-ray and annotate its context",
  },
  {
    name: ["Abdullah Wasim"],
    rollNo: ["11CSS03"],
    supervisor: "Mr. Jawahar Lal",
    title: "Spam text detection",
  },
  {
    name: ["Amit Jindal , ", "Mohd. Faizan"],
    rollNo: ["13BSS0012 , ", "13BSS0050"],
    supervisor: "Dr. Mohd. Amjad",
    title:
      "Detection of acute leukemia using white blood cells segmentation based on blood samples",
  },
  {
    name: ["Mohd. Saddam Hussain , ", "Mohd. Asrar Ahmad"],
    rollNo: ["13BSS0043 , ", "13BSS0049"],
    supervisor: "Mr. Shamim Ahmad",
    title: "A new approach to hide text in image using steganography",
  },
  {
    name: ["Asjad Khan , ", "Mohd. Shahrukh , ", "Mohd. Yusuf Ali"],
    rollNo: ["13BSS0041 , ", "13BSS0044 , ", "13BSS0045"],
    supervisor: "Mr. M. Zeeshan Ansari",
    title: "Emotion recognition from speech using support vector machine",
  },
  {
    name: ["Adeela Izhar , ", "Shazli Khanam"],
    rollNo: ["13BSS0006 , ", "13BSS0065"],
    supervisor: "Mr. Shahzad Alam",
    title:
      "A novel bacterial foraging technique for optimization of edge detection in images",
  },
  {
    name: ["Atul Kunwar , ", "Azhan Alam"],
    rollNo: ["13BSS0017 , ", "12CSS17"],
    supervisor: "Mr. M. Zeeshan Ansari",
    title: "Aging face recognition",
  },
  {
    name: ["Himanshu Sundriyal , ", "Tarun Luthra"],
    rollNo: ["13BSS0028 , ", "13BSS0068"],
    supervisor: "Dr. r Alam",
    title: "Game theoretic model for soul Network Analysis",
  },
  {
    name: ["Md. Insan Ahsan , ", "Md. Mahtab Alam"],
    rollNo: ["13BSS0034 , ", "13BSS0075"],
    supervisor: "Mr. Mumtaz Ahmad",
    title:
      "Brain tumor detection algorithm using watershed & thresholding based segmentation",
  },
  {
    name: ["Ayush Jain , ", "Ayush Chauhan , ", "Pulkit Gupta"],
    rollNo: ["13BSS0019 , ", "13BSS0018 , ", "13BSS0054"],
    supervisor: "Dr. Mohd. Amjad",
    title: "AI lane detection and vehicle tracking using computer vision",
  },
  {
    name: ["Darsh Gupta , ", "Deepak Sharma , ", "Varun Bansal"],
    rollNo: ["13BSS0021 , ", "13BSS0022 , ", "13BSS0074"],
    supervisor: "Mr. Faiyaz Ahmad",
    title: "Evaluating sentiment for user posted online reviews and opinions",
  },
  {
    name: ["Abhinav Rai , ", "Ashhar Hasan"],
    rollNo: ["13BSS0005 , ", "13BSS0015"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Deep learning based motor control unit",
  },
  {
    name: ["Amir Khan , ", "Anas Ahmad Qazi"],
    rollNo: ["13BSS0011 , ", "13BSS0014"],
    supervisor: "Mr. M. Zeeshan Ansari",
    title: "Language identification of transliterated text using N-Gram",
  },
  {
    name: ["Sharmin Khan , ", "Irum"],
    rollNo: ["13BSS0064 , ", "13BSS0029"],
    supervisor: "Prof. M. N. Doja",
    title:
      "Neighborhood topology to discover influential nodes in a complex network",
  },
  {
    name: ["Ahmad Sarosh Waseem , ", "Shafquat Bakhtiyar"],
    rollNo: ["13BSS0009 , ", "13BSS0063"],
    supervisor: "Mr. Shahzad Alam",
    title:
      "Ant colony optimization based on Image edge detection steganography",
  },
  {
    name: ["Aakash Aggarwal , ", "Krishan Chopra"],
    rollNo: ["13BSS0002 , ", "13BSS0031"],
    supervisor: "Mr. Danish R. Rizvi",
    title: "Air pollution forecasting system using statistical model",
  },
  {
    name: ["Mohd. Arshad , ", "Shamshad Alam"],
    rollNo: ["13BSS0047 , ", "12CSS61"],
    supervisor: "Mr. Jawahar Lal",
    title: "Secure student information system",
  },
  {
    name: ["Mohit Singh Kharab , ", "Vaibhav Bindal"],
    rollNo: ["13BSS0052 , ", "13BSS0070"],
    supervisor: "Mr. Mumtaz Ahmad",
    title: "Network Packet Analyzer",
  },
];
const MA14 = [
  {
    name: ["Ajitesh Kumar Rai , ", "Lakshita Bhatia"],
    rollNo: ["14BCS0051 , ", "14BCS0056"],
    supervisor: "Mr. Danish Raza Rizvi",
    title: "Real time vehicle register of gated community",
  },
  {
    name: ["Aisha Aijaz"],
    rollNo: ["14BCS0024"],
    supervisor: "Mr. Sarfaraz Masood",
    title:
      "Automatic sleep stage scoring from single channel ECG using boosted tree",
  },
  {
    name: ["Dhruv Malik , ", "Gaurav Arora , ", "Mohd. Usman Alvi"],
    rollNo: ["14BCS0026 , ", "14BCS0028 , ", "14BCS0030"],
    supervisor: "Mr. Danish Raza Rizvi",
    title: "Cancer detection using machine learning",
  },
  {
    name: ["Saif Rehman Nasir , ", "Anish Sharma , ", "Rahul Tuteja"],
    rollNo: ["14BCS0007 , ", "14BCS0039 , ", "14BCS0045"],
    supervisor: "Dr. Mohd. Zeeshan Ansari",
    title:
      "Comparative analysis of different algorithms for identification of transliterated language",
  },
  {
    name: ["Mohd. Wajid Zaman"],
    rollNo: ["14BCS0033"],
    supervisor: "Dr. Mohd. Amjad",
    title:
      "Deep Learning based approaches for detection of toxicity in Online comments",
  },
  {
    name: ["Suhail Khan , ", "Mohd. Suhail , ", "Zafarullah Mahmood"],
    rollNo: ["14BCS0018 , ", "14BCS0032 , ", "14BCS0049"],
    supervisor: "Dr. Mohd. Amjad",
    title:
      "Learning document vectors using attentional convolutional neural networks",
  },
  {
    name: ["Mohd. Sadiq , ", "Mubashshir Khan , ", "Murtaza Hasan"],
    rollNo: ["14BCS0060 , ", "14BCS0062 , ", "14BCS0063"],
    supervisor: "Mr. Hannan Mansoor",
    title: "Playing TETRIS with genetic algorithms",
  },
  {
    name: ["Najeeb Khan , ", "Zaki Mustafa Farooqi"],
    rollNo: ["14BCS00 , ", "14BCS00"],
    supervisor: "Prof. M. N. Doja",
    title: "Unsupervised coarse object detection using domain adaptation",
  },
  {
    name: ["Gaurav Suri , ", "Sanjay Kumar , ", "Syed Faheel Ahmad"],
    rollNo: ["14BCS0040 , ", "14BCS0046 , ", "14BCS0067"],
    supervisor: "Mr. Danish Raza Rizvi",
    title:
      "A programming language with minimal syntax that can understand natural language.",
  },
  {
    name: ["Anas Akhtar , ", "Akshay Sharma"],
    rollNo: ["14BCS0025 , ", "14BCS0038"],
    supervisor: "Mr. Mohd. Zeeshan Ansari",
    title: "Automatic CV ranking and selection mechanism",
  },
  {
    name: ["Abhishek Bhatt , ", "Harsh Vijay , ", "Rohit Kumar Wasan"],
    rollNo: ["14BCS0023 , ", "14BCS0053 , ", "14BCS0065"],
    supervisor: "Prof. Tanvir Ahmad",
    title: "Computer vision based smart switching network",
  },
  {
    name: ["Kashan U Z Khan , ", "Mohammad Huzaifa , ", "Subia Ansari"],
    rollNo: ["14BCS0014 , ", "14BCS0031 , ", "14BCS0047"],
    supervisor: "Prof. Tanvir Ahmad",
    title: "Video frame interpolation and extrapolation using deep learning",
  },
  {
    name: ["Aquib Jawed , ", "Afzal Ahmad"],
    rollNo: ["14BCS0011 , ", "14BCS0037"],
    supervisor: "Mr. Musheer Ahmad",
    title: "Multiple watermarking scheme based on improved chaotic",
  },
  {
    name: ["Azfar Sikander Zaidi"],
    rollNo: ["14BCS0052"],
    supervisor: "Mr. Faiyaz Ahmad",
    title:
      "Stock market analysis and prediction using supervised learning techniques",
  },
  {
    name: ["Farah Naz , ", "Purnima Garg"],
    rollNo: ["14BCS0027 , ", "14BCS0034"],
    supervisor: "Dr. Bashir Alam",
    title: "Calories estimation from food images",
  },
  {
    name: ["Saquib Ali Khan , ", "Yasir Bashir Mir"],
    rollNo: ["14BCS00 , ", "14BCS00"],
    supervisor: "Dr. Bashir Alam",
    title: "Multi frame video super resolution",
  },
  {
    name: ["Abdullah , ", "Mohd. Faizan Shahid , ", "Arpit Singh"],
    rollNo: ["14BCS0001 , ", "14BCS0004 , ", "14BCS0012"],
    supervisor: "Mr. Jawahar Lal",
    title: "Multilingual sentiment analysis",
  },
  {
    name: ["Rishabh Jain , ", "Saurabh Purohit , ", "Shikhar Chaudhary"],
    rollNo: ["14BCS00 , ", "14BCS00 , ", "14BCS00"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Chord detection & optical music recognition",
  },
  {
    name: ["Shabnam Khatoon , ", "Iram Ayyub"],
    rollNo: ["14BCS0009 , ", "14BCS0054"],
    supervisor: "Mr. Me. Shahzad Alam",
    title: "Music recommendation system",
  },
  {
    name: ["Sahiba Khan , ", "Alima Siddiqui"],
    rollNo: ["14BCS0006 , ", "14BCS0010"],
    supervisor: "Prof. Tanvir Ahmad",
    title: "Recognizing Human sentiments from videos",
  },
  {
    name: ["Khalid Hasan Rahmani , ", "Mohd. Ariz Ansari"],
    rollNo: ["14BCS0055 , ", "14BCS0059"],
    supervisor: "Mr. Jawahar Lal",
    title: "Automatic highlighter of lengthy legal documents",
  },
  {
    name: ["Aviral Mudgal"],
    rollNo: ["14BCS0013"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Document similarity using feed forward neural networks",
  },
  {
    name: ["Abhishek Barnwal"],
    rollNo: ["14BCS0022"],
    supervisor: "Mr. Shamim Ahmad",
    title: "Simulating an Autonomous Car",
  },
  {
    name: ["Mohd. Saqib , ", "Lokesh Kumar , ", "Shabahat Jawed"],
    rollNo: ["14BCS0042 , ", "14BCS0057 , ", "14BCS0066"],
    supervisor: "Mr. Mohd. Zeeshan Ansari",
    title: "Natural language identification using Deep learning",
  },
  {
    name: ["Md. Amir Naseem , ", "Mohd. Zeeshan Siddiqui"],
    rollNo: ["14BCS0058 , ", "14BCS0061"],
    supervisor: "Mr. Shahzad Alam",
    title: "Predicting speech by reading lips using deep learning",
  },
  {
    name: ["Tafseer Ahmad , ", "Abdul Mohsin Siddiqui , ", "Mohd. Zaiyan Alam"],
    rollNo: ["14BCS0019 , ", "14BCS0036 , ", "14BCS0041"],
    supervisor: "Mr. Faiyaz Ahmad",
    title:
      "Autonomous navigation of a quadcopter UAV in an unknown environment in real time using RL and computer vision",
  },
  {
    name: ["Shubham Garg , ", "Vaibhav Singhal , ", "Saurabh Sharma"],
    rollNo: ["14BCS0017 , ", "14BCS0020 , ", "14BCS0035"],
    supervisor: "Mr. Musheer Ahmad",
    title:
      "Designing pseudo random number generator based on discrete chaotic map",
  },
  {
    name: ["Kunal Kaushik"],
    rollNo: ["14BCS0003"],
    supervisor: "Mr. Mumtaz Ahmad",
    title: "Stance detection in news articles",
  },
  {
    name: ["Joy Mukharjee"],
    rollNo: ["14BCS0002"],
    supervisor: "Mr. Mumtaz Ahmad",
    title:
      "Automatic traffic light control system by using measuring traffic density using computer vision",
  },
];
const MA15 = [
  {
    name: ["Razi Ahmad , ", "Saliq Saifi"],
    rollNo: ["15BCS0025 , ", "15BCS0027"],
    supervisor: "Mr. Musheer Ahmad",
    title: "Generation of S-Box using NSGA - II",
  },
  {
    name: ["Razi Ahmad , ", "Saliq Saifi"],
    rollNo: ["15BCS0025 , ", "15BCS0027"],
    supervisor: "Mr. Musheer Ahmad",
    title: "Generation of S-Box using NSGA - II",
  },
  {
    name: ["S.M. Mehdi Rizvi , ", "Tamsil Amani , ", "Aman Hamid"],
    rollNo: ["15BCS0029 , ", "15BCS0031 , ", "15BCS0034"],
    supervisor: "Mr. M. Zeeshan Ansari",
    title: "Language detection in a Hindi and English code mixed text",
  },
  {
    name: ["Mohd. Tarik , ", "Md. Sohail"],
    rollNo: ["15BCS0036 , ", "15BCS0059"],
    supervisor: "Mr. Shahzad Alam",
    title: "Scene classification using CNN",
  },
  {
    name: ["Rizwan Saifi"],
    rollNo: ["15BCS00"],
    supervisor: "Mr. Faiyaz Ahmad",
    title: "Vehicle detection and tracking using machine learning and HOG",
  },
  {
    name: ["Mohammad Muzammil , ", "Nadi Habib Ur Rahman"],
    rollNo: ["15BCS0058 , ", "15BCS0061"],
    supervisor: "Mr. Faiyaz Ahmad",
    title: "Topic modeling & summarization of Text documents",
  },
  {
    name: ["Dhawal Mehta , ", "Utkarsh Garg"],
    rollNo: ["15BCS0053 , ", "15BCS0066"],
    supervisor: "Mr. Hannan Mansoor",
    title: "Recommendation system for Books",
  },
  {
    name: ["Himanshu Mehra , ", "Karan Pratap Singh , ", "Mohd. Bilal Aziz"],
    rollNo: ["15BCS0020 , ", "15BCS0021 , ", "15BCS0024"],
    supervisor: "Mr. Waseem Ahmad",
    title: "Analysis of Political sentiments on Twitter using Deep learning",
  },
  {
    name: ["Aiyan Hamid , ", "Danish Iqbal , ", "Zeeshan Ahmad Khan"],
    rollNo: ["15BCS0005 , ", "15BCS0009 , ", "15BCS0017"],
    supervisor: "Mr. Musheer Ahmad",
    title: "Video frame interpolation using generative adversarial networks",
  },
  {
    name: ["Sadia Shafaque , ", "Kaynat Hasan"],
    rollNo: ["15BCS0026 , ", "15BCS0041"],
    supervisor: "Mr. Jawahar Lal",
    title: "Human activity recognition using machine learning algorithms",
  },
  {
    name: ["Farhan Ul Haque , ", "Himanshu Rathore"],
    rollNo: ["15BCS0022 , ", "15BCS0054"],
    supervisor: "Mr. M. Zeeshan Ansari",
    title: "Content based Indian NER from Wikipedia",
  },
  {
    name: ["Sharik Khan , ", "Osama Khan , ", "Prabhat Kumar More"],
    rollNo: ["15BCS0065 , ", "15BCS0071 , ", "15BCS0072"],
    supervisor: "Mr. Shamim Ahmad",
    title: "Movie recommendation system",
  },
  {
    name: ["Adeel Masood , ", "Palak Khandelwal , ", "Shazia Khan"],
    rollNo: ["15BCS0018 , ", "15BCS0037 , ", "15BCS0074"],
    supervisor: "Mr. M. Zeeshan Ansari",
    title: "Drug aspect sentiment analysis",
  },
  {
    name: ["Abhay Charan , ", "Ankit Kumar , ", "Shafa at Hussain"],
    rollNo: ["15BCS0001 , ", "15BCS0006 , ", "15BCS0050"],
    supervisor: "Dr. Bashir Alam",
    title: "Bird species classification from audio",
  },
  {
    name: ["Ariba Siddiqui , ", "Adhitesh Chauhan , ", "Mohd. Intekhab"],
    rollNo: ["15BCS0007 , ", "15BCS0033 , ", "15BCS0060"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Gendered pronoun resolution in natural language text",
  },
  {
    name: ["Shivank Tripathi , ", "Md. Nafis Khan"],
    rollNo: ["15BCS0040 , ", "15BCS0070"],
    supervisor: "Mr. Musheer Ahmad",
    title: "A travel guide platform using machine learning techniques",
  },
  {
    name: ["Shaz Akhtar"],
    rollNo: ["15BCS0039"],
    supervisor: "Dr. Mohd. Amjad",
    title:
      "Personalized medicine: Predict the effect of Genetic variants to enable personalized medicine",
  },
  {
    name: ["Ojaswini Bhudiraja , ", "Fatima Mariyam , ", "Syed Safder Ali"],
    rollNo: ["15BCS0013 , ", "15BCS0019 , ", "15BCS0030"],
    supervisor: "Mr. Danish R. Rizvi",
    title: "Smart home surveillance",
  },
  {
    name: ["Adnan Akhtar , ", "Ayesha Athar , ", "Sanchit Mishra"],
    rollNo: ["15BCS0004 , ", "15BCS0008 , ", "15BCS0015"],
    supervisor: "Mr. Danish R. Rizvi",
    title: "Hand Gesture recognition system using Neural Net",
  },
  {
    name: ["Mehtab Alam , ", "Shubham Kumar , ", "Ahrarul Haque"],
    rollNo: ["15BCS0042 , ", "15BCS0051 , ", "15BCS0077"],
    supervisor: "Mr. Mumtaz Ahmad",
    title: "General Purpose audio Tagging",
  },
  {
    name: ["Md. Musharraf , ", "Md. Hamid , ", "Rashid Aziz"],
    rollNo: ["15BCS0044 , ", "15BCS0045 , ", "15BCS0047"],
    supervisor: "Dr. Mohd. Amjad",
    title: "Artificial Intelligence in Gaming",
  },
  {
    name: ["Mukul Kumar , ", "Vasu Kharab"],
    rollNo: ["15BCS0046 , ", "15BCS0080"],
    supervisor: "Mr. Jawahar Lal",
    title:
      "An English text to speech (TTS) conversion system integrated with chat Bot",
  },
  {
    name: ["Samreen , ", "Yashfeen"],
    rollNo: ["15BCS0028 , ", "15BCS0081"],
    supervisor: "Mr. Waseem Ahmad",
    title:
      "Heart beat classification using temporal and morphological information of ECGs",
  },
  {
    name: ["Aditya Raj Singh , ", "Shadma Salman , ", "Imran Khan"],
    rollNo: ["15BCS0003 , ", "15BCS0016 , ", "15BCS0078"],
    supervisor: "Mr. Danish R. Rizvi",
    title: "Upvote prediction using categorical embedding",
  },
  {
    name: ["Mohammad Irshad , ", "Saurabh Arora , ", "Shadab Ahmed"],
    rollNo: ["15BCS0043 , ", "15BCS0048 , ", "15BCS0049"],
    supervisor: "Mr. Jawahar Lal",
    title: "Image De-raining using deconvolution network",
  },
  {
    name: ["Abhinav Kumar , ", "Amish Gupta"],
    rollNo: ["15BCS0002 , ", "15BCS0069"],
    supervisor: "Mr. Shamim Ahmad",
    title: "Automatic stance detection",
  },
  {
    name: ["Afsheen Azad"],
    rollNo: ["15BCS0068"],
    supervisor: "Mr. Hannan Mansoor",
    title: "Practical portfolio assessment using soft computing techniques",
  },
  {
    name: ["Ishita Tripathi"],
    rollNo: ["15BCS0010"],
    supervisor: "Prof. Tanvir Ahmad",
    title: "Automated essay grading using neural networks",
  },
  {
    name: ["Kritika Gupta , ", "Nabeel Javed"],
    rollNo: ["15BCS0011 , ", "15BCS0012"],
    supervisor: "Mr. Sarfaraz Masood",
    title:
      "Comparison of various machine learning models for driver drowsiness detection",
  },
  {
    name: ["Rishabh Gupta , ", "Sahil Malik , ", "Shivanshu Chaudhary"],
    rollNo: ["15BCS00 , ", "15BCS00 , ", "15BCS00"],
    supervisor: "Mr. Shahzad Alam",
    title: "Augmented reality based personalized advertisements",
  },
  {
    name: ["Parth Dhama , ", "Sanchit Ahuja , ", "Mayank PArmar"],
    rollNo: ["15BCS00 , ", "15BCS00 , ", "15BCS00"],
    supervisor: "Dr. Bashir Alam",
    title: "Human tracking and facial recognition",
  },
  {
    name: ["Md. Nadeemuddin"],
    rollNo: ["15BCS0035"],
    supervisor: "Mr. Jawahar Lal",
    title: "Stock price prediction using machine learning algorithms",
  },
];
const MA16 = [];
const MA17 = [];
const MA18 = [];
const MA19 = [];
const MA20 = [];

// ******************************MINOR PROJECTS********************************
const MI11 = [];
const MI12 = [];
const MI13 = [];
const MI14 = [];
const MI15 = [];
const MI16 = [];
const MI17 = [];
const MI18 = [];
const MI19 = [];
const MI20 = [];
// ******************************OPTIONS********************************
const opt = [
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
  {
    id: 1,
    value: "2014-2018",
  },
  {
    id: 1,
    value: "2013-2017",
  },
  {
    id: 1,
    value: "2012-2016",
  },
  {
    id: 1,
    value: "2011-2015",
  },
];
// ******************************PROJECT DATA********************************
const major = [MA20,MA19, MA18, MA17, MA16, MA15, MA14, MA13, MA12, MA11];
const minor = [MI20, MI19, MI18, MI17, MI16, MI15,MI14, MI13, MI12, MI11];
const ProjectData = [image, minor, major, opt];
export default ProjectData;
