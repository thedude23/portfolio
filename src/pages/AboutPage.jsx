import Header from '../layout/Header';
import Footer from '../layout/Footer';
import MainContent from '../layout/MainContent';
import PageTemplate from '../templates/PageTemplate';
import styles from './AboutPage.module.scss';
import { useEffect, useState } from 'react';

const AboutPage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('../../about.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('There was a problem fetching the data: ', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <p className={styles.apiLoading}>Loading...</p>;
  }

  return (
    <>
      <Header />
      <PageTemplate
        mainContent={
          <MainContent className={styles.aboutPage}>
            <h1 className={styles.pageTitle}>Bio</h1>
            <h2 className={styles.sectionTitle}>About me</h2>

            <section className={styles.about}>
              <p>
                I'm an open-minded averagely-dressed ape in search of a peaceful, intentional, and unstressed life, who
                likes to learn new things, self-improve, read, watch (docu)series, do sports, travel, and meet unique
                people. Two things I cannot live without are my-type-of music and the feeling of not being stuck. One of
                my idealistic life goals is to witness a world where money (or materialistic bs in general) wouldn't be
                the primary goal of it all, and exploitation not an everyday human relation. Above all else, I try to be
                fair and empathetic, and I expect the same from anyone else. In the end, I'm like Newton's 3rd law -- I
                give what I get.
              </p>
              <br />
              <p>I don't like judging my own skills and knowledge, but if I have to, here it is.</p>

              <h4>"Hard" skills</h4>
              <ul>{data && data.hardSkills && data.hardSkills.map((skill, index) => <li key={index}>{skill}</li>)}</ul>
              <h4>"Soft" skills</h4>
              <ul>{data && data.softSkills && data.softSkills.map((skill, index) => <li key={index}>{skill}</li>)}</ul>
            </section>

            <section className={styles.jobs}>
              <h2 className={styles.sectionTitle}>Jobs</h2>
              {data &&
                data.jobs &&
                data.jobs.map((job, index) => (
                  <article className={styles.job} key={index}>
                    <h4>{job.title}</h4>
                    <div className={styles.jobDetails}>
                      <p>
                        {job.company} · {job.type}
                      </p>
                      <p>{job.period}</p>
                      <p>{job.location}</p>
                    </div>
                    <ul>
                      {job.tasks.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                      <li>
                        <strong>Skills:</strong> {job.skills.join(' · ')}
                      </li>
                    </ul>
                  </article>
                ))}
            </section>
          </MainContent>
        }
      />
      <Footer />
    </>
  );
};

export default AboutPage;
