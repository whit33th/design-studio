import React, { useState } from "react";
import styles from "./FAQ.module.scss"; // Импортируем стили как модуль

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: "1. What services does SyncDesign provide?",
      answer:
        "SyncDesign provides: UI/UX Design | Branding Services | Web Development | Mobile App Design | Consultation Services.",
    },
    {
      question: "2. How can we register our own project?",
      answer:
        "You can register your project by contacting us through our website form or giving us a call.",
    },
    {
      question: "3. How do you help businesses?",
      answer:
        "We help businesses by providing end-to-end design, branding, and development services.",
    },
    {
      question: "4. What are your tariffs based on?",
      answer:
        "Our tariffs are based on the scope and complexity of the project, as well as the timeline.",
    },
  ];

  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqTextColumn}>
        <h2 className="sText">FREQUENTLY ASKED QUESTIONS</h2>
        <h1>Your Roadmap to Coworking Clarity</h1>
        <p className="sText">
          Frequently asked questions ordered by popularity. Remember that if the
          visitor has not committed to the call to action, they may still have
          questions (doubts) that can be answered.
        </p>
      </div>

      <div className={styles.faqAccordionColumn}>
        {questions.map((item, index) => (
          <div
            onClick={() => toggleAccordion(index)}
            key={index}
            className={`${styles.accordionItem} ${
              activeIndex === index ? styles.active : ""
            }`}
          >
            <div className={styles.accordionQuestion}>
              <h3>{item.question}</h3>
              <span>{activeIndex === index ? "▲" : "▼"}</span>
            </div>
            <div className={styles.accordionAnswer}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
