import React from 'react';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
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
  );
};

export default Hero;
