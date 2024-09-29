import { motion } from "framer-motion";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function About() {
  const { ref, isVisible } = useIntersectionObserver(0.3);

  const animation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="container about" id="about" ref={ref}>
      <div className="col-6 about_images">
        <motion.img
          className="about_1"
          src="./images/me1.jpeg"
          alt="about1"
          initial="hidden"
          variants={animation}
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.8, ease: "easeIn" }}
        />
        <motion.img 
          className="about_2" 
          src="./images/me2.jpeg" 
          alt="about2" 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={isVisible ? { opacity: 1, scale: 1 } : {opacity: 1}} 
          transition={{ duration: 0.8, ease: "easeIn", delay: 0.2 }}
        />
      </div>
      <div className="col-6 heading">
        <motion.h3
          initial="hidden"
          variants={animation}
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I'm a FrontEnd Developer
        </motion.h3>
        <motion.h1
          initial="hidden"
          variants={animation}
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          I Develop Beautiful Applications
        </motion.h1>
        <motion.p
          initial="hidden"
          variants={animation}
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I was always excited how few lines of code could result into beautiful
          websites. That's why I chose to become a front-end developer.
        </motion.p>
        <motion.p
          initial="hidden"
          variants={animation}
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          I have hands-on experience working with HTML, CSS, JavaScript, MEAN
          and MERN stack technology. I also have knowledge of programming
          languages like C and C++. I develop user-friendly, interactive and
          responsive websites.
        </motion.p>
        <motion.div
          className="portfolio__button"
          initial="hidden"
          variants={animation}
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#portfolio">Portfolio</a>
        </motion.div>
      </div>
    </section>
  );
}
