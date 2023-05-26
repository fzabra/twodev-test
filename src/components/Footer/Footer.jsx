import React from 'react';
import ConditionsFooter from './ConditionsFooter'
import ContactFooter from './ContactFooter'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.containerFooter}>
      <ConditionsFooter/>
      <ContactFooter/>
    </footer>
  );
};

export default Footer;
