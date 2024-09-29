import { motion } from 'framer-motion';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function Experience() {
  const { ref, isVisible } = useIntersectionObserver(0.5);

  const animation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="experience container heading" id="experience" ref={ref}>
      <h3>Experience</h3>
      <h1>My Experience Over the Years</h1>
      <div className="row">
        <motion.div
          className="col-4"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={animation}
          transition={{ duration: 0.6 }}
        >
          <div className="card__head">
            <div className="title experience__title">
              <h3>Associate Software Developer</h3>
              <span>VenturePact</span>
              <span>Mar 2023 - Present</span>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/512/8099/8099466.png" alt="" />
          </div>
          <p>
            My role is to work on the company's product Outgrow and Omniengage,
            add new functionalities to it and maintain it. I also worked on a
            project called CoachChat.
          </p>
        </motion.div>

        <motion.div
          className="col-4"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={animation}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="card__head">
            <div className="title experience__title">
              <h3>Front-End Intern</h3>
              <span>Cyberexplore</span>
              <span>Sept 2021 - Aug 2022</span>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/512/10276/10276795.png" alt="" />
          </div>
          <p>
            I worked on the company's official website and gained experience
            working with ReactJS and NodeJS.
          </p>
        </motion.div>

        <motion.div
          className="col-4"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={animation}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="card__head">
            <div className="title experience__title">
              <h3>Web Developer Intern</h3>
              <span>Ananth Agri Services</span>
              <span>Oct 2020 - Jun 2021</span>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/512/6611/6611847.png" alt="" />
          </div>
          <p>
            I worked on the company's official website and gained experience
            working with ReactJS and NodeJS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
