import { motion } from "framer-motion";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function Contact() {
  const { ref: formRef, isVisible: isFormVisible } =
    useIntersectionObserver(0.1);
  const { ref: infoRef, isVisible: isInfoVisible } =
    useIntersectionObserver(0.1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.name.value;
    const number = form.number.value;
    const message = form.message.value;
    window.location.href = `mailto:sonamnayak2710@gmail.com?subject=Query&body=Name: ${name}%0APhone Number: ${number}%0AMessage: ${message}`;
  };

  return (
    <section className="contact container heading" id="contact">
      <h3>Don't be shy</h3>
      <h1>Hit me Up!</h1>
      <div className="row">
        <motion.form
          ref={formRef}
          className="contact__form"
          method="post"
          encType="text/plain"
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: isFormVisible ? 1 : 0,
            x: isFormVisible ? 0 : -50,
          }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            aria-required="true"
          />
          <input
            type="tel"
            name="number"
            placeholder="Phone Number"
            aria-required="true"
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
            aria-required="true"
          ></textarea>
          <button type="submit">Submit Message</button>
        </motion.form>
        <motion.div
          ref={infoRef}
          className="contact__info"
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: isInfoVisible ? 1 : 0,
            x: isInfoVisible ? 0 : 50,
          }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact__card">
            <div className="contact__icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="contact__data">
              <h4>Address</h4>
              <p>Phagwara, Punjab</p>
            </div>
          </div>
          <div className="contact__card">
            <div className="contact__icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="contact__data">
              <h4>Email</h4>
              <p>
                <a href="mailto:sonamnayak2710@gmail.com">
                  sonamnayak2710@gmail.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
