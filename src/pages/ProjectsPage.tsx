import styles from './ProjectsPage.module.scss';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import MainContent from '../layout/MainContent';
import PageTemplate from '../templates/PageTemplate';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Helmet } from 'react-helmet';
import useFetchData from '../hooks/useFetch';
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

interface Link {
  type: string;
  url: string;
  icon: string;
}

interface Project {
  name: string;
  image: keyof typeof imageMap;
  description: string;
  links: Link[];
}

interface ProjectsData {
  projects: Project[];
}

const imageMap: { [key: string]: string } = {
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

const ProjectsPage: React.FC = () => {
  const [data, isLoading, error] = useFetchData<ProjectsData>('../../projects.json');

  if (isLoading) {
    return <p className={styles.apiText}>Loading...</p>;
  }

  if (error) {
    return <p className={styles.apiText}>Error: {error.message}</p>;
  }

  return (
    <>
      <Helmet>
        <title>Projects</title>
        <meta name="description" content="Projects page" />
      </Helmet>
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
              {data?.projects?.map((project: Project, index: number) => (
                <div className={styles.project} key={index}>
                  <h4 className={styles.projectName}>{project.name}</h4>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <img src={imageMap[project.image]} alt={project.name} />
                  <div className={styles.projectLinks}>
                    {project.links.map((link: Link, linkIndex: number) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        className={styles.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className={`icon ${link.icon}`} />
                        {link.type}
                      </a>
                    ))}
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

export default ProjectsPage;
