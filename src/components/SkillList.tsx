import React from 'react';

type SkillListProps = {
  hardSkills: string[];
  softSkills: string[];
  createSpecialMarkup: (text: string) => { __html: string };
};

const SkillList: React.FC<SkillListProps> = ({ hardSkills, softSkills, createSpecialMarkup }) => {
  return (
    <section>
      <h2>"Hard" skills</h2>
      <ul>
        {hardSkills.map((skill, index) => (
          <li key={index} dangerouslySetInnerHTML={createSpecialMarkup(skill)} />
        ))}
      </ul>
      <h2>"Soft" skills</h2>
      <ul>
        {softSkills.map((skill, index) => (
          <li key={index} dangerouslySetInnerHTML={createSpecialMarkup(skill)} />
        ))}
      </ul>
    </section>
  );
};

export default SkillList;
