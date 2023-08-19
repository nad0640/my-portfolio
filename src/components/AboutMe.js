import aboutMeImg from "../images/aboutme.jpeg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const AboutMe = ({ name }) => {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="about">
      <div className="aboutContainer container">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-6"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={inView ? { x: 0, opacity: 1, scale: 1 } : { x: "-10vw", opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img src={aboutMeImg} alt={name} />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              <motion.h4 variants={paragraphVariants}>Nice to meet you! 👋🏻</motion.h4>
              <motion.h5 variants={paragraphVariants}>I'm a Software Engineer.</motion.h5>
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                <motion.p variants={paragraphVariants}>

                  I proudly don my <span style={{ color: "white" }}> problem-solving </span> cape and plunge into real-world challenges. All the while, I maintain an unwavering focus on achieving my degree in <span style={{ color: "white" }}> Digital and Technology Solutions</span> from the University of Conventry. So, in this moment, I find myself skillfully managing both binary complexities and practical puzzles, all while shaping my personal narrative of triumph.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  As I navigate through this kaleidoscope of experiences, both professional and personal, Feel free to explore my portfolio and join me in celebrating the fusion of technology, creativity, and adventure.





                </motion.p>
              </motion.div>
              <NavLink to="/portfolio">
                <motion.button className="btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.99 }}>
                  <p>View Portfolio</p>
                  <div>
                    <FiArrowUpRight whileHover={{ scale: 4 }} className="arrow-icon" />
                  </div>
                </motion.button>
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
