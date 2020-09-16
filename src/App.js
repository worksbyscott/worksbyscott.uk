import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

import "./styles/App.scss"

import IntroOverlay from './components/introOverlay'
import Header from './components/header'

import AboutPage from "./pages/about";
import Home from "./pages/home";
import { Slides } from "./data/slides";
import CaseWrapper from "./components/case/caseWrapper";

const routes = [
  { path: "/", title: "Home", Component: Home },
  { path: "/about", title: "About Me", Component: AboutPage, }
];

const App = () => {
  const [introduction, setIntroduction] = useState(false);

  const INTRODUCTION_TIMEOUT = 5000;

  useEffect(() => {
    setTimeout(() => {
      setIntroduction(true)
    }, INTRODUCTION_TIMEOUT);
  }, []);

  return (
    <div className="app" >
      <AnimatePresence exitBeforeEnter>
        {!introduction ? (
          <IntroOverlay />
        ) : (
            <div className="main">
              <Header />
              <Route
                render={({ location }) => (
                  <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.pathname}>
                      {routes.map(({ path, Component }) => (
                        <Route
                          exact
                          path={path}
                          key={path}
                          render={() => <Component />} />
                      ))}
                      {Slides.map(slide => (
                        <Route
                          exact
                          path={slide.route}
                          key={slide.name}
                          render={() => <CaseWrapper slide={slide} />}
                        />
                      ))}
                    </Switch>
                  </AnimatePresence>
                )} />
            </div>
          )}
      </AnimatePresence>
    </div>
  );
}

export default App;
