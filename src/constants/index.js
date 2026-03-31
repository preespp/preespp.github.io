import {
  bu,
  ba,
  pds,
  tu,
  backend,
  networking,
  javascript,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  robot,
  embed,
  c,
  cplusplus,
  matlab,
  numpy,
  opencv,
  python,
  pytorch,
  ros,
  sql,
  bot,
  bueng,
  inventory,
  gofr,
  mrc,
  fpga,
  alice,
  pttep,
  ncrc,
  ibm,
  penguin,
  soft,
  hard,
  mech,
  stem,
  agile,
  docker2,
  ds,
  superai,
  syseng,
  jj,
  invest,
  aws,
  startup,
  tbp,
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
    title: 'Software',
    icon: backend,
  },
  {
    title: 'Firmware',
    icon: embed,
  },
  {
    title: 'Robotics & AI',
    icon: robot,
  },
  {
    title: 'Integration',
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
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'SQL',
    icon: sql,
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
    lists: ['Embedded Systems', 'Smart and Connected Systems', 'Control Systems', 'Computer Organization', 'Logic Design', 'Electric Circuits',],
    bg: hard,
  },
  {
    type: 'Software',
    lists: ['Operating Systems', 'Cloud Computing', 'Machine Learning', 'Computer Networking', 'Software Engineering', 'Applied Algorithms for Engineers', 'Computer Programming for Engineers', 'Python for Engineer & Data Science',],
    bg: soft,
  },
  {
    type: 'Mechanical',
    lists: ['Robotics',  'Mechanics I (Static)', 'Mechanics II (Dynamics+Kinematics)', 'Energy & Thermodynamics', 'Supply Chain Engineering', 'Engineering Design', 'Engineering Hands-on', ],
    bg: mech,
  },
  {
    type: 'STEM',
    lists: ['Probability, Statistics & Data Science', 'Differential Equations', 'Multivariate Calculus', 'Discrete Mathematics for Engineers', 'Computational Linear Algebra', 'Physics II', 'Macroeconomics', 'Microeconomics',],
    bg: stem,
  },
];

const certificate = [
  {
    name: 'UPenn: Entrepreneurship 2, Aug 2025',
    photo: startup
  },
  {
    name: 'UIUC: Investment and Building Wealth, Jul 2025',
    photo: invest
  },
  {
    name: 'AWS: Software Development Practices, Jul 2025',
    photo: aws
  },
  {
    name: 'Johnson & Johnson MedTech: Robotics & Controls, Jul 2025',
    photo: jj
  },
  {
    name: 'Google Cloud: Docker, May 2025',
    photo: docker2
  },
  {
    name: 'Google: Agile Project Management, May 2025',
    photo: agile
  },
  {
    name: 'Mathworks: System Engineering, Jan 2025',
    photo: syseng
  },
  {
    name: 'Tau Beta Pi: Engineering Honor Society, Nov 2024',
    photo: tbp
  },
  {
    name: 'Artificial Intelligence Association of Thailand: Artificial Intelligence Examination, Feb 2024',
    photo: superai
  },
  {
    name: 'IBM: Data Science Professional Certificate, Aug 2023',
    photo: ds
  },
];

