import React from 'react';
import styles from './Home.module.scss';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import MainContent from '../layout/MainContent';
import PageTemplate from '../templates/PageTemplate';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>TK</title>
        <meta name="description" content="Home page" />
      </Helmet>
      <Header />
      <PageTemplate
        mainContent={
          <MainContent className={styles.homePage}>
            <Hero />
          </MainContent>
        }
      />
      <Footer />
    </>
  );
};

export default Home;
