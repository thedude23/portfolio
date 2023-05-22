import Header from '../layout/Header';
import Footer from '../layout/Footer';
import styles from './ContactPage.module.scss';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';

const ContactPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.contactPage}>
        <section className={styles.contact}>
          <h2 className={styles.sectionTitle}>Contact me</h2>

          <div className={styles.contactList}>
            <div className={styles.contactEmail}>
              <span>
                <BsFillEnvelopeFill /> Email
              </span>
              <a href="mailto:t.koprivnik@gmail.com">t.koprivnik@gmail.com</a>
            </div>

            <div className={styles.contactPhone}>
              <span>
                <BsFillTelephoneFill /> Phone
              </span>
              <a href="tel:0038651412337">(+386)51 412 337</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
