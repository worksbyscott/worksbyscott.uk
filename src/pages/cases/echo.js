import React from "react";
import { motion } from 'framer-motion'

const EchoPage = () => {
  return (
    <motion.div exit={{ opacity: 0 }}
      className='page' >
      <div className='container'>
        <div className='row'>
          <h3>This is the case studies page</h3>
        </div>
      </div>
    </motion.div >
  );
};

export default EchoPage;
