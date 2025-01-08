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
  evoting,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'education',
    title: 'Education',
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
  {
    name: 'TypeScript',
    icon: typescript,
  },
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
  {
    name: 'Pandas',
    icon: pandas,
  },
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
    details: '•	Tau Beta Pi: Engineering Honor Society (top 12.5% of class); Dean`s List Every Semester; '+
'Embedded Systems, Smart and Connected Systems, '+
'Electric Circuits, Computer Organization, Logic Design, '+
'Software Engineering, Applied Algorithms for Engineers, Computer Networking, '+
'Robotics, Machine Learning, Mechanics I & II (Static+Dynamics), Supply Chain Engineering, '+
'Probability Statistics & Data Science for Engineer, Computational Linear Algebra, Differential Equations, Engineering Hands-on, Engineering Design, ',
    icon: bu,
    iconBg: '#333333',
    date: 'Sep 2022 - May 2026',
  },
  {
    school: 'Brewster Academy',
    gpa: '4.233/4.330',
    degree: 'Postgraduate Year',
    details: 'King`s scholarship from Royal Thai Government to pursue Bahcelor`s degree aboard graduated with 2 Magna Cum Laude and 1 Summa Cum Laude Academic Honor Awards',
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
    details: '',
  },
  {
    title: 'Robotics Researcher',
    company_name: 'Dependable Computing Laboratory, Boston MA',
    icon: bueng,
    iconBg: '#333333',
    date: 'Mar 2024 - Dec 2024',
    details: '',
  },
  {
    title: 'Engineer Intern',
    company_name: 'Bank of Thailand (Note Printing Works), Thailand',
    icon: bot,
    iconBg: '#333333',
    date: 'May 2024 - Jul 2024',
    details: '',
  },
  {
    title: 'Technology Committee (Volunteer)',
    company_name: 'Association of Thai Students in the United States of America (ATSA), Remote',
    icon: atsa,
    iconBg: '#333333',
    date: 'Sep 2023 - Present',
    details: '',
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
    demo: '',
  },
  {
    id: 'project-4',
    name: 'E-Voting',
    description: `Node.js-Based E-Voting System is a platform for secure and efficient voting, combining UDP-based vote submission with a real-time web interface for result visualization and administrative control.`+
    'The system is built on multiple ESP32 using real-time database to exchange information in distributed systems',
    tags: [
    ],
    image: evoting,
    repo: 'https://github.com/preespp/Team2-Simphliphan-Gan-Theogene-Jiang/tree/main/quest-4',
    demo: 'https://www.youtube.com/watch?v=MBqvb3oTLFw',
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
