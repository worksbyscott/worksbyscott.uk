import React from 'react'
import { Route } from "react-router-dom";

import Header from './header'

import AboutPage from "../pages/about";
import Home from "../pages/home";
import CellaPage from "../pages/cases/cellafm";
import CipherPage from "../pages/cases/cipher";
import EchoPage from "../pages/cases/echo";

const routes = [
    { path: "/", title: "Home", Component: Home },
    { path: "/cellafm", title: "Cella FM", Component: CellaPage, index: 0 },
    { path: "/cipher", title: "Turbo Cipher", Component: CipherPage, index: 1 },
    { path: "/echo", title: "Echo", Component: EchoPage, index: 2 },
    { path: "/about", title: "About Me", Component: AboutPage, }
];

const Layout = () => {
    return (
        <>
            <Header />
            {routes.map(({ path, Component, index }) => (
                <Route key={path} exact path={path}>
                    <Component index={index} />
                </Route>
            ))}
        </>
    )
}

export default Layout;