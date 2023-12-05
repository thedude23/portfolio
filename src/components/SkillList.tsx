import React from 'react';

type SkillListProps = {
  hardSkills: string[];
  softSkills: string[];
  createSpecialMarkup: (text: string) => { __html: string };
};

const SkillList: React.FC<SkillListProps> = ({ hardSkills, softSkills, createSpecialMarkup }) => {
  return (
    <section>
      <h4>"Hard" skills</h4>
      <ul>
        {hardSkills.map((skill, index) => (
          <li key={index} dangerouslySetInnerHTML={createSpecialMarkup(skill)} />
        ))}
      </ul>
      <h4>"Soft" skills</h4>
      <ul>
        {softSkills.map((skill, index) => (
          <li key={index} dangerouslySetInnerHTML={createSpecialMarkup(skill)} />
        ))}
      </ul>
    </section>
  );
};

export default SkillList;
