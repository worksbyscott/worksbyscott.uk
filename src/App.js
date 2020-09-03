import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation, BrowserRouter as Router } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

//SCSS imports
import "./styles/App.scss"

//Component imports
import IntroOverlay from './components/introOverlay'
import Layout from './components/layout'
import Header from './components/header'

//Page Component imports
import AboutPage from "./pages/about";
import Home from "./pages/home";
import CellaPage from "./pages/cases/cellafm";
import CipherPage from "./pages/cases/cipher";
import EchoPage from "./pages/cases/echo";

const routes = [
  { path: "/", title: "Home", Component: Home },
  { path: "/cella", title: "Cella FM", Component: CellaPage },
  { path: "/cipher", title: "Turbo Cipher", Component: CipherPage },
  { path: "/echo", title: "Echo", Component: EchoPage },
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
          <IntroOverlay />
        ) : (
            <Router>
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
                      </Switch>
                    </AnimatePresence>
                  )} />
              </div>
            </Router>
          )}
      </AnimatePresence>
    </div>
  );
}

export default App;
