import React, { useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { educations, certificate} from '../constants';
import { SectionWrapper } from '../hoc';
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
        <p className={styles.sectionSubText}>Learning Outside School</p>
      </motion.div>

      <div className="mt-10">
          <CertificateCard certificates={certificate} />
      </div>
    </>
  );
};

export default SectionWrapper(Education, 'education');
