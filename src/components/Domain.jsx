import { motion } from "framer-motion";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function Domain() {
  const { ref, isVisible } = useIntersectionObserver(0.3);

  const upwards = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const downwards = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const opacity = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const duration = { duration: 0.5 };

  return (
    <section className="domain container" ref={ref}>
      <div className="row">
        <div className="col-6">
          <motion.img
            src="./images/frontend.png"
            alt="frontend"
            initial="hidden"
            variants={opacity}
            animate={isVisible ? "visible" : "hidden"}
            transition={duration}
          />
          <motion.h3
            initial="hidden"
            variants={downwards}
            animate={isVisible ? "visible" : "hidden"}
            transition={duration}
          >
            Front-End Developer
          </motion.h3>
          <motion.p
            initial="hidden"
            variants={upwards}
            animate={isVisible ? "visible" : "hidden"}
            transition={duration}
          >
            As a front-end developer, I create websites and applications using
            web languages such as HTML, CSS, JavaScript, Angular, React Js,
            Bootstrap, TailwindCSS, TypeScript, and jQuery that allow users to
            access and interact with the site or app.
          </motion.p>
        </div>
        <div className="col-6">
          <motion.img
            src="./images/backend.png"
            alt="backend"
            initial="hidden"
            variants={opacity}
            animate={isVisible ? "visible" : "hidden"}
            transition={duration}
          />
          <motion.h3
            initial="hidden"
            variants={downwards}
            animate={isVisible ? "visible" : "hidden"}
            transition={duration}
          >
            Back-End Developer
          </motion.h3>
          <motion.p
            initial="hidden"
            variants={upwards}
            animate={isVisible ? "visible" : "hidden"}
            transition={duration}
          >
            In the backend part of the website, I use JavaScript, MongoDB, Node
            Js, Express Js, and Redux. I also have knowledge of C/C++. It
            involves working in data storage, security, and other server-side
            functions that you cannot see.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
