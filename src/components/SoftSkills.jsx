import React from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function SoftSkills() {
  const cards = [
    {
      id: 1,
      title: "Leadership",
      description:
        "I have good leadership skills, I am a team player and can coordinate very well with my teammates and take responsibility for the work.",
      img: "./images/ss1.svg",
    },
    {
      id: 2,
      title: "Communication",
      description:
        "I have good communication skills. I try to speak in a way which is clearly understood by everyone.",
      img: "./images/ss2.svg",
    },
    {
      id: 3,
      title: "Problem Solving",
      description:
        "I try to implement the best optimized solutions for a problem and ensure that the quality of the code is according to industry standards.",
      img: "./images/ss3.svg",
    },
  ];

  const animation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="container soft_skills">
      <div className="row">
        {cards.map((card, index) => {
          const { ref, isVisible } = useIntersectionObserver(0.1);
          return (
            <div className="col-4" key={card.id} ref={ref}>
              <motion.div
                className="card__head"
                initial="hidden"
                variants={animation}
                animate={isVisible ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="title">
                  <span>{`0${index + 1}`}</span>
                  <h3>{card.title}</h3>
                </div>
                <img src={card.img} alt={card.title} />
              </motion.div>
              <motion.p
                initial="hidden"
                variants={animation}
                animate={isVisible ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                {card.description}
              </motion.p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
