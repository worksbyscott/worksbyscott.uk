import React from "react";
import { Link } from 'react-router-dom'

//Start of Icon imports
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Mail } from "../assets/send.svg";

const logoVarient = {

}

const linksVarient = {

}

const linkVarient = {

}

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='row v-center space-between'>
          <div className='logo'>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className='nav-links'>
            <a href='/'><Github /></a>
            <a href='instagram.com/worksbyscott'><Instagram /></a>
            <a href='instagram.com/worksbyscott'><Mail /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
