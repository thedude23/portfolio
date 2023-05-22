import React, { ReactNode } from 'react';
import styles from './MainContent.module.scss';

interface MainContentProps {
  children: ReactNode;
  className?: string;
}

const MainContent: React.FC<MainContentProps> = ({ children, className = '' }) => {
  return <main className={`${styles.mainContent} ${className}`}>{children}</main>;
};

export default MainContent;
