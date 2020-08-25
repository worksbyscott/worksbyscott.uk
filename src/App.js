import React, { useEffect, useState, useRef } from "react";
import { Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

//SCSS imports
import "./styles/App.scss"

//Component imports
import IntroOverlay from './components/introOverlay'
import Layout from './components/layout'

const App = () => {

  //State of introduction completion - true = completed
  const [introduction, setIntroduction] = useState(false);

  useEffect(() => {

    //Removing the loading screen and setting Introduction
    setTimeout(() => {
      setIntroduction(true)
    }, 5000);

  }, []);

  return (
    <div className="app" >
      <AnimatePresence exitBeforeEnter>
        {!introduction ? (
          <IntroOverlay key="intro" />
        ) : (
            <Layout key="layout" />
          )}
      </AnimatePresence >
    </div>
  );
}

export default App;
