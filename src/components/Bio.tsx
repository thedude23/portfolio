import React from 'react';
import styles from './Bio.module.scss';
import imageOfMe from '../assets/me_no_bg.png';

const Bio: React.FC = () => {
  return (
    <section className={styles.about}>
      <img src={imageOfMe} alt="Me" className={styles.imageOfMe} />
      <p>
        I'm an <span>open-minded</span> individual with a penchant for <span>simplicity</span> and
        <span> peace</span>. I place great value on living an <span>intentional</span> life guided by
        <span> Buddhist</span> principles, and strive to cultivate a mindset of
        <span> continuous learning</span> and <span>personal growth</span>. My interests span a broad spectrum, from{' '}
        <span> gaming</span>, diving into a good <span>book</span>, listening to chill <span>music</span>, watching{' '}
        <span>educational podcasts</span> and <span>docuseries</span>, engaging in various
        <span> sports</span>, <span>exploring</span> new places, and encountering nonconformist people. Music serves as
        my soul's sanctuary and the sense of
        <span> personal growth</span> fuels my zest for life.
      </p>
      <p>
        In an ideal world, I envision a society where the pursuit of money and materialistic possessions is not the
        ultimate ambition, and where exploitation does not mar human relations. I dream of a world that values{' '}
        <span>truth, empathy, kindness, and fairness</span> over all else. (Delusional, I know.)
      </p>
      <p>
        I live by the principle of Newton's 3rd law: <span>reciprocity</span>. The respect, kindness, and fairness I
        receive inform how I respond. I strive to uphold fairness and empathy in my interactions and look forward to
        meeting individuals who share the same values. In other words,
        <span> I give what I get</span>.
      </p>
    </section>
  );
};

export default Bio;
