import React from "react";
import { motion } from 'framer-motion'
import CaseWrapper from '../../components/case/caseWrapper'

const EchoPage = () => {
  return (
    <motion.div exit={{ opacity: 0 }}
      className='page' >
      <CaseWrapper index={0} />
    </motion.div >
  );
};

export default EchoPage;
