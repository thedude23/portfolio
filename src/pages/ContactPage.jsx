import Header from '../layout/Header';
import Footer from '../layout/Footer';
import styles from './ContactPage.module.scss';

const ContactPage = () => {
  return (
    <>
      <Header />
      <main className={styles.contactPage}>
        <section className={styles.contact}>
          <h2 className={styles.sectionTitle}>Contact me</h2>

          <div className={styles.contactList}>
            <div className={styles.contactEmail}>
              <i className="fas fa-envelope"></i> Email
              <div className="text-secondary">t.koprivnik@gmail.com</div>
            </div>

            <div className={styles.contactPhone}>
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
