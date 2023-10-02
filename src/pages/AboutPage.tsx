import styles from './AboutPage.module.scss';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import MainContent from '../layout/MainContent';
import PageTemplate from '../templates/PageTemplate';
import useFetchData from '../hooks/useFetchData';
import { Helmet } from 'react-helmet';
import imageOfMe from '../assets/me-2023.jpg';

interface AboutData {
  hardSkills: string[];
  softSkills: string[];
  jobs: {
    title: string;
    company: string;
    companyLink: string;
    type: string;
    period: string;
    location: string;
    tasks: string[];
    skills: string[];
  }[];
}

const AboutPage: React.FC = () => {
  const [data, isLoading, error] = useFetchData<AboutData>('../../about.json');

  if (isLoading) {
    return <p className={styles.apiText}>Loading...</p>;
  }

  if (error) {
    return <p className={styles.apiText}>Error: {error.message}</p>;
  }

  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="About me page" />
      </Helmet>
      <Header />
      <PageTemplate
        mainContent={
          <MainContent className={styles.aboutPage}>
            <h1 className={styles.pageTitle}>Bio</h1>
            <h2 className={styles.sectionTitle}>About me</h2>

            <section className={styles.about}>
              <img src={imageOfMe} alt="Me" />
              <p>
                I'm an open-minded individual with a penchant for simplicity and peace. I place great value on living an
                intentional life, free from unnecessary stress, and strive to cultivate a mindset of continuous learning
                and personal growth. My interests span a broad spectrum, from diving into a good book, indulging in
                insightful docuseries, engaging in various sports, exploring new places, and encountering diverse
                people. Music serves as my soul's sanctuary and the sense of progress fuels my zest for life.
                <br />
                <br /> In an ideal world, I envision a society where the pursuit of money and materialistic possessions
                is not the ultimate ambition, and where exploitation does not mar human relations. I dream of a world
                that values empathy, kindness, and fairness over all else.
                <br />
                <br /> I live by the principle of Newton's 3rd law: reciprocity. The respect, kindness, and fairness I
                receive inform how I respond. I strive to uphold fairness and empathy in my interactions and look
                forward to meeting individuals who share the same values. In other words, I give what I get.
              </p>
              <br />

              <h4>"Hard" skills</h4>
              <ul>
                {data?.hardSkills?.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <h4>"Soft" skills</h4>
              <ul>
                {data?.softSkills?.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </section>

            <section className={styles.jobs}>
              <h2 className={styles.sectionTitle}>Jobs</h2>
              {data?.jobs?.map((job, index) => (
                <article className={styles.job} key={index}>
                  <h4>{job.title}</h4>
                  <div className={styles.jobDetails}>
                    <p>
                      <a href={job.companyLink} target="_blank" rel="noreferrer noopener">
                        {job.company}
                      </a>{' '}
                      · {job.type}
                    </p>
                    <p>{job.period}</p>
                    <p>{job.location}</p>
                  </div>
                  <ul>
                    {job.tasks.map((task, index) => (
                      <li key={index}>{task}</li>
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
