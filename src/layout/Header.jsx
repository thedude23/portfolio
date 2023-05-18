import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

const Header = ({ active }) => {
  return (
    <header>
      <div className={styles.menuBtn}>
        <span className={styles.menuBtn__burger}></span>
      </div>

      <nav>
        <ul className={styles.menuNav}>
          <li className={`${styles.menuNav__item} ${active === 'home' ? styles.active : ''}`}>
            <Link to="/" className={styles.menuNav__link}>
              Home
            </Link>
          </li>
          <li className={`${styles.menuNav__item} ${active === 'about' ? styles.active : ''}`}>
            <Link to="/about" className={styles.menuNav__link}>
              About Me
            </Link>
          </li>
          <li className={`${styles.menuNav__item} ${active === 'projects' ? styles.active : ''}`}>
            <Link to="/projects" className={styles.menuNav__link}>
              My Projects
            </Link>
          </li>
          <li className={`${styles.menuNav__item} ${active === 'contact' ? styles.active : ''}`}>
            <Link to="/contact" className={styles.menuNav__link}>
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  active: PropTypes.string,
};

Header.defaultProps = {
  active: 'home',
};

export default Header;