const experiences = [
  {
    title: 'Teaching Assistant',
    company_name: 'BU College of Engineering',
    icon: bueng,
    iconBg: '#333333',
    date: 'Jan 2026 - May 2026',
    details: ['ENG EC 444 Smart and Connected Systems; Professor Eshed Ohn-Bar (Spring 2026)',
      'Assisted and provide support to students during lectures and labs with embedded and smart connected systems, including microcontrollers, real-time OS concepts, IoT fundamentals, low-level firmware and hardware integration issues (e.g., ESP-IDF, sensor interfacing, I²C/SPI/UART).'
    ],
  },
  {
    title: 'Researcher',
    company_name: 'Multimedia Communication Laboratory',
    icon: bueng,
    iconBg: '#333333',
    date: 'Oct 2025 - Jan 2026',
    details: ['Multimedia Communication Lab, Professor Thomas Little, UROP Fall 2025',
      'High accuracy vehicular positioning with Ultra-Wideband localization and LiDAR',
      'Research about the sensor fusion between Ultra-Wideband and LiDAR for indoor positioning using an Autonomous Vehicle as a testbed',
      'Developed a C++ script with ROS2 for control of an autonomous vehicle and sensor fusion in NVIDIA Jetson Nano'
    ],
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'PTT Exploration and Production Public Company Limited (PTTEP)',
    icon: pttep,
    iconBg: '#333333',
    date: 'May 2025 - Jul 2025',
    details: ['Developed a multi-agent AI system leveraging OCR, Google Gemini, and Vertex AI to automate complex shoreline documents reading, summarizing, splitting, and metadata generation for a centralized data center, potentially saving the cost of outsourcing human effort over $7M for 1.5M documents (78%)',
      'Built multiple frontend interfaces for user interaction with a Flask web application with a RESTful API, HTML/CSS/JavaScript',
      'Engineered a multithreaded task execution layer using ThreadPoolExecutor to parallelize tasks across CPU cores, optimizing system resources and tokens, and speeding up processing time by 82%',
      'Researched and implemented performance enhancements for LLMs, such as few-shot learning and prompt engineering, with a focus on Retrieval-Augmented Generation (RAG), leveraging FAISS and designing custom retrieval pipelines',
      'Developed a Robotic Process Automation using Python, SharePoint API, and Selenium to scrape, download, and upload documents from/to a secure server, reducing the complexity and time of workflow by 75%'],
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
  {
    title: 'Teaching Assistant',
    company_name: 'BU College of Engineering',
    icon: bueng,
    iconBg: '#333333',
    date: 'Jan 2024 - May 2024',
    details: [
      'ENG EK 131 Engineering: Hands-on; Professor Ousama A`amar, Professor Christine Mulvey, Professor Kenneth Sebesta',
      'Instructed over 400 students during lectures and office hours in CAD, Product Assembly, Product Design, 3D Printing, Circuit, Microcontroller Programming, Machining and Mechanical Drawing',
      'Hosted 3-hour weekly office hour to provide guidance students in weekly assignment, CAD, Product Design, 3D Printing, Microcontroller Programming, Machining and Mechanical Drawing, circuit wiring and final product assembly',
      'Provided technical support and troubleshooting expertise for 3D printers and Engineering tools in the workspace, contributing to a seamless learning experience in engineering disciplines',
    ],
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'GOFR: Grocery Operational Fulfillment Robot (SICK $10K Challenge 2025-26 Finalist)',
    description:
      'An autonomous grocery-assistance robot that combines AI, perception, and robotic manipulation to support store restocking and customer shopping. I contributed to the system architecture, ROS2-based autonomy, full-stack order workflows, and hardware-software integration across sensing and arm control.',
    image: gofr,
    repo: 'https://github.com/preespp/EC463_Team_21_Grocery_Robot',
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
    name: 'ALICE: AI Life Improvement & Care Expert (MakeMIT x Harvard 2026) ',
    description: 'A local-first AI smart pill dispenser designed to help people manage multiple medications safely at home. '+
    'ALICE combines face recognition, guided dispensing, and contextual health support in a more private and practical home-care device.'+
    'I was responsible for Backend API development, API research and Gemini API development along with low-level hardware integration with ESP32 and optimization for real-time performance.',
    image: alice,
    repo: 'https://github.com/preespp/MakeMIT_2026_Team7',
    demo: 'https://devpost.com/software/smart-ai-medical-home-device-something?_gl=1*ljrr9p*_gcl_au*MTgwMzIwMjMwMS4xNzcxNzE5NzY3*_ga*MTUwNzk4MzYzNS4xNzcxNzE5NzY3*_ga_0YHJK3Y10M*czE3NzQ5MjU5NDQkbzkkZzEkdDE3NzQ5MjU5NjAkajQ0JGwwJGgw',
  },
  {
    id: 'project-4',
    name: 'Robotics Arm Manipulation System (NCRC 2026 at Harvard University)',
    description: 'An open-source low-cost robotic manipulation platform that combines real-time object detection, multi-camera perception, and 6-DOF arm control. This work led to a paper accepted to the National Collegiate Research Conference (NCRC) 2026 at Harvard University.',
    image: ncrc,
    repo: 'https://github.com/preespp/augment-robot-arm-yolo-vla',
    demo: 'https://www.youtube.com/watch?v=-n9ZhXqO-Go',
  },
];

const projects2 = [
  {
    id: 'project-5',
    name: 'Desktop Application for small business retail',
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
    name: 'Extending Site Reliability Engineering Fault Mechanisms within ITBench',
    description: 'This project is under IBM Engineers Mentorship.'+
    'An open-source research project focused on making AI-agent benchmarking more realistic for site reliability engineering tasks. I helped extend ITBench with cloud-inspired fault scenarios for Kubernetes microservices using observability and infrastructure tools such as Docker, Prometheus, Jaeger, and OpenTelemetry.',
    image: ibm,
    repo: 'https://github.com/itbench-hub/ITBench-Scenarios',
    demo: 'https://github.com/EC528-Fall-2025/XFault-ITBench',
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
