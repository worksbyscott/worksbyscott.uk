import React, { useEffect, useState, useRef } from "react";
import { Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

//SCSS imports
import "./styles/App.scss"

//Component imports
import IntroOverlay from './components/introOverlay'
import Layout from './components/layout'
import Header from './components/header'
import AboutPage from "./pages/about";
import Home from "./pages/home";
import CellaPage from "./pages/cases/cellafm";
import CipherPage from "./pages/cases/cipher";
import EchoPage from "./pages/cases/echo";

const routes = [
  { path: "/", title: "Home", Component: Home },
  { path: "/cellafm", title: "Cella FM", Component: CellaPage, index: 0 },
  { path: "/cipher", title: "Turbo Cipher", Component: CipherPage, index: 1 },
  { path: "/echo", title: "Echo", Component: EchoPage, index: 2 },
  { path: "/about", title: "About Me", Component: AboutPage, }
];

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
            <div className="main">
              <Header />
              {routes.map(({ path, index, Component }) => (
                <Route key={path} exact path={path}>
                  <Component index={index} />
                </Route>
              ))}
            </div>
          )}
      </AnimatePresence >
    </div>
  );
}

export default App;
