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
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        My favorite part of <span className="italic">programming</span> is problem solving. 
        I love the feeling of finally finding a solution to a problem. {" "}
        My core stack is <span className="font-medium"> React, Node.js, Express.js, and PostgreSQL</span>.{" "}
        I am also familiar with <span className="font-medium">Salesforce, Apex and LWC</span>. I am always looking to learn new technologies. {" "}
        I am currently <span className="font-medium">looking</span> for a <span className="font-medium">full-time position</span> {" "}
        as a software developer.
      </p>

    </motion.section>
  );
}
