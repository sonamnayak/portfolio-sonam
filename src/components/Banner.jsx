import { motion } from "framer-motion";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function Banner() {
  const { ref, isVisible } = useIntersectionObserver(0.2);

  const animatey50 = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const animateyneg50 = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="banner"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      ref={ref}
    >
      <motion.div
        className="container banner__row"
        initial={{ opacity: 0, y: -50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="col-6">
          <motion.h1
            initial="hidden"
            variants={animatey50}
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span>Hello I'm,</span>
            <br />
            Sonam Nayak
          </motion.h1>
          <motion.h2
            initial="hidden"
            variants={animatey50}
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            FrontEnd Developer
          </motion.h2>
          <motion.p
            initial="hidden"
            variants={animatey50}
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Innovative, task-driven frontend developer with experience in MERN stack
            technology. I'm passionate and enthusiastic about my work.
          </motion.p>
          <motion.div
            className="banner__button"
            initial="hidden"
            variants={animatey50}
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a href="https://github.com/sonamnayak" target="_blank">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/sonamnayak" target="_blank">
              LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          className="col-6"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <div className="profile">
            <motion.img
              src="./images/me.jpeg"
              alt="profile"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: "easeIn" }}
            />
            <motion.a
              href="mailto:sonamnayak2710@gmail.com"
              target="_blank"
              className="social social_mail"
              initial="hidden"
              variants={animateyneg50}
              animate={isVisible ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="mail"
              />
            </motion.a>
            <motion.a
              href="https://github.com/sonamnayak"
              target="_blank"
              className="social social_git"
              initial="hidden"
              variants={animateyneg50}
              animate={isVisible ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                alt="GitHub"
              />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sonamnayak"
              target="_blank"
              className="social social_in"
              initial="hidden"
              variants={animateyneg50}
              animate={isVisible ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                alt="LinkedIn"
              />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
