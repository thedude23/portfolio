import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import styles from './Header.module.scss';

interface Props {}

const Header: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header>
      <div className={isOpen ? `${styles.menuBtn} ${styles.open}` : styles.menuBtn} onClick={handleMenuClick}>
        <span className={isOpen ? `${styles.menuBtnBurger} ${styles.open}` : styles.menuBtnBurger}></span>
      </div>

      <nav className={isOpen ? `${styles.open}` : ''}>
        <ul className={isOpen ? `${styles.menuNav} ${styles.open}` : styles.menuNav}>
          <li className={isOpen ? `${styles.menuNavItem} ${styles.open}` : styles.menuNavItem}>
            <NavLink to="/" className={({ isActive }) => `${styles.menuNavLink} ${isActive ? styles.active : ''}`}>
              Home
            </NavLink>
          </li>
          <li className={isOpen ? `${styles.menuNavItem} ${styles.open}` : styles.menuNavItem}>
            <NavLink to="/about" className={({ isActive }) => `${styles.menuNavLink} ${isActive ? styles.active : ''}`}>
              About Me
            </NavLink>
          </li>
          <li className={isOpen ? `${styles.menuNavItem} ${styles.open}` : styles.menuNavItem}>
            <NavLink
              to="/projects"
              className={({ isActive }) => `${styles.menuNavLink} ${isActive ? styles.active : ''}`}
            >
              My Projects
            </NavLink>
          </li>
          <li className={isOpen ? `${styles.menuNavItem} ${styles.open}` : styles.menuNavItem}>
            <NavLink
              to="/contact"
              className={({ isActive }) => `${styles.menuNavLink} ${isActive ? styles.active : ''}`}
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
