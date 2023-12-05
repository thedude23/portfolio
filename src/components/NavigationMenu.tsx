import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationMenu.module.scss';

type NavigationMenuProps = {
  isOpen: boolean;
};

const NavigationMenu = ({ isOpen }: NavigationMenuProps) => {
  return (
    <nav className={isOpen ? `${styles.open}` : ''}>
      <ul className={isOpen ? `${styles.menuNav} ${styles.open}` : styles.menuNav}>
        <li className={isOpen ? `${styles.menuNavItem} ${styles.open}` : styles.menuNavItem}>
          <NavLink to="/" className={({ isActive }) => `${styles.menuNavLink} ${isActive ? styles.active : ''}`}>
            Home
          </NavLink>
        </li>
        <li className={isOpen ? `${styles.menuNavItem} ${styles.open}` : styles.menuNavItem}>
          <NavLink to="/about" className={({ isActive }) => `${styles.menuNavLink} ${isActive ? styles.active : ''}`}>
            About
          </NavLink>
        </li>
        <li className={isOpen ? `${styles.menuNavItem} ${styles.open}` : styles.menuNavItem}>
          <NavLink
            to="/projects"
            className={({ isActive }) => `${styles.menuNavLink} ${isActive ? styles.active : ''}`}
          >
            Projects
          </NavLink>
        </li>
        <li className={isOpen ? `${styles.menuNavItem} ${styles.open}` : styles.menuNavItem}>
          <NavLink to="/contact" className={({ isActive }) => `${styles.menuNavLink} ${isActive ? styles.active : ''}`}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
