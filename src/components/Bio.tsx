import React from 'react';
import styles from './Bio.module.scss';
import imageOfMe from '../assets/me_no_bg.png';

const Bio: React.FC = () => {
  return (
    <section className={styles.about}>
      <img src={imageOfMe} alt="Me" className={styles.imageOfMe} />
      <p>
        As a seasoned Frontend Web Developer/Engineer, I bring a unique blend of technical expertise and philosophical
        insight to my work. My approach is grounded in a commitment to <span>simplicity</span>, <span>efficiency</span>,
        and <span>mindfulness</span>, influenced by my studies in philosophy and my dedication to living an intentional
        life.
      </p>
      <p>
        I am deeply passionate about <span>continuous learning</span> and <span>personal growth</span>, constantly
        seeking to enhance my technical skills and broaden my understanding of the digital landscape.
      </p>
      <p>
        My interests extend beyond the screen, encompassing a love for <span>literature</span>, <span>music</span>, and
        engaging with diverse ideas through <span>podcasts</span> and <span>documentaries</span>. I am an advocate for
        creating a more empathetic and fair society, believing strongly in the principles of <span>truth</span>,{' '}
        <span>kindness</span>, and <span>mutual respect</span>. In my professional interactions, I strive to embody
        these values, fostering collaborative and positive relationships with colleagues and clients alike.
      </p>
      <p>
        Driven by the principle of <span>reciprocity</span>, I believe in giving back what I receive, approaching each
        project and team interaction with <span>fairness</span>, <span>empathy</span>, and a
        <span>willingness to understand and relate </span>
        to diverse perspectives. This mindset not only enriches my personal life but also enhances my ability to connect
        with and contribute to diverse teams in the dynamic field of web development.
      </p>
    </section>
  );
};

export default Bio;
