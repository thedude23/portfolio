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

const AboutPage = () => {
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
              <a href="https://github.com/tim-koprivnik" target="blank">
                Github
              </a>
              .
            </p>

            <section className={styles.projects}>
              <div className={styles.project}>
                <h4>Portfolio (React)</h4>
                <LazyLoadImage img src={portfolioImg} alt="Portfolio project" />
                <div className={styles.projectBtns}>
                  <a href="https://tim-koprivnik.netlify.app/" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                  <a href="https://github.com/tim-koprivnik/portfolio" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Code
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Meme Generator app (React)</h4>
                <LazyLoadImage img src={memeGeneratorImg} alt="Meme Generator project" />
                <div className={styles.projectBtns}>
                  <a href="https://ktix-meme-generator.netlify.app/" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                  <a href="https://github.com/tim-koprivnik/memegenerator" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Code
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Forkify app (JS)</h4>
                <LazyLoadImage img src={forkifyImg} alt="Forkify project" />
                <div className={styles.projectBtns}>
                  <a href="https://ktix-forkify.netlify.app/" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                  <a href="https://github.com/tim-koprivnik/forkify" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Code
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Pig Game (JS)</h4>
                <br />
                <LazyLoadImage img src={pigGameImg} alt="Pig game project" />
                <div className={styles.projectBtns}>
                  <a href="https://ktix-piggame.netlify.app/" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                  <a href="https://github.com/tim-koprivnik/piggame" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Code
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Budget app (JS)</h4>
                <br />
                <LazyLoadImage img src={budgetyImg} alt="Budgety project" />
                <div className={styles.projectBtns}>
                  <a href="https://ktix-budgety.netlify.app/" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                  <a href="https://github.com/tim-koprivnik/budgety" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Code
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Website (WordPress)</h4>
                <LazyLoadImage img src={subsidiumImg} alt="Subsidium project" />
                <div className={styles.projectBtns}>
                  <a href="https://obnovadoma.subsidium.si/" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Blog (WordPress)</h4>
                <LazyLoadImage img src={somethingDifferentImg} alt="Something Different project" />
                <div className={styles.projectBtns}>
                  <a href="https://blog-something-different.com/en/" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Website template</h4>
                <LazyLoadImage img src={oganiImg} alt="Ogani project" />
                <div className={styles.projectBtns}>
                  <a href="https://ktix-ogani.netlify.app/" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                  <a href="https://github.com/tim-koprivnik/ogani" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Code
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Website template</h4>
                <LazyLoadImage img src={natoursImg} alt="Natours project" />
                <div className={styles.projectBtns}>
                  <a href="https://ktix-natours.netlify.app/" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                  <a href="https://github.com/tim-koprivnik/natours" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Code
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Website template</h4>
                <LazyLoadImage img src={nexterImg} alt="Nexter project" />
                <div className={styles.projectBtns}>
                  <a href="https://ktix-nexter.netlify.app/" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                  <a href="https://github.com/tim-koprivnik/nexter" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Code
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Website template</h4>
                <LazyLoadImage img src={trilloImg} alt="Trillo project" />
                <div className={styles.projectBtns}>
                  <a href="https://ktix-trillo.netlify.app/" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                  <a href="https://github.com/tim-koprivnik/trillo" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Code
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Website template</h4>
                <LazyLoadImage img src={crispStudioImg} alt="Crisp studio project" />
                <div className={styles.projectBtns}>
                  <a href="https://ktix-crisp-studio.netlify.app/" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                  <a href="https://github.com/tim-koprivnik/crisp-studio" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Code
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Website template & design</h4>
                <LazyLoadImage img src={soundwaveImg} alt="Soundwave project" />
                <div className={styles.projectBtns}>
                  <a href="https://ktix-soundwave.netlify.app/" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                  <a href="https://github.com/tim-koprivnik/soundwave" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Code
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Website template (Shopify)</h4>
                <LazyLoadImage img src={allbirdsImg} alt="Allbirds project" />
                <div className={styles.projectBtns}>
                  <a href="https://ktix-allbirds.netlify.app/" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                  <a href="https://github.com/tim-koprivnik/allbirds" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Code
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Netflix starter page template</h4>
                <LazyLoadImage img src={netflixCloneImg} alt="Netflix clone project" />
                <div className={styles.projectBtns}>
                  <a href="https://ktix-netflix.netlify.app/" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                  <a href="https://github.com/tim-koprivnik/netflix-clone" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Code
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Design</h4>
                <LazyLoadImage img src={covidImg} alt="Covid-19 project" />
                <div className={styles.projectBtns}>
                  <a href="https://github.com/tim-koprivnik/covid" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Code
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Design</h4>
                <LazyLoadImage img src={alivioImg} alt="Alivio project" />
                <div className={styles.projectBtns}>
                  <a href="https://github.com/tim-koprivnik/alivio" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Code
                  </a>
                </div>
              </div>
            </section>
          </MainContent>
        }
      />
      <Footer />
    </>
  );
};

export default AboutPage;
