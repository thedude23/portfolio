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
              <h3 className={styles.heroIntro}>
                Hello, <input autoFocus type="text" placeholder="INSERT YOUR NAME"></input> !
              </h3>
              <h1 className={styles.heroTitle}>
                <div className={styles.heroIntro}>My name is</div>
                <span>T</span>im <span>K</span>oprivnik
                <div className={styles.heroIntro}>and I am a</div>
              </h1>
              <h2 className={styles.heroSubtitle}>
                <span>Web Developer. </span>
                <span>Philosopher. </span>
                <span>Sportsman. </span>
                <span>Gamer. </span>
                <span>Tech Enthusiast. </span>
                <span>Psychology Aficionado. </span>
                <span>Vocal Critic of Work-obsessed Culture. </span>
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
