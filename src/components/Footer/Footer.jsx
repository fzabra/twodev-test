import React from 'react';
import ConditionsFooter from './ConditionsFooter'
import ContactFooter from './ContactFooter'
import styles from './Footer.module.scss'
import MenuFooter from './MenuFooter'
import MenuLastFooter from './MenuLastFooter'

const Footer = () => {
  return (
    <footer className={styles.containerFooter}>
      <ConditionsFooter/>
      <ContactFooter/>
      <MenuFooter/>
      <MenuLastFooter />
    </footer>
  );
};

export default Footer;
