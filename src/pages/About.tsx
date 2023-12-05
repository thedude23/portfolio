import React from 'react';
import styles from './About.module.scss';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import MainContent from '../layout/MainContent';
import PageTemplate from '../templates/PageTemplate';
import useFetch from '../hooks/useFetch';
import { Helmet } from 'react-helmet';
import imageOfMe from '../assets/me_no_bg.png';

type AboutData = {
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
};

type Keywords = string[];

const highlightKeywords = (text: string, keywords: Keywords) => {
  const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
  return text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
};

const keywords = [
  'HTML',
  'Sass',
  'CSS',
  'JavaScript',
  'jQuery',
  'TypeScript',
  'React library',
  'React',
  'Frontity',
  'Next.js',
  'BEM',
  'SMACSS',
  'Atomic design',
  'WCAG',
  'npm',
  'yarn',
  'gulp',
  'Webpack',
  'Docker',
  'Git',
  'REST',
  'GraphQL',
  'Apollo',
  'Lighthouse',
  'PageSpeed Insights',
  'SQL',
  'MySQL',
  'Supabase',
  'Firebase',
  'PHP',
  'Python',
  'Flask',
  'Drupal',
  'WordPress',
  'Squarespace',
  'Wix',
  'Adobe XD',
  'Figma',
  'Adobe',
  'Photoshop',
  'agile scrum',
  'English',
  'reliability',
  'dedication',
  'self-motivation',
  'curiosity',
  'desire to learn and improve',
  'methodical',
  'organized',
  'fair',
  'kindness',
  'understand',
  'Technical support',
];

const About: React.FC = () => {
  const [data, isLoading, error] = useFetch<AboutData>('../../about.json');

  if (isLoading) {
    return <p className={styles.apiText}>Loading...</p>;
  }

  if (error) {
    return <p className={styles.apiText}>Error: {error.message}</p>;
  }

  const createSpecialMarkup = (text: string) => {
    return { __html: highlightKeywords(text, keywords) };
  };

  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="About page" />
      </Helmet>
      <Header />
      <PageTemplate
        mainContent={
          <MainContent className={styles.aboutPage}>
            <h1 className={styles.pageTitle}>Bio</h1>
            <h2 className={styles.sectionTitle}>About me</h2>

            <section className={styles.about}>
              <img src={imageOfMe} alt="Me" className={styles.imageOfMe} />
              <p>
                I'm an <span>open-minded</span> individual with a penchant for <span>simplicity</span> and
                <span> peace</span>. I place great value on living an <span>intentional</span> life guided by
                <span> Buddhist</span> principles, and strive to cultivate a mindset of
                <span> continuous learning</span> and <span>personal growth</span>. My interests span a broad spectrum,
                from <span> gaming</span>, diving into a good <span>book</span>, listening to chill <span>music</span>,
                watching <span>educational podcasts</span> and <span>docuseries</span>, engaging in various
                <span> sports</span>, exploring new <span>places</span>, and encountering nonconformist people. Music
                serves as my soul's sanctuary and the sense of
                <span> personal growth</span> fuels my zest for life.
              </p>
              <p>
                In an ideal world, I envision a society where the pursuit of money and materialistic possessions is not
                the ultimate ambition, and where exploitation does not mar human relations. I dream of a world that
                values <span>truth, empathy, kindness, and fairness</span> over all else.
              </p>
              <p>
                I live by the principle of Newton's 3rd law: <span>reciprocity</span>. The respect, kindness, and
                fairness I receive inform how I respond. I strive to uphold fairness and empathy in my interactions and
                look forward to meeting individuals who share the same values. In other words,
                <span> I give what I get</span>.
              </p>

              <h4>"Hard" skills</h4>
              <ul>
                {data?.hardSkills?.map((skill, index) => (
                  <li key={index} dangerouslySetInnerHTML={createSpecialMarkup(skill)} />
                ))}
              </ul>
              <h4>"Soft" skills</h4>
              <ul>
                {data?.softSkills?.map((skill, index) => (
                  <li key={index} dangerouslySetInnerHTML={createSpecialMarkup(skill)} />
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
                      <a
                        className={styles.companyLink}
                        href={job.companyLink}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
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
                      <strong>Top Skills:</strong>{' '}
                      {job.skills.map((skill, index) => (
                        <React.Fragment key={index}>
                          {index !== 0 && ' · '}
                          <span dangerouslySetInnerHTML={createSpecialMarkup(skill)} />
                        </React.Fragment>
                      ))}
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

export default About;
