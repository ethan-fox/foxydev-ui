import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TECH_DOMAINS } from "@/util/constant";

const RotatingDomainText = () => {
  const domains = TECH_DOMAINS;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * domains.length);
        } while (newIndex === prevIndex && domains.length > 1);
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [domains.length]);

  const textLength = domains[currentIndex].length;
  const scale = textLength > 6 ? 6 / textLength : 1;

  return (
    <>
      <span className="relative top-0 md:top-[-1px] lg:top-[-2px]">{"{"}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y:- 20, scale }}
          animate={{ opacity: 1, y: 0, scale }}
          exit={{ opacity: 0, y: 20, scale }}
          transition={{ duration: 0.5 }}
          style={{ verticalAlign: "baseline" }}
          className="inline-flex whitespace-nowrap w-[6ch] justify-center items-baseline"
        >
          {domains[currentIndex]}
        </motion.span>
      </AnimatePresence>
      <span className="relative top-0 md:top-[-1px] lg:top-[-2px]">{"}"}</span>
    </>
  );
};

export default RotatingDomainText;
