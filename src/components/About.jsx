import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>From the bottom of my heart</p>
        <h2 className={styles.sectionHeadText}>My Spark in Engineering</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px]  leading-[30px]">
        My passion for engineering didn't start in a classroom, but a movie. Watching Iron Man 3 as a 10-year-old kid, I was amazed by Tony Stark's ability to build advanced technology than we've ever imagined with his own hands
        to build a super suit to save lives and Jarvis the A.I. to be his assitance in everyday basis. That vision of <span style={{ color: 'blue' }}>using engineering to shape the future of technology</span> stayed with me; it quietly sparked a curiosity I couldn't quite fully understand at the time.
      </motion.p>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px]  leading-[30px]">
        Fast forward to my freshman year of college, while still unsure about the career path, a hands-on engineering class made that old spark became something real.  As I learned design skills, built circuits, performed firmware programming, 
        and integrated components together for a product to come to life, I realized—I could actually make this room temperature monitor box. <span style={{ color: 'blue' }}>Engineering wasn't just imagination anymore; it became reality. </span>
        That project might be a beginner-level engineering project for someone but for me, it's a small step for my inner child to keep moving forward to something bigger in engineering as a grown man.
      </motion.p>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px]  leading-[30px]">
        That excitement grew even more when I joined BU Mars Rover Club the next year. I worked with a team of talented friends who shared the same passion for innovation. Together, we dove into all aspects of robotics—mechanical design, 
          embedded systems, power systems, autonomy, life science and computer vision—to build a robot that could explore Mars. Facing technical challenges and working alongside friends from diverse backgrounds helped me grow as an engineer. 
          I truly believe that no matter where you come from, what challenges you've faced, or when you started your journey in engineering, passion will always drive you to push your limits <span style={{ color: 'blue' }}>to become a better engineer. </span>
          Most importantly, I saw clearly how robotics brings together so many fields to solve real-world and complex problems.
      </motion.p>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px]  leading-[30px]">
        My motivation now goes beyond childhood wonder. I see robotics and autonomous systems as inevitable advancements that will transform how we live—from healthcare to space exploration, from agriculture to manufacturing, from smart homes to large-scale infrastructure, and from special events to everyday convenience. 
        As I continue on my engineering journey, I carry that first Iron Man spark, the lessons from real-world experience, and the inspiration of working alongside passionate engineers with me. 
        My goal is to <span style={{ color: 'blue' }}>contribute to a future</span> where intelligent systems enhance human capabilities, improve life & safety, and expand what's possible for future humanity.
      </motion.p>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px]  leading-[30px]">
        While being an expert in software, with my interdisciplinary background, I can bridge hardware and software to design, integrate and engineer end-to-end systems—from embedded firmware to high-level autonomy.
        Even though I am interested in <span style={{ color: 'blue' }}>Technology, Robotics and Automotive</span> industies, I am open to new fields as I believe I can do several things, tackle challenges and expand new horizons.
      </motion.p>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px]  leading-[30px]">
        Now, I am a senior, major in Computer Engineering, minor in Mechanical Engineering and concentration in Robotics at Boston University.
        I've already put my passion into action through my work in robotics research, software engineer internship, hardware hackathon, and various projects.
        These experiences have made me grow as an engineer and as a person. I am confident that in the future, I will make significant contributions to the fields
      </motion.p>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px]  leading-[30px]">
        I am thrilled to dedicate my life as an engineer and look forward to the future opportunities to provide solution to <span style={{ color: 'blue' }}>improve people's life with software, robotics and autonomous systems</span> across all communities.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
