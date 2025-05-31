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
  pttep,
  hface,
  mips,
  penguin
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
    title: 'Firmware Development',
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
  {
    name: 'React JS',
    icon: reactjs,
  },
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
    gpa: '3.97/4.00',
    degree: 'BS Computer Engineering Minor in Mechanical Engineering Concentration in Robotics',
    details: ['Tau Beta Pi: Engineering Honor Society',
    'Dean`s List Every Semester',
    '1st place Robotics Hackathon 2025',
    '3rd place Hardware Hackathon 2023',
    ],
    icon: bu,
    iconBg: '#333333',
    date: 'Sep 2022 - May 2026',
  },
  {
    school: 'Brewster Academy',
    gpa: '4.233/4.330',
    degree: 'Postgraduate Year',
    details: ['Magna Cum Laude (Fall + Winter) and Summa Cum Laude (Spring)',
    'AP Scholar Award',
    'AMC 12A 118.5 Earned Honor Roll',
    ],
    icon: ba,
    iconBg: '#333333',
    date: 'Sep 2021 - May 2022',
  },
  {
    school: 'Triam Udom Suksa School',
    gpa: '3.95/4.00',
    degree: 'High School Gifted Math Students Program',
    details: ['King`s scholarship from Royal Thai Government to pursue Bahcelor`s degree aboard',
    'High Distinction in Australian National Chemistry Quiz (ANCQ)',
    'Silver Medal Thailand Mathematics Olympiad',
    ],
    icon: tu,
    iconBg: '#333333',
    date: 'May 2018 - Mar 2021',
  },
  {
    school: 'Patumwan Demonstration School, Srinakharinwirot University',
    gpa: '3.99/4.00',
    degree: 'Middle School Gifted Math Students Program',
    details: ['Silver Medal International Mathematics Competition at Bulgaria as Thailand representative',
    'Certificate for youth who bring fame to the nation in Academics',
    'Distinction in Australian Mathematics Competition (AMC)',
    ],
    icon: pds,
    iconBg: '#333333',
    date: 'May 2015 - Mar 2018',
  },
];

const courseworks = [
  {
    type: 'Hardware',
    lists: ['Embedded Systems', 'Smart and Connected Systems', 'Computer Organization', 'Logic Design', 'Electric Circuits'],
  },
  {
    type: 'Software',
    lists: ['Operating Systems', 'Cloud Computing', 'Machine Learning', 'Computer Networking','Software Engineering', 'Applied Algorithms for Engineers'],
  },
  {
    type: 'Mechanical',
    lists: ['Robotics',  'Mechanics I (Static)', 'Mechanics II (Dynamics+Kinematics)', 'Supply Chain Engineering', 'Engineering Design', 'Engineering Hands-on'],
  },
];

const certificate = [
  {
    name: '',
    photo: ''
  },
];

