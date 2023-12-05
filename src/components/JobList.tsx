import React from 'react';
import styles from './JobList.module.scss';

type JobProps = {
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
  createSpecialMarkup: (text: string) => { __html: string };
};

const JobList: React.FC<JobProps> = ({ jobs, createSpecialMarkup }) => {
  return (
    <section className={styles.jobs}>
      <h2 className={styles.sectionTitle}>Jobs</h2>
      {jobs.map((job, index) => (
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
            {job.tasks.map((task, taskIndex) => (
              <li key={taskIndex}>{task}</li>
            ))}
            <li>
              <strong>Top Skills:</strong>{' '}
              {job.skills.map((skill, skillIndex) => (
                <React.Fragment key={skillIndex}>
                  {skillIndex !== 0 && ' · '}
                  <span dangerouslySetInnerHTML={createSpecialMarkup(skill)} />
                </React.Fragment>
              ))}
            </li>
          </ul>
        </article>
      ))}
    </section>
  );
};

export default JobList;
