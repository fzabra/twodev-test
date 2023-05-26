import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss'
import TopNavBar from '../TopNavBar/TopNavBar';
import SearchBar from '../SeachBar/SearchBar';
import Disclaimer from '../Disclaimer/Disclaimer';

import TopNavMenu from '../TopNavMenu/TopNavMenu'

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.containerHeader}>
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
