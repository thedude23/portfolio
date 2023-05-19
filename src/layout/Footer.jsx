import styles from './Footer.module.scss';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <section className={styles.socialIcons}>
        <a href="https://twitter.com/TimKoprivnik" target="_blank" rel="noreferrer noopener">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com/tix00" target="_blank" rel="noreferrer noopener">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/tim.koprivnik/" target="_blank" rel="noreferrer noopener">
          <FaInstagram />
        </a>
        <a href="https://github.com/tim-koprivnik" target="_blank" rel="noreferrer noopener">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/tim-koprivnik-0238b4147/" target="_blank" rel="noreferrer noopener">
          <FaLinkedinIn />
        </a>
      </section>

      <div className={styles.copyright}>&copy; Copyright {new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;
