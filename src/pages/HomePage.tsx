import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import MainContent from '../layout/MainContent';
import PageTemplate from '../templates/PageTemplate';
import styles from './HomePage.module.scss';
import { Helmet } from 'react-helmet';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tim Koprivnik</title>
        <meta name="description" content="Home page" />
      </Helmet>
      <Header />
      <PageTemplate
        mainContent={
          <MainContent className={styles.homePage}>
            <section className={styles.hero}>
              <h3 className={styles.heroIntro}>Greetings, Digital Traveler!</h3>
              <h1 className={styles.heroTitle}>Tim Koprivnik</h1>
              <h2 className={styles.heroSubtitle}>
                <span>Developer. </span>
                <span>Thinker. </span>
                <span>Sportsman. </span>
                <span>Gamer. </span>
                <span>Tech Enthusiast. </span>
                <span>Psychology Aficionado. </span>
                <span>Vocal Critic of Modern Corporate Practices. </span>
                <span>Fellow Human. </span>
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
