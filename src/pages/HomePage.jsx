import Header from '../layout/Header';
import Footer from '../layout/Footer';
import MainContent from '../layout/MainContent';
import PageTemplate from '../templates/PageTemplate';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <>
      <Header />
      <PageTemplate
        mainContent={
          <MainContent className={styles.homePage}>
            <section className={styles.hero}>
              <h3 className={styles.heroIntro}>Hello, World!</h3>
              <h1 className={styles.heroTitle}>Tim Koprivnik</h1>
              <h2 className={styles.heroSubtitle}>
                <span>Developer. </span>
                <span>Thinker. </span>
                <span>Sportsman. </span>
                <span>Gamer. </span>
                <span>Technology enthusiast. </span>
                <span>Psychology nerd. </span>
                <span>Passionate Antichrist of modern corporate world. </span>
                <span>Fellow human.</span>
              </h2>
            </section>
          </MainContent>
        }
      />
      <Footer />
    </>
  );
};

export default HomePage;
