import Header from '../layout/Header';
import Footer from '../layout/Footer';
import MainContent from '../layout/MainContent';
import PageTemplate from '../templates/PageTemplate';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import styles from './ProjectsPage.module.scss';
import memeGeneratorImg from '../assets/memegenerator.jpg';
import natoursImg from '../assets/natours.png';
import nexterImg from '../assets/nexter.png';
import soundwaveImg from '../assets/soundwave.jpg';
import netflixCloneImg from '../assets/netflixclone.jpg';
import pigGameImg from '../assets/piggame.jpg';
import budgetyImg from '../assets/budgety.png';
import subsidiumImg from '../assets/subsidium.jpg';
import oganiImg from '../assets/ogani.jpg';
import alivioImg from '../assets/alivio.png';
import allbirdsImg from '../assets/allbirds.png';
import somethingDifferentImg from '../assets/something-different.png';
import trilloImg from '../assets/trillo.png';
import crispStudioImg from '../assets/crisp-studio.png';
import covidImg from '../assets/covid-19.jpg';
import portfolioImg from '../assets/portfolio.png';
import forkifyImg from '../assets/forkify.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useEffect, useState } from 'react';

const imageMap = {
  'memegenerator.jpg': memeGeneratorImg,
  'natours.png': natoursImg,
  'nexter.png': nexterImg,
  'soundwave.jpg': soundwaveImg,
  'netflixclone.jpg': netflixCloneImg,
  'piggame.jpg': pigGameImg,
  'budgety.png': budgetyImg,
  'subsidium.jpg': subsidiumImg,
  'ogani.jpg': oganiImg,
  'alivio.png': alivioImg,
  'allbirds.png': allbirdsImg,
  'something-different.png': somethingDifferentImg,
  'trillo.png': trilloImg,
  'crisp-studio.png': crispStudioImg,
  'covid-19.jpg': covidImg,
  'portfolio.png': portfolioImg,
  'forkify.png': forkifyImg,
};

const AboutPage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('../../projects.json');
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
          <MainContent className={styles.projectsPage}>
            <h1 className={styles.pageTitle}>Projects</h1>
            <h2 className={styles.sectionTitle}>Some of my personal projects</h2>

            <p>
              For more, check{' '}
              <a href="https://github.com/tim-koprivnik" target="_blank" rel="noreferrer noopener">
                Github
              </a>
              .
            </p>

            <section className={styles.projects}>
              {data &&
                data.projects &&
                data.projects.map((project) => (
                  <div className={styles.project} key={project.name}>
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                    <LazyLoadImage src={imageMap[project.image]} alt={project.description} />
                    <div className={styles.projectBtns}>
                      {project.links.map(
                        (link) =>
                          link.url && (
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noreferrer noopener"
                              className={styles.projectBtn}
                              key={link.type}
                            >
                              {link.icon === 'AiFillEye' ? <AiFillEye /> : <AiFillGithub />} {link.type}
                            </a>
                          ),
                      )}
                    </div>
                  </div>
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
