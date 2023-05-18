import Header from '../layout/Header';
import Footer from '../layout/Footer';
import MainContent from '../layout/MainContent';
import PageTemplate from '../templates/PageTemplate';
import styles from './AboutPage.module.scss';

const AboutPage = () => {
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
              <ul>
                <li>Around 4 years of work experience in the IT field</li>
                <li>Excellent knowledge of HTML and CSS</li>
                <li>Proficiency using CSS preprocessors (Sass)</li>
                <li>Proficiency with front-end methodologies (BEM, SMACSS, Atomic design)</li>
                <li>Good knowledge of JavaScript (ES6), also jQuery</li>
                <li>Good knowledge of React </li>
                <li>Experience with Next.js</li>
                <li>Basic knowledge of PHP</li>
                <li>FFamiliarity with modern back-end frameworks (Laravel)</li>
                <li>Knowledge of interacting with APIs</li>
                <li>Experience working with databases (MySQL, Postgres)</li>
                <li>
                  Experience working with package managers (composer, npm, yarn), pre-processors (Sass, Babel), bundlers
                  (Webpack), task runners (gulp), code linters (ESLint, Stylelint)
                </li>
                <li>Experience with CMS (Drupal, WordPress)</li>
                <li>Proficiency with code versioning tools (Git, GitHub Desktop) and experience with code review</li>
                <li>Knowledge of web accessibility standards and guidelines</li>
                <li>Proficiency with cross-browser and cross-device testing sites (Browserstack, LambdaTest)</li>
                <li>Experience with Terminal, Docker, and other local environment setups (MAMP)</li>
                <li>Experience with Putty, WinSCP, SSH, FileZilla, cPanel</li>
                <li>Experience with page load speed optimization (Lighthouse, PageSpeed Insights)</li>
                <li>Experience with SEOa</li>
                <li>Solid understanding of UI/UX principles</li>
                <li>Experience working with Adobe XD / Figma</li>
                <li>Experienced with Agile scrum methodology</li>
                <li>
                  Proficiency with project management and team communication tools (Jira, Basecamp, Trello, Freshdesk,
                  Slack)
                </li>
                <li>Experience with Project management role</li>
                <li>Experience with Technical Support role</li>
              </ul>

              <h4>"Soft" skills</h4>
              <ul>
                <li>Active knowledge of the English language</li>
                <li>Disciplined and organized</li>
                <li>Self-motivated, curious, and persistent</li>
                <li>Fast learner</li>
                <li>Kind, non-conﬂicting, open-minded, and, above else, fair</li>
                <li>Natural psychologist</li>
              </ul>
            </section>

            <section className={styles.jobs}>
              <h2 className={styles.sectionTitle}>Jobs</h2>
              <article className={styles.job}>
                <h4>Frontend Developer</h4>
                <div className={styles.jobDetails}>
                  <p>Agiledrop · Full-time</p>
                  <p>Aug 2021 - Present</p>
                  <p>Remote</p>
                </div>
                <ul>
                  <li>Developing & maintaining websites and web applications</li>
                  <li>Project management</li>
                  <li>
                    <strong>Skills:</strong> Twig · CSS · JavaScript · React.js · Drupal
                  </li>
                </ul>
              </article>

              <article className={styles.job}>
                <h4>Web Developer & Designer</h4>
                <div className={styles.jobDetails}>
                  <p>Interstellar Support; WEB-TIX, Tim Koprivnik s.p. · Freelance</p>
                  <p>Apr 2021 - Aug 2021 · 5 mos</p>
                  <p>Remote</p>
                </div>
                <ul>
                  <li>Developing & maintaining websites</li>
                  <li>Designing websites</li>
                  <li>Technical support</li>
                  <li>
                    <strong>Skills:</strong> Technical Support · CSS · PHP · WordPress · Figma
                  </li>
                </ul>
              </article>

              <article className={styles.job}>
                <h4>Wordpress Developer</h4>
                <div className={styles.jobDetails}>
                  <p>citiesapps · Full-time</p>
                  <p>Nov 2020 - Apr 2021 · 6 mos</p>
                  <p>Graz, Styria, Austria</p>
                </div>
                <ul>
                  <li>Developing & maintaining websites</li>
                  <li>WordPress plugin development</li>
                  <li>
                    <strong>Skills:</strong> PHP · JavaScript · React.js · WordPress · Adobe XD
                  </li>
                </ul>
              </article>

              <article className={styles.job}>
                <h4>Web Developer & Designer</h4>
                <div className={styles.jobDetails}>
                  <p>Adverta - digital marketing · Contract</p>
                  <p>Aug 2019 - Oct 2020 · 1 yr 3 mos</p>
                  <p>Maribor, Slovenia</p>
                </div>
                <ul>
                  <li>Developing web adds</li>
                  <li>Designing web ads</li>
                  <li>Technical support</li>
                  <li>
                    <strong>Skills:</strong> CSS · JavaScript · jQuery · HTML · Adobe Photoshop
                  </li>
                </ul>
              </article>
            </section>
          </MainContent>
        }
      />
      <Footer />
    </>
  );
};

export default AboutPage;
