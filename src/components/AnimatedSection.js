import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled(motion.div)`
  padding: 50px;
  background-color: #f9f9f9;
  margin-bottom: 50px;
  text-align: center;
`;

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const AnimatedSection = ({ children }) => {
  return (
    <Section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={animationVariants}
    >
      {children}
    </Section>
  );
};

export default AnimatedSection;
