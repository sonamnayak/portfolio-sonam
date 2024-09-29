import { motion } from "framer-motion";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const skillsData = [
  { name: "HTML", percentage: 80 },
  { name: "CSS", percentage: 80 },
  { name: "JAVASCRIPT", percentage: 80 },
  { name: "TYPESCRIPT", percentage: 70 },
  { name: "REACT JS", percentage: 80 },
  { name: "REDUX", percentage: 80 },
  { name: "ANGULAR", percentage: 60 },
  { name: "TAILWIND CSS", percentage: 80 },
  { name: "JQUERY", percentage: 50 },
  { name: "NODE JS", percentage: 70 },
  { name: "EXPRESS JS", percentage: 70 },
  { name: "MONGO DB", percentage: 60 },
  { name: "GIT & GITHUB", percentage: 80 },
  { name: "C", percentage: 60 },
  { name: "C++", percentage: 80 },
];

export default function Skills() {
  return (
    <section className="skills container heading" id="skills">
      <h3>My Skills</h3>
      <h1>I Develop Skills Regularly</h1>
      <div className="row">
        {skillsData.map((skill, index) => {
          const { ref, isVisible } = useIntersectionObserver(0.2);
          return (
            <div className="col-6" key={index} ref={ref}>
              <span>{skill.name}</span>
              <div className="progress-container">
                <motion.div
                  className="progress"
                  initial={{ width: 0 }}
                  animate={{ width: isVisible ? `${skill.percentage}%` : "0%" }}
                  transition={{ duration: 1 }}
                />
                <motion.div
                  className="percentage"
                  initial={{ left: "110px" }}
                  animate={{ left: isVisible ? `${skill.percentage}%` : "0%" }}
                  transition={{ duration: 1 }}
                >
                  {skill.percentage}%
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
