import React from "react";
import { motion } from 'framer-motion'
import useResize from '../hooks/useResize'

const letterVariant = {
  before: {
    y: 400,
    transition: {
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  after: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  }
}

const exitVar = {
  hidden: {
    height: 0
  },
  visable: {
    height: '100vh'
  }
}

const stringVariant = {
  before: {
    y: 0
  },
  after: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04
    }
  }
}

const IntroOverlay = () => {

  const windowSize = useResize();

  const string = "worksbyscott.uk"

  const replaceSpace = (letter) => {
    if (letter === " ")
      return "\u00A0";
    return letter;
  }

  const heroString = Array.from(string).map((letter) => replaceSpace(letter));

  return (
    <div className="intro">
      <motion.div
        key="intro"
        className="intro-overlay"
        animate={"visable"}
        exit={"hidden"}
        variants={exitVar}

        transition={{
          duration: 1,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
      />
      <motion.h3
        key="introtext"
        variants={stringVariant}
        initial={"before"}
        animate={"after"}>
        {heroString.map((letter, index) => (
          <motion.span
            key={index}
            initial={"before"}
            animate={"after"}
            variants={letterVariant}>
            {letter}
          </motion.span>
        ))}
      </motion.h3>
    </div>
  );
};

export default IntroOverlay;
