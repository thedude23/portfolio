import styles from './Footer.module.scss';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <section className={styles.socialIcons}>
        <a href="https://twitter.com/TimKoprivnik" target="blank">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com/tix00" target="blank">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/tim.koprivnik/" target="blank">
          <FaInstagram />
        </a>
        <a href="https://github.com/tim-koprivnik" target="blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/tim-koprivnik-0238b4147/" target="blank">
          <FaLinkedinIn />
        </a>
      </section>

      <div className="copyright">&copy; Copyright {new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;
