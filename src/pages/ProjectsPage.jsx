import Header from '../layout/Header';
import Footer from '../layout/Footer';
import MainContent from '../layout/MainContent';
import PageTemplate from '../templates/PageTemplate';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import styles from './ProjectsPage.module.scss';

const AboutPage = () => {
  return (
    <>
      <Header />
      <PageTemplate
        mainContent={
          <MainContent className={styles.projectsPage}>
            <h1 className={styles.pageTitle}>Projects</h1>
            <h2 className={styles.sectionTitle}>My free time projects</h2>

            <p>
              For more, check{' '}
              <a href="https://github.com/tim-koprivnik" target="blank">
                Github
              </a>
              .
            </p>

            <section className={styles.projects}>
              <div className={styles.project}>
                <h4>Meme Generator app (React)</h4>
                <img src="src/assets/memegenerator.jpg" alt="My Project" />
                <div className={styles.projectBtns}>
                  <a
                    href="https://tim-koprivnik.github.io/memegenerator/dist/"
                    target="blank"
                    className={styles.projectBtn}
                  >
                    <AiFillEye /> View
                  </a>
                  <a href="https://github.com/tim-koprivnik/memegenerator" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Github
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Website template</h4>
                <img src="src/assets/natours.png" alt="My Project" />
                <div className={styles.projectBtns}>
                  <a href="https://tim-koprivnik.github.io/natours/" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                  <a href="https://github.com/tim-koprivnik/natours" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Github
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Website template</h4>
                <img src="src/assets/nexter.png" alt="My Project" />
                <div className={styles.projectBtns}>
                  <a href="https://tim-koprivnik.github.io/nexter/" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                  <a href="https://github.com/tim-koprivnik/nexter" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Github
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Website template and design</h4>
                <img src="src/assets/soundwave.jpg" alt="My Project" />
                <div className={styles.projectBtns}>
                  <a href="https://tim-koprivnik.github.io/soundwave" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                  <a href="https://github.com/tim-koprivnik/soundwave" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Github
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Netflix starter page template</h4>
                <img src="src/assets/netflixclone.jpg" alt="My Project" />
                <div className={styles.projectBtns}>
                  <a href="https://tim-koprivnik.github.io/netflix-clone/" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                  <a href="https://github.com/tim-koprivnik/netflix-clone" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Github
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Pig Game (JS)</h4>
                <br />
                <img src="src/assets/piggame.jpg" alt="My Project" />
                <div className={styles.projectBtns}>
                  <a href="https://tim-koprivnik.github.io/piggame/" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                  <a href="https://github.com/tim-koprivnik/piggame" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Github
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Budget app (JS)</h4>
                <br />
                <img src="src/assets/budgety.png" alt="My Project" />
                <div className={styles.projectBtns}>
                  <a href="https://tim-koprivnik.github.io/budgety/" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                  <a href="https://github.com/tim-koprivnik/budgety" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Github
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Website (WordPress)</h4>
                <img src="src/assets/subsidium.jpg" alt="My Project" />
                <div className={styles.projectBtns}>
                  <a href="https://obnovadoma.subsidium.si/" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                  <a href="https://github.com/tim-koprivnik/WP_site" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Github
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Website template</h4>
                <img src="src/assets/ogani.jpg" alt="My Project" />
                <div className={styles.projectBtns}>
                  <a href="https://tim-koprivnik.github.io/ogani/" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                  <a href="https://github.com/tim-koprivnik/ogani" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Github
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Design</h4>
                <img src="src/assets/alivio.png" alt="My Project" />
                <div className={styles.projectBtns}>
                  <a href="https://github.com/tim-koprivnik/alivio" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Github
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Website template</h4>
                <img src="src/assets/crisp-studio.png" alt="My Project" />
                <div className={styles.projectBtns}>
                  <a href="https://tim-koprivnik.github.io/crisp-studio/" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                  <a href="https://github.com/tim-koprivnik/crisp-studio" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Github
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Website template (Shopify)</h4>
                <img src="src/assets/allbirds.png" alt="My Project" />
                <div className={styles.projectBtns}>
                  <a href="https://tim-koprivnik.github.io/allbirds/" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                  <a href="https://github.com/tim-koprivnik/allbirds" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Github
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Blog (WordPress)</h4>
                <img src="src/assets/something-different.png" alt="My Project" />
                <div className={styles.projectBtns}>
                  <a href="https://blog-something-different.com/en/" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                  <a href="#" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Github
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Website template</h4>
                <img src="src/assets/trillo.png" alt="My Project" />
                <div className={styles.projectBtns}>
                  <a href="https://tim-koprivnik.github.io/trillo/" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                  <a href="https://github.com/tim-koprivnik/trillo" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Github
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Design</h4>
                <img src="src/assets/covid-19.jpg" alt="My Project" />
                <div className={styles.projectBtns}>
                  <a href="https://github.com/tim-koprivnik/covid" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Github
                  </a>
                </div>
              </div>

              <div className={styles.project}>
                <h4>Portfolio</h4>
                <img src="src/assets/portfolio.png" alt="My Project" />
                <div className={styles.projectBtns}>
                  <a href="https://tim-koprivnik.github.io/tim-koprivnik/" target="blank" className={styles.projectBtn}>
                    <AiFillEye /> View
                  </a>
                  <a href="https://github.com/tim-koprivnik/tim-koprivnik" target="blank" className={styles.projectBtn}>
                    <AiFillGithub /> Github
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
