import React, { ReactNode } from 'react';

type PageTemplateProps = {
  sidebar?: ReactNode;
  mainContent: ReactNode;
};

const PageTemplate: React.FC<PageTemplateProps> = ({ sidebar, mainContent }) => {
  return (
    <div>
      {sidebar}
      {mainContent}
    </div>
  );
};

export default PageTemplate;
