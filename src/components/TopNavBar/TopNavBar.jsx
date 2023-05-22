import React, { useState, useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import Icons from '../Icons/Icons';
import TopNavMenu from '../TopNavMenu/TopNavMenu';
import './TopNavBar.scss';

const logoUrl = './images/logo-avril.svg';

const TopNavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const navMenuStyles = {
    backgroundColor: '#fff',
    position: 'absolute',
    width: '100%',
    left: expanded ? '0' : '100%',
    transform: expanded ? 'translateX(0)' : 'translateX(100%)',
    transition: 'left 0.3s ease-in-out, transform 0.3s ease-in-out',
    zIndex: '10',
    top: '98px',
  };

  return (
    <Navbar expand="lg" expanded={expanded}>
      <Navbar.Brand href="#"><img src={logoUrl} alt="Logo" /></Navbar.Brand>

      <div className="content-header">
        <Icons name="truck" className="svg truck" />
        <Icons name="cart" className="svg cart" />
      </div>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={toggleNavbar}
      >
        {expanded ? <Icons name="close" /> : <Icons name="bar" />}
      </Navbar.Toggle>
      <div className="nav-menu" style={navMenuStyles}>
        {isMobile && <TopNavMenu />}
      </div>
    </Navbar>
  );
};

export default TopNavBar;