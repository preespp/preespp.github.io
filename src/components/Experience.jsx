import { useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { download, downloadHover, resume } from '../assets';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => {
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
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }>
    <div>
      <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
        {experience.title}
      </h3>
      <p
        className="text-taupe text-[22px] font-semibold font-beckman tracking-[1px]"
        style={{ margin: 0 }}>
        {experience.company_name}
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
        {detailsVisible && Array.isArray(experience.details) && (
          <ul className="mt-4 text-[14px] text-taupe font-beckman bg-jetLight rounded-[5px] p-3 list-disc">
            {experience.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
    </div>
  </VerticalTimelineElement>
);
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>Real-world application</p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          <VerticalTimelineElement
            contentStyle={{
              background: '#eaeaec',
              color: '#292929',
              boxShadow:
                'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  #232631',
            }}
            iconStyle={{ background: '#333333' }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={resume}
                  alt="resume"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            }>
            <button
              className="live-demo flex justify-between 
              sm:text-[18px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-3 pr-3 
              whitespace-nowrap gap-1 sm:w-[148px] sm:h-[58px] 
              w-[125px] h-[46px] rounded-[10px] bg-jetLight 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out"
              onClick={() =>
                window.open(
                  'https://drive.google.com/drive/folders/1NVWiKAZfAmMIgBGt0y15UDDCHoO3YYl-?usp=sharing',
                  '_blank'
                )
              }
              onMouseOver={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', downloadHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', download);
              }}>
              MY RESUME
              <img
                src={download}
                alt="download"
                className="download-btn sm:w-[26px] sm:h-[26px] 
                w-[23px] h-[23px] object-contain"
              />
            </button>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'experience');