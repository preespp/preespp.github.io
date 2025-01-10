import { useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { educations } from '../constants';
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
        <button
          className="flex justify-center items-center 
            text-[12px] text-timberWolf 
            font-bold font-beckman py-2 px-3 
            rounded-[5px] bg-jetLight 
            mt-4 hover:bg-battleGray hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out"
          onClick={toggleDetails}
          onMouseOver={() => {
            document
              .querySelector('.download-btn')
              .setAttribute('src', downloadHover); 
          }}
          onMouseOut={() => {
            document
              .querySelector('.download-btn')
              .setAttribute('src', download); 
          }}
        >
          {detailsVisible ? 'Hide Details' : 'Show Details'}
        </button>
        {detailsVisible && Array.isArray(education.details) && (
          <ul className="mt-4 text-[14px] text-taupe font-beckman bg-jetLight rounded-[5px] p-3 list-disc">
            {education.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
    </VerticalTimelineElement>
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
    </>
  );
};

export default SectionWrapper(Education, 'education');