const experiences = [
  {
    title: 'Software Engineer Intern',
    company_name: 'PTT Exploration and Production Public Company Limited (PTTEP)',
    icon: pttep,
    iconBg: '#333333',
    date: 'May 2025 - Jul 2025',
    details: ['incoming',],
  },
  {
    title: 'Robotics Researcher',
    company_name: 'Dependable Computing Laboratory',
    icon: bueng,
    iconBg: '#333333',
    date: 'Mar 2024 - Dec 2024',
    details: ['Dependable Computing Laboratory, Professor Wenchao Li',
    'Implemented Python scripts with ROS for autonomous control with a Robotics Arm and troubleshooting hardware gripper',
    'Developed and optimized Python code with ROS in Linux for control and feedback algorithms with PhD candidates to advance multi-agent Safe and Connected Autonomous Vehicles for Smart Cities with 5 researchers',
    'Hardware-in-the-loop Simulation for multi-agent self-driving vehicles in CARLA [Funded by Undergraduate Research Opportunity Program (UROP)] Co-Research Projects with CODES Laboratory, Professor Christos Cassandras',
    'Performed Hardware Testing for Control Systems and Real-time Coordination between multiple robots with Optitrack Motion Capture in Python and ROS to ensure safe travel of all vehicles in an intersection and merging map',
    'Unit Tested algorithms that update the Priority Queue of different zones of the map',
    'Researched on LIDAR camera to visualize data on Matplotlib and prepare data collection for Deep Learning model training'],
  },
  {
    title: 'Teaching Assistant',
    company_name: 'BU College of Engineering',
    icon: bueng,
    iconBg: '#333333',
    date: 'Jan 2024 - Dec 2024',
    details: ['ENG EK 131 Engineering: Hands-on; Professor Ousama A`amar, Professor Christine Mulvey, Professor Kenneth Sebesta',
    'Instructed over 400 students during lectures and office hours in CAD, Product Assembly, Product Design, 3D Printing, Circuit, Microcontroller Programming, Machining and Mechanical Drawing',
    'Hosted 3-hour weekly office hour to provide guidance students in weekly assignment, CAD, Product Design, 3D Printing, Microcontroller Programming, Machining and Mechanical Drawing, circuit wiring and final product assembly',
    'Provided technical support and troubleshooting expertise for 3D printers and Engineering tools in the workspace, contributing to a seamless learning experience in engineering disciplines',
    'ENG EK 301: Engineering Mechanics; Professor Scott Bunch',
    'Graded weekly assignments and quizzes on Mechanics Statics ranging from Vectors, Truss Analysis, Distributed Forces, Static Equilibrium, Frames, Shear/Bending, and Virtual Work'],
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'Bank of Thailand Note Printing Works',
    icon: bot,
    iconBg: '#333333',
    date: 'May 2024 - Jul 2024',
    details: ['Engineered a Computer Vision solution, training Deep Learning (ResNet101) and Machine Learning (Multi-class classification) for defect classification in OpenCV, Scikit-learn, Pytorch, and Python, increasing model accuracy from 68.23% to 85.67%, particularly improving one of the defect-type accuracy from 5.3% to 84.45%',
    'Systematized Python with Shell Script to implement AI via cronjobs, improving defect-report wait time from 5 days to 1 hour',
    'Researched process engineering and AGV, applying Lean Manufacturing for new Industrial Plant Planning, and optimizing the production storage with a 200% increase, designing the Robot Path Planning that will increase product transfer by 33.28%',
    'Assisting Senior Engineer in process flows and training sessions for new machinery, bridging language barriers between German instructors from the vendor and Thai technicians'],
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Room Occupancy Monitor',
    description:
      'A device to monitor number of people and actutate mechanical system to prevent more people from entering and exceeding the occupancy, '+
      'using Engineering Design principle to provide innovative solutions involving housing design and firmware developement with IoT',
    image: room,
    repo: 'https://github.com/preespp/Room-Occupancy-Monitor',
    demo: 'https://docs.google.com/presentation/d/17KSI3MvRzxACOuaH1sUANS8LFsj9wH_Ykx2ariXAGmU/edit?usp=drive_link',
  },
  {
    id: 'project-2',
    name: 'Mar Rovers',
    description: 'Under BU Mars Rover Club, we built to rover to University Rover Challenge in Utah, '+
    'I am in Software, Robotics, and Electrical subteam developing firmware with NVIDIA Jetson for GPS and Dynamixel motors for Robotics Arm'+
    'And, I was Electrical Lead during Jan - May 2025',
    image: mrc,
    repo: 'https://github.com/BUMRC',
    demo: 'https://www.youtube.com/watch?v=yFyZpHNn1oE&t=18s',
  },
  {
    id: 'project-3',
    name: 'Coin Collector Robot',
    description: '1-week BU Hardware Robotics Hackathon, challenge to build robot with mechanism to collect thin small magnetic coins and compete to score in the limited time; awarded 1st place with one round of sweep the arena',
    image: robot_hack,
    demo: 'https://drive.google.com/file/d/1wlkO68M9oYhH6aIRdplqJJEwUHvWy3Ty/view?usp=drive_link',
  },
  {
    id: 'project-4',
    name: 'Robotics Arm Manipulation System',
    description: `An open source for low-cost robotics manipulation system integrating real-time object detection (YOLOv8) with multi-camera visual input and LeRobot-controlled 6-DOF arms from HuggingFace`,
    image: hface,
    repo: 'https://github.com/preespp/augment-robot-arm-yolo-vla',
    demo: 'https://www.youtube.com/watch?v=-n9ZhXqO-Go',
  },
];

const projects2 = [
  {
    id: 'project-5',
    name: 'Desktop Application for business',
    description: 'An inventory management tool (Desktop Application) aimed to assist small retail businesses powered by Nodejs, Electronjs, Python, HTML/CSS, JavaScript, Mongodb',
    image: inventory,
    repo: 'https://github.com/preespp/Inventory_Optimizer',
    demo: 'https://www.youtube.com/watch?v=NPsZ9VrNPgQ',
  },
  {
    id: 'project-6',
    name: 'Embedded Systems Development',
    description:
      'A custom Linux distribution for the BeagleBone Black (ARMv7), including compiling the Linux kernel, configuring BusyBox, and emulating using QEMU'+
      ', and kernel-level traffic light control system ',
    image: penguin,
    repo: 'https://github.com/preespp/Embedded-Systems-Lab-HW',
    demo: 'https://drive.google.com/file/d/1kwGrEP8c6AS66bYDmtlPtbsgqo9t-cVz/view',
  },  
  {
    id: 'project-7',
    name: 'MIPS Pipeline Processor',
    description: 'A 5-stage pipelined CPU in HDL, incorporating hazard detection mechanisms to ensure smooth instruction flow and mitigate data hazards',
    image: mips,
    repo: 'https://github.com/preespp/Computer-Organization-Lab',
  },
  {
    id: 'project-8',
    name: 'Whack-a-Mole on FPGA',
    description: `Game Development on FPGA with Verilog HDL, integrating timer and external tools such as VGA, keyboard and mouse on Digital Logic Design concepts`,
    image: fpga,
    repo: 'https://github.com/preespp/EC311-Logic-Design-Final-Project',
    demo: 'https://youtu.be/xJwtOaYMmew?si=ZioFx-ER5Zgv4R0E',
  },

];

export { services, technologies, experiences, educations, projects, projects2, courseworks, certificate };
