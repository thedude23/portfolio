import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import styles from './Header.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className={isOpen ? `${styles.menuBtn} ${styles.open}` : styles.menuBtn} onClick={handleMenuClick}>
        <span className={isOpen ? `${styles.menuBtnBurger} ${styles.open}` : styles.menuBtnBurger}></span>
      </div>

      <nav className={isOpen ? `${styles.open}` : ''}>
        <ul className={isOpen ? `${styles.menuNav} ${styles.open}` : styles.menuNav}>
          <li className={isOpen ? `${styles.menuNavItem} ${styles.open}` : styles.menuNavItem}>
            <NavLink exact to="/" className={styles.menuNavLink} activeClassName={styles.active}>
              Home
            </NavLink>
          </li>
          <li className={isOpen ? `${styles.menuNavItem} ${styles.open}` : styles.menuNavItem}>
            <NavLink to="/about" className={styles.menuNavLink} activeClassName={styles.active}>
              About Me
            </NavLink>
          </li>
          <li className={isOpen ? `${styles.menuNavItem} ${styles.open}` : styles.menuNavItem}>
            <NavLink to="/projects" className={styles.menuNavLink} activeClassName={styles.active}>
              My Projects
            </NavLink>
          </li>
          <li className={isOpen ? `${styles.menuNavItem} ${styles.open}` : styles.menuNavItem}>
            <NavLink to="/contact" className={styles.menuNavLink} activeClassName={styles.active}>
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
