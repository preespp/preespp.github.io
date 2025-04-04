import {
  bu,
  ba,
  pds,
  tu,
  backend,
  networking,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  robot,
  embed,
  bootstrap,
  c,
  cplusplus,
  electronjs,
  matlab,
  matplotlib,
  mongodb,
  mysql,
  numpy,
  opencv,
  python,
  pandas,
  pytorch,
  ros,
  scikit,
  bumrc,
  bot,
  bueng,
  atsa,
  inventory,
  room,
  mrc,
  fpga,
  robot_hack,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'education',
    title: 'Education',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Software Development',
    icon: backend,
  },
  {
    title: 'Hardware Development',
    icon: embed,
  },
  {
    title: 'Robotics & AI',
    icon: robot,
  },
  {
    title: 'Computer Networking',
    icon: networking,
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'C++',
    icon: cplusplus,
  },
  {
    name: 'C',
    icon: c,
  },
  {
    name: 'MATLAB',
    icon: matlab,
  },
  {
    name: 'ROS',
    icon: ros,
  },
  // {
  //   name: 'HTML 5',
  //   icon: html,
  // },
  // {
  //   name: 'CSS 3',
  //   icon: css,
  // },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  // {
  //   name: 'TypeScript',
  //   icon: typescript,
  // },
  {
    name: 'React JS',
    icon: reactjs,
  },
  // {
  //   name: 'Bootstrap',
  //   icon: bootstrap,
  // },
  // {
  //   name: 'Tailwind CSS',
  //   icon: tailwind,
  // },
  {
    name: 'Electron JS',
    icon: electronjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Pytorch',
    icon: pytorch,
  },
  // {
  //   name: 'Pandas',
  //   icon: pandas,
  // },
  {
    name: 'Numpy',
    icon: numpy,
  },
  // {
  //   name: 'Matplotlib',
  //   icon: matplotlib,
  // },
  // {
  //   name: 'Scikit-learn',
  //   icon: scikit,
  // },
  {
    name: 'Opencv',
    icon: opencv,
  },
  // {
  //   name: 'Mysql',
  //   icon: mysql,
  // },
  // {
  //   name: 'MongoDB',
  //   icon: mongodb,
  // },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const educations = [
  {
    school: 'Boston University',
    gpa: '3.96/4.00',
    degree: 'BS Computer Engineering minor in Mechanical Engineering concentration in Robotics',
    details: ['Tau Beta Pi: Engineering Honor Society','Dean`s List Every Semester',
    'Hardware Courseworks: Embedded Systems, Smart and Connected Systems, Computer Organization, Logic Design, Electric Circuits',
    'Software Courseworks: Machine Learning, Software Engineering, Applied Algorithms for Engineers, Computer Networking',
    'Mechanical Courseworks: Robotics,  Mechanics I & II (Static+Dynamics), Supply Chain Engineering, Engineering Design, Engineering Hands-on',
    'Mathematics Courseworks: Probability Statistics & Data Science for Engineer, Computational Linear Algebra, Differential Equations, Multivariate Calculus, Discrete Mathematics for Engineering'],
    icon: bu,
    iconBg: '#333333',
    date: 'Sep 2022 - May 2026',
  },
  {
    school: 'Brewster Academy',
    gpa: '4.233/4.330',
    degree: 'Postgraduate Year',
    details: ['King`s scholarship from Royal Thai Government to pursue Bahcelor`s degree aboard',
    'Graduated with 2 Magna Cum Laude and 1 Summa Cum Laude Academic Honor Awards'],
    icon: ba,
    iconBg: '#333333',
    date: 'Sep 2021 - May 2022',
  },
  {
    school: 'Triam Udom Suksa School',
    gpa: '3.95/4.00',
    degree: 'High School Gifted Math Students Program',
    //details: '-',
    icon: tu,
    iconBg: '#333333',
    date: 'May 2018 - Mar 2021',
  },
  {
    school: 'Patumwan Demonstration School, Srinakharinwirot University',
    gpa: '3.99/4.00',
    degree: 'Middle School Gifted Math Students',
    //details: '-',
    icon: pds,
    iconBg: '#333333',
    date: 'May 2015 - Mar 2018',
  },
];

