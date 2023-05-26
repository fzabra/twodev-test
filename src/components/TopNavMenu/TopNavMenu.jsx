import React from 'react'
import styles from'./TopNavMenu.module.scss'
import MenuData from '../MenuData/MenuData';

const TopNavMenu = () => {

    return (
      <>
      <div className={styles.topNavMenu}>
        <MenuData />
      </div>
      </>
    );
  };

export default TopNavMenu;