import React, { useEffect, useState } from 'react';
import './Header.scss';
import TopNavBar from '../TopNavBar/TopNavBar';
import SearchBar from '../SeachBar/SearchBar';
import Disclaimer from '../Disclaimer/Disclaimer';

import TopNavMenu from '../TopNavMenu/TopNavMenu'

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container-site">
      <Disclaimer />
      <header>
        <TopNavBar />
        {!isDesktop && <SearchBar />}
      </header>
      {isDesktop && <TopNavMenu />}
    </div>
  );
};

export default Header;
