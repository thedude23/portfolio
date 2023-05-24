import styles from './Footer.module.scss';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiDocumentDownload } from 'react-icons/hi';

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <footer>
      <section className={styles.socialIcons}>
        <a href="https://twitter.com/TimKoprivnik" target="_blank" rel="noreferrer noopener" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com/tix00" target="_blank" rel="noreferrer noopener" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/tim.koprivnik/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/tim-koprivnik-0238b4147/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/tim-koprivnik" target="_blank" rel="noreferrer noopener" aria-label="Github">
          <FaGithub />
        </a>
        <a href="/CV_Koprivnik_Tim.pdf" download aria-label="CV">
          <HiDocumentDownload />
        </a>
      </section>

      <div className={styles.copyright}>&copy; {new Date().getFullYear()} Tim Koprivnik</div>
    </footer>
  );
};

export default Footer;
