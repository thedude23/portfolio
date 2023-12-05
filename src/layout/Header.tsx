import React, { useState } from 'react';
import styles from './Header.module.scss';
import DarkModeToggle from '../components/DarkModeToggle';
import NavigationMenu from '../components//NavigationMenu';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <DarkModeToggle />
      <div className={isOpen ? `${styles.menuBtn} ${styles.open}` : styles.menuBtn} onClick={handleMenuClick}>
        <span className={isOpen ? `${styles.menuBtnBurger} ${styles.open}` : styles.menuBtnBurger}></span>
      </div>
      <NavigationMenu isOpen={isOpen} />
    </header>
  );
};

export default Header;
