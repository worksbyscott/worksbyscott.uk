import React, { useEffect, useState } from "react";
import Slider from '../components/slider/slider'
import { homeEnter } from '../animations/homeAnimation'
import { motion } from "framer-motion";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Home = () => {




  return (
    <>
      <motion.div
        key="slider"
        initial={{ y: 600, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={transition}>
        <Slider />
      </motion.div>

    </>
  );
};

export default Home;
