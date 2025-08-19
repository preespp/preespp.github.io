import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Software</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadTextLight}>Hardware/Tools</h2>
      </motion.div>

      <div className="flex-wrap flex mt-14 text-taupe text-[18px] leading-[30px]">
        <li>Embedded Boards: Beaglebone Black, ESP32, FPGA, Raspberry Pi, NVIDIA Jetson, Arduino</li>
        <li>Embedded Systems: Verilog, Assembly Language, RTOS, Kernal Modules, Device Driver, Operating Systems, Distributed Systems, Expressif IoT, I2C, TCP/IP, UART, UDP, LiDAR, IR Sensor, GPS, Motor Driver </li>
        <li>Software Tools: Linux, Ubuntu, Wireshark, Python sockets, Mininet, OpenFlow, ROS2, gprof, GDB, Unittest, MongoDB, MySQL, Google Firebase, AWS</li>  
        <li>Electrical: Soldering, Circuit Wiring, Circuit Design (KiCAD), Power Systems, Oscilloscope, Multimeter</li>
        <li>Mechanical: Engineering Sketching, 3D printing, CAD (Onshape, Solidworks), Wood work, Basic Machining</li>
       </div>
    
    </>
  );
};

export default SectionWrapper(Tech, '');
