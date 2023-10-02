import React from 'react';
import styles from './HomePage.module.scss';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import MainContent from '../layout/MainContent';
import PageTemplate from '../templates/PageTemplate';
import { Helmet } from 'react-helmet';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>TK's portfolio</title>
        <meta name="description" content="Home page" />
      </Helmet>
      <Header />
      <PageTemplate
        mainContent={
          <MainContent className={styles.homePage}>
            <section className={styles.hero}>
              <h3 className={styles.heroIntro}>Hello, World!</h3>
              <h1 className={styles.heroTitle}>
                <span>T</span>im <span>K</span>oprivnik
              </h1>
              <h2 className={styles.heroSubtitle}>
                <span>Web Developer. </span>
                <span>Thinker. </span>
                <span>Sportsman. </span>
                <span>Gamer. </span>
                <span>Tech Enthusiast. </span>
                <span>Psychology Aficionado. </span>
                <span>Vocal Critic of Productivity-obsessed Culture. </span>
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
