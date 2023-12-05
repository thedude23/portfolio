import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { ThemeContext } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  const handleMenuClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      {/* <button onClick={toggleDarkMode} className={styles.themeToggleButton}>
        {isDarkMode ? (
          <FaSun style={{ color: 'rgb(53, 117, 245)', fontSize: '26px', marginTop: '2px' }} />
        ) : (
          <FaMoon style={{ color: 'rgb(53, 117, 245)', fontSize: '26px', marginTop: '2px' }} />
        )}
      </button> */}

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
            <NavLink
              to="/contact"
              className={({ isActive }) => `${styles.menuNavLink} ${isActive ? styles.active : ''}`}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
