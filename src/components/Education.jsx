import React, { useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { educations, courseworks, certificate} from '../constants';
import { SectionWrapper } from '../hoc';
import { download, downloadHover } from '../assets';
import { textVariant } from '../utils/motion';

const EducationCard = ({ education }) => {
  const [detailsVisible, setDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setDetailsVisible(!detailsVisible);
  };

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#eaeaec',
        color: '#292929',
        boxShadow:
          'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      }}
      contentArrowStyle={{
        borderRight: '7px solid  #232631',
      }}
      date={
        <div>
          <h3 className="text-dim text-[18px] font-bold font-beckman">
            {education.date}
          </h3>
        </div>
      }
      iconStyle={{ background: education.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={education.icon}
            alt={education.school}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
          {education.school}
        </h3>
        <p
          className="text-taupe text-[22px] font-semibold font-beckman tracking-[1px]"
          style={{ margin: 0 }}
        >
          GPA: {education.gpa}
        </p>
        <p
          className="text-taupe text-[22px] font-semibold font-overcameBold tracking-[1px]"
          style={{ margin: 0 }}
        >
          {education.degree}
        </p>

        <p
          style={{ margin: 0 }}
        >
        {Array.isArray(education.details) && (
          <ul className="text-[12px] rounded-[3px] p-2 list-disc">
            {education.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const CourseworksCard = ({ coursework }) => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev === coursework.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? coursework.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] flex items-center justify-center overflow-hidden">
      <button
        onClick={prev}
        className="absolute left-0 z-10 bg-white text-gray-800 border border-gray-300 rounded-full p-3 shadow hover:scale-110 transition"
      >
        ‹
      </button>
      <div className="relative w-full h-full flex items-center justify-center">
        {coursework.map((course, i) => {
          const offset = i - index;
          const isActive = i === index;

          return (
            <motion.div
              key={i}
              className="bg-white bg-opacity-30 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm absolute w-[300px] h-[350px] bg-blue-100 rounded-xl shadow-xl p-6"
              style={{
                backgroundImage: `url(${course.bg})`,
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                zIndex: coursework.length - Math.abs(offset),
                scale: isActive ? 1 : 0.9,
              }}
              animate={{
                opacity: Math.abs(offset) > 3 ? 0 : 1,
                x: offset * 90,
                scale: isActive ? 1 : 0.95,
                zIndex: coursework.length - Math.abs(offset),
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="bg-white bg-opacity-90 p-4 h-full flex flex-col justify-center">
                <h3 className="text-lg text-gray-800 font-bold text-center mb-2">{course.type}</h3>
                <ul className="text-sm text-gray-700 list-disc list-inside">
                  {course.lists.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <a className="text-sm text-gray-700 list-disc list-inside" href="http://www.freepik.com">*Background Designed by Freepik</a>
              </div>
            </motion.div>
          );
        })}
      </div>
      <button
        onClick={next}
        className="absolute right-0 z-10 bg-white text-gray-800 border border-gray-300 rounded-full p-3 shadow hover:scale-110 transition"
      >
        ›
      </button>
    </div>
  );
};

const CertificateCard = ({ certificates }) => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-xl mx-auto p-4 group">
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center relative overflow-hidden"
      >
        <img
          src={certificates[index].photo}
          alt={certificates[index].name}
          className="w-full h-auto object-contain mb-4 rounded-md"
        />
  
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h1 className="text-white text-lg font-semibold text-center px-4">
            {certificates[index].name}
          </h1>
        </div>
  
        <div className="text-center mt-2 text-sm text-gray-500">
          {index + 1} / {certificates.length}
        </div>
      </motion.div>
  
      <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
        <button onClick={prev} className="text-2xl px-3 text-gray-700 hover:text-black">‹</button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
        <button onClick={next} className="text-2xl px-3 text-gray-700 hover:text-black">›</button>
      </div>
    </div>
  );
  
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Academic Journey</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {educations.map((experience, index) => (
            <EducationCard key={index} education={experience} />
          ))}
        </VerticalTimeline>
      </div>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Coursework</p>
      </motion.div>

      <div className="mt-10">
        <CourseworksCard coursework={courseworks} />
      </div>
      
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Learning Outside School</p>
      </motion.div>

      <div className="mt-10">
          <CertificateCard certificates={certificate} />
      </div>
    </>
  );
};

export default SectionWrapper(Education, 'education');
