import React, { useContext } from 'react';
import styles from './DarkModeToggle.module.scss';
import { ThemeContext } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button onClick={toggleDarkMode} className={styles.themeToggleButton}>
      {isDarkMode ? (
        <FaSun style={{ color: 'rgba(210, 49, 49, 0.673)', fontSize: '26px', marginTop: '2px' }} />
      ) : (
        <FaMoon style={{ color: 'rgb(53, 117, 245)', fontSize: '26px', marginTop: '2px' }} />
      )}
    </button>
  );
};

export default DarkModeToggle;
