"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="font-medium">Full-Stack Developer skilled in web and mobile development,</span>  
        <span className="font-medium"> graduated</span>  from the <span className="font-medium"> Higher Institute of Technological Studies of Bizerte</span> in <span className="font-medium">June 2024</span> with a degree in <span className="font-medium">Information Technologies</span>. Extremely motivated to constantly develop my skills and grow professionally 
        , I am confident in my ability to offer interesting ideas in a constantly evolving field of <span className="font-medium">information technology</span>.

      </p>
    </motion.section>
  );
}
