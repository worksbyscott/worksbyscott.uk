import React from "react";
import CaseWrapper from '../../components/case/caseWrapper'
import { motion } from 'framer-motion'

const CellaPage = (index) => {
  return (

    <motion.div exit={{ opacity: 0 }}
      className='page' >
      <CaseWrapper index={0} />
    </motion.div >

  );
};

export default CellaPage;