const experiences = [
  {
    title: 'Robotics Software Engineer & Electrical Engineer (Deputy Lead)',
    company_name: 'BU Mars Rover Club, Boston MA',
    icon: bumrc,
    iconBg: '#333333',
    date: 'Sep 2023 - Present',
    details: ['Rapid Prototyped components in Onshape, improving Casing surface protection capabilities by 60% with a new design',
    'Conducted assembly and testing of Robotics Arm for the Equipment Servicing Missions with a 7-member team weekly',
    'Researched on Dynamixel Servo Motor and Implemented controller encoder (Servo Controls) with NVIDIA Jetson',
    'Configured GPS module and wrote script for ROS2 Node to connect with other parts in Embedded Systems',
    'Wired circuits for the Power Regulation system of the Mars Rover',
    'Acquired proficiency in Software for PCB Design, leveraging tools to enhance design efficiency and accuracy',
    'Conducted rigorous Electrical Load Tests to validate circuit performance and compliance with mission requirements']
  },
  {
    title: 'Robotics Researcher',
    company_name: 'Dependable Computing Laboratory, Boston MA',
    icon: bueng,
    iconBg: '#333333',
    date: 'Mar 2024 - Dec 2024',
    details: ['Dependable Computing Laboratory, Professor Wenchao Li',
    'Implemented Python scripts with ROS Noetic for autonomous control with a Robotics Arm, focusing on enhancing autonomous decision-making and operational efficiency and troubleshooting hardware gripper',
    'Co-Research Projects with Control and Optimization of Discrete Event Systems Laboratory, Professor Christos Cassandras',
    'Developed and optimized Python code with ROS Melodic in Linux for control and feedback algorithms with PhD candidates to advance multi-agent Safe and Connected Autonomous Vehicles for Smart Cities research',
    'Hardware-in-the-loop Simulation for multi-agent self-driving vehicles in CARLA [Funded by Undergraduate Research Opportunity Program (UROP)]',
    'Performed Hardware Testing for Control Systems and Real-time Coordination between multiple robots with Optitrack Motion Capture in Python and ROS to ensure safe travel of all vehicles in an intersection and merging map',
    'Unit Tested algorithms that update the Priority Queue of different zones of the map',
    'Researched on LIDAR camera to visualize data on Matplotlib and prepare data collection for Deep Learning model training in the future'],
  },
  {
    title: 'Engineer Intern',
    company_name: 'Bank of Thailand (Note Printing Works), Thailand',
    icon: bot,
    iconBg: '#333333',
    date: 'May 2024 - Jul 2024',
    details: ['Engineered a Computer Vision solution, training Deep Learning (ResNet101) and Machine Learning (Multi-class classification) for defect classification in OpenCV, Scikit-learn, Pytorch, and Python, increasing model accuracy from 68.23% to 85.67%, particularly improving one of the defect-type accuracy from 5.3% to 84.45%',
    'Systematized Python to implement model with bash scripting decreasing waiting time for defect reports from 5 days to 1 hour',
    'Researched process engineering and AGV, applying Lean Manufacturing for new Industrial Plant Planning, and optimizing the production storage with a 200% increase, designing the Robot Path Planning that will increase product transfer by 33.28%',
    'Assisting Senior Engineer in process flows and training sessions for new machinery, bridging language barriers between German instructors from the vendor and Thai technicians'],
  },
  {
    title: 'Technology Committee (Volunteer)',
    company_name: 'Association of Thai Students in the United States of America (ATSA), Remote',
    icon: atsa,
    iconBg: '#333333',
    date: 'Sep 2023 - Present',
    details: ['Maintained ATSA`s information technology infrastructure: domains, web servers, and email services',
    'Developed ATSA website and keeping updating information',
    'Proposed new technology initiatives for ATSA',
    'Performed data cleansing of a mailing list from attendees` data in each event in the span of 2 years leading to more organized and classified data over 4 regions of over a thousand mailing lists',
    'Connected and Reached out to 500+ LinkedIn members in searching for potential mentors from Tech, Business, Art, Pre-Med, and STEM fields for the upcoming mentorship program'],
  },
  {
    title: 'Teaching Assistant',
    company_name: 'BU College of Engineering, Boston MA',
    icon: bueng,
    iconBg: '#333333',
    date: 'Jan 2024 - Dec 2024',
    details: ['ENG EK 131 Engineering: Hands-on; Professor Ousama A`amar, Professor Christine Mulvey, Professor Kenneth Sebesta',
    'Guided and instructed over 400 students during lectures and office hours in CAD, Product Assembly, Product Design, 3D Printing, Circuit, Microcontroller Programming, Machining and Mechanical Drawing',
    'Hosted 3-hour weekly office hour to provide guidance students in weekly assignment, CAD, Product Design, 3D Printing, Microcontroller Programming, Machining and Mechanical Drawing, circuit wiring and final product assembly',
    'Provided technical support and troubleshooting expertise for 3D printers and Engineering tools in the workspace, contributing to a seamless learning experience in engineering disciplines',
    'ENG EK 301: Engineering Mechanics; Professor Scott Bunch',
    'Graded weekly assignments and quizzes on Mechanics Statics ranging from Vectors, Truss Analysis, Distributed Forces, Static Equilibrium, Frames, Shear/Bending, and Virtual Work',
    'Provided feedback and detailed explanations to students to improve their performance'],
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Inventory Application',
    description: 'An inventory management tool (Desktop Application) aimed to assist small retail businesses powered by Nodejs, Electronjs, Python, HTML/CSS, JavaScript, Mongodb',
    tags: [
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'electronjs',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'orange-text-gradient',
      },
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'yellow-text-gradient',
      },
    ],
    image: inventory,
    repo: 'https://github.com/preespp/Inventory_Optimizer',
    demo: 'https://www.youtube.com/watch?v=NPsZ9VrNPgQ',
  },
  {
    id: 'project-2',
    name: 'Room Occupancy Monitor',
    description:
      'A device to monitor number of people and actutate mechanical system to prevent more people from entering and exceeding the occupancy, '+
      'using Engineering Design principle to provide innovative solutions involving housing design and firmware developement with IoT.',
    tags: [
      {
        name: 'firmware',
        color: 'black-text-gradient',
      },
      {
        name: 'c++',
        color: 'blue-text-gradient',
      },
      {
        name: 'electrical',
        color: 'yellow-text-gradient',
      },
    ],
    image: room,
    repo: 'https://github.com/preespp/Room-Occupancy-Monitor',
    demo: 'https://docs.google.com/presentation/d/17KSI3MvRzxACOuaH1sUANS8LFsj9wH_Ykx2ariXAGmU/edit?usp=drive_link',
  },
  {
    id: 'project-3',
    name: 'Mar Rovers',
    description: 'Under BU Mars Rover Club, we built to rover to University Rover Challenge in Utah,'+
    'I am in Software, Robotics, and Electrical subteam developing firmware with NVIDIA Jetson for GPS and Dynamixel motors for Robotics Arm'+
    'And, this year, I am Electrical Deputy Lead.',
    tags: [
    ],
    image: mrc,
    repo: 'https://github.com/BUMRC',
    demo: 'https://www.youtube.com/watch?v=yFyZpHNn1oE&t=18s',
  },
  {
    id: 'project-4',
    name: 'Coin Collector Robot',
    description: '1-week BU Hardware Robotics Hackathon, challenge to build robot with mechanism to collect thin small magnetic coins and compete to score in the limited time; awarded 1st place with one round of sweep the arena',
    tags: [
    ],
    image: robot_hack,
    repo: '',
    demo: 'https://drive.google.com/file/d/1wlkO68M9oYhH6aIRdplqJJEwUHvWy3Ty/view?usp=drive_link',
  },
  {
    id: 'project-5',
    name: 'Whack-a-Mole FPGA',
    description: `Game Development on FPGA firmware development with Verilog HDL, integrating timer and external tools such as VGA, keyboard and mouse on Digital Logic Design concepts`,
    tags: [
    ],
    image: fpga,
    repo: 'https://github.com/preespp/EC311-Logic-Design-Final-Project',
    demo: 'https://youtu.be/xJwtOaYMmew?si=ZioFx-ER5Zgv4R0E',
  },
];

export { services, technologies, experiences, educations, projects };
