import React from 'react';
import styles from './About.module.scss';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import MainContent from '../layout/MainContent';
import PageTemplate from '../templates/PageTemplate';
import useFetch from '../hooks/useFetch';
import { Helmet } from 'react-helmet';
import imageOfMe from '../assets/me_no_bg.png';
import JobList from '../components/JobList';
import Bio from '../components/Bio';
import SkillList from '../components/SkillList';

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
  'React Hook Form',
  'React',
  'Frontity',
  'Next.js',
  'SSG',
  'SSR',
  'Router',
  'Redux',
  'Tanstack Query',
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
  'GraphQL',
  'Apollo',
  'Storybook',
  'Jest',
  'Testing library',
  'Lighthouse',
  'PageSpeed Insights',
  'SEO',
  'SQL',
  'MySQL',
  'Supabase',
  'Firebase',
  'PHP',
  'Node.js',
  'Express',
  'MongoDB',
  'Mongoose',
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
  'consistency',
  'reliability',
  'dedication',
  'open-minded',
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
            <Bio />
            <SkillList
              hardSkills={data?.hardSkills || []}
              softSkills={data?.softSkills || []}
              createSpecialMarkup={createSpecialMarkup}
            />
            <JobList jobs={data?.jobs || []} createSpecialMarkup={createSpecialMarkup} />
          </MainContent>
        }
      />
      <Footer />
    </>
  );
};

export default About;
