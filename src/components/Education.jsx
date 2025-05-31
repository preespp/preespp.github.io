import { useState } from 'react';
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

const CourseworksCard = ({courseworks}) => {
  const [detailsVisible, setDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setDetailsVisible(!detailsVisible);
  };

  return (
    <VerticalTimelineElement>
    </VerticalTimelineElement>
  );
};

const CertificateCard = ({certificate}) => {
  const [detailsVisible, setDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setDetailsVisible(!detailsVisible);
  };

  return (
    <VerticalTimelineElement>
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

      <div className="mt-20 flex flex-col">
      </div>

      <div className="mt-20 flex flex-col">
      </div>
    </>
  );
};

export default SectionWrapper(Education, 'education');
