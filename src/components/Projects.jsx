import { motion } from "framer-motion";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function Projects() {
  const animation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="container heading">
        <h3>Portfolio</h3>
        <h1>My Amazing Works</h1>
        <div className="projects">
          {projectData.map((project, index) => {
            const { ref, isVisible } = useIntersectionObserver(0.1);
            return (
              <motion.div
                className="cards"
                key={index}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={animation}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                ref={ref}
              >
                <div className="card">
                  <img src={project.imgSrc} alt="" />
                  <div className="card_content">
                    <h4>{project.title}</h4>
                    <h2>{project.description}</h2>
                    <p>Stack: {project.stack}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW PROJECT<i className="fa-solid fa-arrow-right"></i>
                    </a>
                    <p>{project.details}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const projectData = [
  {
    imgSrc: "./images/project2.png",
    title: "ShopSpree",
    description: "E-commerce website",
    stack: "Angular, NodeJS, MongoDB",
    link: "https://github.com/sonamnayak/ecommerce-angular",
    details:
      "A one-stop destination for clothing and accessories. It has a payment gateway; one can buy products, add them to a cart, and then checkout.",
  },
  {
    imgSrc: "./images/project0.png",
    title: "CoachChat",
    description: "Coaching Website",
    stack: "HTML, CSS, JS",
    link: "https://coachchat.me",
    details:
      "Future of personalized coaching. Choose a topic, then through chat-based coaching, connect from anywhere in the world, making coaching accessible and convenient for you.",
  },
  {
    imgSrc: "./images/project1.png",
    title: "EvoGym",
    description: "Fitness Website",
    stack: "ReactJS, TypeScript, Vite",
    link: "https://fitness-sonamnayak.vercel.app",
    details:
      "Users can sign up and become members of the gym to avail all the benefits and access to various classes.",
  },
  {
    imgSrc: "./images/project3.png",
    title: "Cryptoverse",
    description: "Cryptocurrency Website",
    stack: "ReactJS, NodeJS, Redux",
    link: "https://cryptoverse-sonamnayak.vercel.app",
    details:
      "Users can view cryptocurrencies value statistics, market cap, and supply. It has a news section for the latest news. Data is fetched through an API.",
  },
  {
    imgSrc: "./images/project5.png",
    title: "ToDo List",
    description: "To-Do Application",
    stack: "React, NodeJS, MongoDB, Redux",
    link: "https://todo-mern-frontend-7ufj.onrender.com/",
    details: "A person can add their everyday agendas and keep track of them.",
  },
];
