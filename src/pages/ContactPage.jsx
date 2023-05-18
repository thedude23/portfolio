import Header from '../layout/Header';
import Footer from '../layout/Footer';
import styles from './ContactPage.module.scss';

const ContactPage = () => {
  return (
    <>
      <Header />

      <main className={styles.contactPage}>
        <section className={styles.contact}>
          <h2 className={styles.section__title}>Contact me</h2>

          <div className={styles.contact__list}>
            <div className={styles.contact__email}>
              <i className="fas fa-envelope"></i> Email
              <div className="text-secondary">t.koprivnik@gmail.com</div>
            </div>

            <div className={styles.contact__phone}>
              <i className="fas fa-mobile-alt"></i> Phone
              <div className="text-secondary">(+386)51 412 337</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;
