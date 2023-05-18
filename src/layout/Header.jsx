import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  console.log(styles);
  return (
    <header>
      <div className={styles.menuBtn}>
        <span className={styles.menuBtnBurger}></span>
      </div>

      <nav>
        <ul className={styles.menuNav}>
          <li className={styles.menuNavItem}>
            <NavLink exact to="/" className={styles.menuNavLink} activeClassName={styles.active}>
              Home
            </NavLink>
          </li>
          <li className={styles.menuNavItem}>
            <NavLink to="/about" className={styles.menuNavLink} activeClassName={styles.active}>
              About Me
            </NavLink>
          </li>
          <li className={styles.menuNavItem}>
            <NavLink to="/projects" className={styles.menuNavLink} activeClassName={styles.active}>
              My Projects
            </NavLink>
          </li>
          <li className={styles.menuNavItem}>
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
