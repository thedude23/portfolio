import React from 'react';
import styles from './ProjectList.module.scss';

type Link = {
  type: string;
  url: string;
  icon: string;
};

type Project = {
  name: string;
  image: string;
  description: string;
  links: Link[];
};

type ProjectListProps = {
  projects: Project[];
  imageMap: { [key: string]: string };
};

const ProjectList: React.FC<ProjectListProps> = ({ projects, imageMap }) => {
  return (
    <section className={styles.projects}>
      {projects.map((project, index) => (
        <div className={styles.project} key={index}>
          <h4 className={styles.projectName}>{project.name}</h4>
          <p className={styles.projectDescription}>{project.description}</p>
          <img src={imageMap[project.image]} alt={project.name} />
          <div className={styles.projectLinks}>
            {project.links.map((link, linkIndex) => (
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
  );
};

export default ProjectList;
