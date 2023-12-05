import React from 'react';
import styles from './Home.module.scss';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import MainContent from '../layout/MainContent';
import PageTemplate from '../templates/PageTemplate';
import { Helmet } from 'react-helmet';

const Home: React.FC = () => {
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
              <h1 className={styles.heroTitle}>
                <div className={styles.heroIntro}>My name is</div>
                <span>T</span>im <span>K</span>oprivnik
                <div className={styles.heroIntro}>and I am a</div>
              </h1>
              <h2 className={styles.heroSubtitle}>
                <span>(FE) Web Developer. </span>
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

export default Home;
